console.log(`Trabalhando com listas`);
// const salvador = `Salvador`;
// const sãoPaulo = `São Paulo`;
// const rioDeJaneiro = `Rio de Janeiro`; ctrl+k+u e ctrl+k+c

const listasDeDestinos = new Array(
    `Salvador`,
    `São Paulo`,
    `Rio de Janeiro`,
    
);

listasDeDestinos.push(`Curitiba`);//add um item na lista
console.log("Destinos possíveis:");
//console.log(salvador, sãoPaulo, rioDeJaneiro);
console.log(listasDeDestinos);

listasDeDestinos.splice(1,1) //remover um item da lista, o contrário do push. usa o índice: posição e qtd de elementos
console.log(listasDeDestinos);


console.log(listasDeDestinos[1], listasDeDestinos[0]);