alert ("Seja bem vindo ao sistema de médias!")
let soma = 0;
let contador = 0;
let nota = parseFloat(prompt("Digite uma nota (ou um número negativo para sair)"));

while (nota >= 0){
    if (nota <= 10){
        soma += nota;
        contador++;
    } else {
        alert ("Nota inválida, digite apenas entre 0 e 10");
    }
nota = parseFloat (prompt("Digite a próxima nota (ou um negativo para sair)"));
}

if (contador > 0){
    alert ("A média das notas é: " + (soma / contador));
} else {
    alert ("Nenhuma nota foi registrada");
}
