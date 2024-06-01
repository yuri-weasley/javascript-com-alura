console.log(`\nTrabalhando com condicionais`);

const listasDeDestinos = new Array(
    `Salvador`,
    `São Paulo`,
    `Rio de Janeiro`
);

const idadeComprador = 17;
const estaAcompanhada = true;
let temPassagemComprada = false;
const destino = "Curitiba";


console.log("\nDestinos possíveis:");
console.log(listasDeDestinos);

const podeComprar = idadeComprador >= 18 || estaAcompanhada == true;

let contador = 0;
let destinoExiste = false;
while (contador < 3) {
    if(listasDeDestinos[contador] == destino) {
        destinoExiste = true;
        break;
    }
    contador +=1;
}

console.log("Destino existe: ", destinoExiste);

if (podeComprar && destinoExiste) {
    console.log("Boa viagem!");
} else {
    console.log("Desculpe, tivemos um erro!");
}

for(let i = 0;i < 3; i++) {
    if(listasDeDestinos[i] == destino) {
        destinoExiste = true;
    }
}