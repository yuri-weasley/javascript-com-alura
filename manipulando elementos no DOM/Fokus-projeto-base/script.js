const html = document.querySelector('html');
const focoBt = document.querySelector('.app__card-button--foco');
const curtoBt = document.querySelector('.app__card-button--curto');
const longoBt = document.querySelector('.app__card-button--longo');
const botoes = document.querySelectorAll('.app__card-button');

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
    arrowfunction???
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