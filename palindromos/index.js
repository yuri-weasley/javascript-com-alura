/* essaPalavraEUmPalindromo();

function essaPalavraEUmPalindromo() {
    var palavra = 'rever';
    var separandoAsLetrasDaPalavra = palavra.split('');
    var palavraInvertida = separandoAsLetrasDaPalavra.reverse();
    palavraInvertida = palavraInvertida.join('');
    if(palavra == palavraInvertida) {
        console.log("A palavra " + palavra + "é um palíndromo!");
    } else {
        console.log("A palavra " + palavra + "não é um palíndromo!");
    }
} */

const essaPalavraEUmPalindromo = function essaPalavraEUmPalindromo(palavra) {
    var separandoAsLetrasDaPalavra = palavra.split('');
    var palavraInvertida = separandoAsLetrasDaPalavra.reverse();
    palavraInvertida = palavraInvertida.join('');
    if(palavra == palavraInvertida) {
        console.log("A palavra " + palavra + " é um palíndromo!");
    } else {
        console.log("A palavra " + palavra + " não é um palíndromo!");
    }
}
essaPalavraEUmPalindromo('radar');