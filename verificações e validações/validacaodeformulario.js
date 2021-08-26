function validar() {

    var valor = document.getElementById("numero").value;
    //Pegando o valor que foi digitado no campo
    if (valor.length > 2) {
        alert("Você digitou um numero que tem mais de 2 algarismos.");
        return false;
    }else {
        return true;
    }
    //com o length sabemos quantos algarimos foi digitado
    //entao se valor.length for maior que 2 algarismos ele vai dar
    //um return false e nao vai enviar o formulario
    // e se for menor ou igual a 2 ele vai dar 
    //um return true, vai enviar o formulario
}