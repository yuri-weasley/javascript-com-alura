const html = document.querySelector('html');
const focoBt = document.querySelector('.app__card-button--foco');
const curtoBt = document.querySelector('.app__card-button--curto');
const longoBt = document.querySelector('.app__card-button--longo');
const botoes = document.querySelectorAll('.app__card-button');
const startPauseBt = document.querySelector('#start-pause');

const musicaFocoInput = document.querySelector('#alternar-musica');
const musica = new Audio('sons/luna-rise-part-one.mp3');
musica.loop = true;
var tempoDecorridoEmSegundos = 5;
var intervaloId = null;

const temp = document.querySelector('.app__card-timer');
const imagem = document.querySelector('.app__image');
const frase = document.querySelector('.app__title');
var btnInicio = document.querySelector('.app__card-primary-button');
var btnFoco = document.querySelector('.app__card-button--foco');
var btnCurto = document.querySelector('.app__card-button--curto');
var btnLongo = document.querySelector('.app__card-button--longo');
const tempoFoco = 1500;
const tempoCurto = 300;
const tempoLongo = 900;

/*
focoBt.addEventListener('click', () => {
    arrowfunction??? É uma forma de declara uma função anônima
    html.setAttribute('data-contexto', 'foco');
    imagem.setAttribute('src', 'imagens/foco.png');
})

curtoBt.addEventListener('click', () => {
    html.setAttribute('data-contexto', 'descanso-curto');
    imagem.setAttribute('src', 'imagens/descanso-curto.png');
})

longoBt.addEventListener('click', () => {
    html.setAttribute('data-contexto', 'descanso-longo');
    imagem.setAttribute('src', 'imagens/descanso-longo.png');
})
*/

musicaFocoInput.addEventListener('change', () => {
    if(musica.paused) {
        musica.play();
    } else {
        musica.pause();
    }
})
function alterarContexto(contexto) {
    botoes.forEach(function(contexto){
        contexto.classList.remove('active');
    })
    html.setAttribute('data-contexto', contexto);
    imagem.setAttribute('src', `imagens/${contexto}.png`);

    switch(contexto) {
        case "foco":
            frase.innerHTML = `Otimize sua produtividade,<br>
            <strong class="app__title-strong">mergulhe no que importa.</strong>`
        break;
        case "descanso-curto":
            frase.innerHTML = `Que tal dar uma respirada?<br>
            <strong class="app__title-strong">Faça uma pausa curta!</strong>`
        break;
        case "descanso-longo":
            frase.innerHTML = `Hora de voltar à superfície.<br>
            <strong class="app__title-strong">Faça uma pausa longa.</strong>`
        default:
            break;
    }
}
focoBt.addEventListener('click', () => {
    alterarContexto('foco');
    focoBt.classList.add('active');
})

curtoBt.addEventListener('click', () => {
  alterarContexto('descanso-curto');
  curtoBt.classList.add('active');
})

longoBt.addEventListener('click', () => {
    alterarContexto('descanso-longo');
    longoBt.classList.add('active');
})

const contagemRegressiva = () => {
    if(tempoDecorridoEmSegundos <= 0) {
        zerar();
        alert('Tempo finalizado!');
        return;
    }
    tempoDecorridoEmSegundos -= 1;
    console.log('Temporizador: ' + tempoDecorridoEmSegundos);
}

startPauseBt.addEventListener('click', iniciarOuPausar);

function iniciarOuPausar() {
    if(intervaloId) {
        zerar();
        return;
    }
    intervaloId = setInterval(contagemRegressiva, 1000);
}
function zerar() {
    clearInterval(intervaloId)
    intervaloId = null;
}