console.log(`\nTrabalhando com condicionais`);

const listasDeDestinos = new Array(
    `Salvador`,
    `São Paulo`,
    `Rio de Janeiro`
);

const idadeComprador = 18;
const estaAcompanhada = false;
let temPassagemComprada = false;
const destino = "Rio de Janeiro";


console.log("\nDestinos possíveis:");
console.log(listasDeDestinos);

const podeComprar = idadeComprador >= 18 || estaAcompanhada == true;

let contador = 0;
while (contador < 3) {
    console.log(listasDeDestinos[contador]);
}