

var musica = message.substring(6);
var n_musica = ""; //musica processada
var array_linhas = musica.split(/\r?\n/); // separa musica em linhas (versos)
var linhas = array_linhas.length;
for (var i = 0; i < linhas; i++) {
    var array_palavras = array_linhas[i].split(' ') //separa linhas em palavras
    var palavras = array_palavras.length;
    console.log(array_palavras);
    console.log(palavras);
    var aux = Math.floor(Math.random() * palavras) + 1 //seleciona uma palavra aleatoria p/ substituir
    if (aux == 1) {
        aux++ //Para garantir que a primeira posição do array (vazia) nunca seja escolhida
    }
    var n_linha = ""; //nova linha
    console.log(aux);
    for (var j = 0; j < palavras; j++) {
        if (j == aux - 1) {
            array_palavras[j] = "PEDRO" //substitui a palavra por PEDRO
        }
        n_linha = n_linha.concat(" ", array_palavras[j]);

    }
    n_musica = n_musica.concat(n_linha, "\n");
}
bot.sendMessage({
    to: channelID,
    message: String(n_musica)
});
