const containerVideos = document.querySelector(".videos__container");


async function buscarEMostrarVideos() {
        try{
        const busca = await fetch("http://localhost:3000/videos")
        const videos = await busca.json();

        /*.then(res => res.json()) /*Callback - Pegar as resposta do fetch e transformar em .JSON
        .then((videos) => /*Caminha por todos os vídeos que pegamos do .JSON e aplicar no HTML*/

            videos.forEach((video)=> {
                if(video.categoria = "") {
                    throw new Error('Vídeo não tem categoria');
                }
                containerVideos.innerHTML += `
                <li class="videos__item">
                    <iframe src="${video.url}" title="${video.titulo}" frameborder="0" allowfullscreen></iframe>
                    <div class="descricao-video">
                        <img class="img-canal" src="${video.imagem}" alt="Logo do canal">
                        <h3 class="titulo-video">${video.titulo}</h3>
                        <p class="titulo-canal">${video.descricao}</p>
                        <p class="categoria" hidden>${video.categoria}</p>
                    </div>
                </li>
                `;
                })
        /*
        .catch((error) => {
            containerVideos.innerHTML = `<p>Houve um erro ao carregar os vídeos: ${error}</p>`;
        })
        */
    } catch(error) {
        containerVideos.innerHTML = `<p>Houve um erro ao carregar os vídeos: ${error}</p>`;
    } 
} 

buscarEMostrarVideos();

const barraDePesquisa = document.querySelector('.pesquisar__input');

barraDePesquisa.addEventListener('input', filtrarPesquisa);

function filtrarPesquisa() {
    const videos = document.querySelectorAll('.videos__item');

    if(barraDePesquisa.value != '') {
        for(var video of videos) {
            var titulo = video.querySelector('.titulo-video').textContent.toLowerCase();
            var valorFiltro = barraDePesquisa.value.toLowerCase();

            if(!titulo.includes(valorFiltro)){
                video.style.display = 'none';
            } else {
                video.style.display = 'block';
            }

        }
    } else {
        video.style.display = 'block';
    }
}

const botaoCategoria = document.querySelectorAll(".superior__item");

botaoCategoria.forEach((botao) => {
    var nomeCategoria = botao.getAttribute("name");
    botao.addEventListener("click", () => filtrarPorCategoria(nomeCategoria));
})

function filtrarPorCategoria(filtro) {
    const videos = document.querySelectorAll(".videos__item");
    for(var video of videos){
        var categoria = video.querySelector(".categoria").textContent.toLowerCase();
        var valorFiltro = filtro.toLowerCase();

        if(!categoria.includes(valorFiltro) && valorFiltro != 'tudo'){
            video.style.display = "none";
        } else {
            video.style.display = "block";
        }
    }
}