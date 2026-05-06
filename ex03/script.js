alert ("Bem vindo ao caixa!");
let total = 0;
let valor;
valor = parseFloat(prompt("Digite o valor da compra (ou 0 para encerrar)"));

// !== significa "diferente de", continuar executando o loop enquanto o valor for diferente de zero
while (valor !== 0){
    if (valor > 0){
        total += valor;
    } else {
        alert ("Valor inválido, digite um valor positivo");
    }

valor = parseFloat (prompt("Digite o próximo valor (ou 0 para encerrar)"));
}

alert ("O valor da compra foi: R$" + total.toFixed(2));