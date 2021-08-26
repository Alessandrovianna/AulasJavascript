function adicionarIngrediente() {
    //function ->tag para criar uma função || adicionarIngrediente() -> nome da função
    var ing = document.getElementById("ingrediente").value;
    //Pegando o valor que o usuario digitou e armazenando na variavel ing.
    var listahtml = document.getElementById("lista").innerHTML;  
    //pegando o conteudo da lista do html e armazenando na variavel listahtml
    listahtml = listahtml + "<li>"+ing+"</li>";
    //adicionando o que o usuario digitou na minha lista html.
    document.getElementById("lista").innerHTML =listahtml;
    //selecionando a minha lista e definindo um conteudo pra ela

    // Leitura do codigo
    /* A variavel ing recebe o valor que o usuario digitou
       a variavel listahtml recebeo conteudo da lista criada no html
       a variavel listahtml recebe a listahtml e concatena com o valor que o usuario digitar
       por ultimo selecionamos novamente a nossa lista e definimos um conteudo pra ela.
    */
}