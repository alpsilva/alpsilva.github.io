$(document).ready(function () {
    $('#botao').click(function (e) {
        e.preventDefault();
        var musica = $('#preText').val();
        pedroLyrics(musica);
    });

    $('#botaoFetch').click(function (e) {
        e.preventDefault();
        pedroLyricsFetch();
    });

    function pedroLyrics(musica) {   
        console.log(musica);  
        var n_musica = ""; //musica processada
        var array_linhas = musica.split(/\r?\n/); // separa musica em linhas (versos)
        var linhas = array_linhas.length;
        for (var i = 0; i < linhas; i++) {
            var array_palavras = array_linhas[i].split(' '); //separa linhas em palavras
            var palavras = array_palavras.length;
            if (palavras > 1) {
                var aux = Math.floor(Math.random() * palavras); //seleciona uma palavra aleatoria p/ substituir
                if (aux == 0) {
                    aux++ //Para garantir que a primeira posição do array (vazia) nunca seja escolhida
                }
                var n_linha = ""; //nova linha
                for (var j = 0; j < palavras; j++) {
                    if (j == aux - 1) {
                        array_palavras[j] = "PEDRO" //substitui a palavra por PEDRO
                    }
                    n_linha = n_linha.concat(" ", array_palavras[j]);

                }
                n_musica = n_musica.concat(n_linha, "\n");
            } else {
                n_musica = n_musica.concat(" ", "\n")
            }
        }
        $('#posText').val(n_musica);

    }

    function pedroLyricsFetch() {
        var musica = "";
        var autor = $('#autor').val();
        var nome = $('#nome').val();
        var url = 'https://api.lyrics.ovh/v1/' + autor + '/' + nome;  
        $.get(url)
        .done(function(response){
            console.log(response);
            musica = response.lyrics;
            pedroLyrics(musica);
        })
        .fail(function(){
            console.log("Erro na API de lyrics");
        });
    }
})