$(document).ready(function () {
    $('#botao').click(function (e) {
        e.preventDefault();
        pedroLyrics();
    });

    function pedroLyrics() {
        var musica = $('#preText').val();
        var n_musica = ""; //musica processada
        var array_linhas = musica.split(/\r?\n/); // separa musica em linhas (versos)
        var linhas = array_linhas.length;
        for (var i = 0; i < linhas; i++) {
            var array_palavras = array_linhas[i].split(' ') //separa linhas em palavras
            var palavras = array_palavras.length;
            var aux = Math.floor(Math.random() * palavras) //seleciona uma palavra aleatoria p/ substituir
            if (aux == 1) {
                aux++ //Para garantir que a primeira posição do array (vazia) nunca seja escolhida
            }
            var n_linha = ""; //nova linha
            if ( array_palavras[aux].length < 4){
                if(aux == palavras-1){
                    aux--;
                } else{
                    aux++;
                }
            }
            array_palavras[aux] = "PEDRO" //substitui a palavra por PEDRO
            n_musica = n_musica.concat(n_linha, "\n");
        }
        $('#posText').val(n_musica);

    }
})