function somar() {
    var campo1 = parseInt(document.getElementById("campo1").value);
    var campo2 = parseInt(document.getElementById("campo2").value);

    var soma = campo1 + campo2;

    alert(soma);
    
    /*parseInt - é uma função que interpreta o que o usuario digitar em um numero,
      se nao usarmos ela, tudo que o usuario digitar vai ser interpretado como texto
    */
}

