alert ("Bem vindo ao Caixa Eletrônico!");
let saldo = 1000;
alert ("Saldo atual: R$ " + saldo.toFixed(2));
while (saldo > 0){
    let saque = parseFloat(prompt("Qual o valor do saque? Digite:"));

    if (saque > saldo){
        alert ("Saldo insuficiente. Tente novamente.");
        continue;
    }

    if (saque <= 0){
        alert ("Valor inválido, tente novamente.");
        continue;
    }

    saldo -= saque;
    alert ("Saque realizado com sucesso. Saldo atual: R$ " + saldo.toFixed(2));

    if (saldo <= 0){
        alert ("Saldo esgotado, encerrando sessão");
    }
}