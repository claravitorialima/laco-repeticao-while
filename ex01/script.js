let numero = parseFloat(prompt("Digite um número positivo"));

while (numero <= 0){
    alert ("Número inválido, por favor digite um número positivo");
    numero = parseFloat (prompt("Por gentileza, digite um número positivo!"));
}
alert ("Muito bem, este número é válido!");