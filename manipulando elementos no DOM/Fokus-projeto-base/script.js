const html = document.querySelector('html');
const focoBt = document.querySelector('.app__card-button--foco');
const curtoBt = document.querySelector('.app__card-button--curto');
const longoBt = document.querySelector('.app__card-button--longo');

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

focoBt.addEventListener('click', () => {
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