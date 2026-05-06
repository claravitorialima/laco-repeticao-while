alert ("Bem vindo, digite por favor os seus dados!");
let nome = prompt ("Digite seu priemiro nome");

// Enquanto o nome estiver vazio (apenas ""), o loop se repete
while (nome == ""){
    alert ("Erro, o nome não pode ficar em branco!");
    nome = prompt ("Digite seu priemiro nome");
}

let sobrenome = prompt ("Digite seu sobrenome");

while (sobrenome ==""){
    alert ("Erro, o sobrenome não pode ficar em branco!");
    sobrenome = prompt ("Digite seu sobrenome");
}

alert ("Cadastro realizado com sucesso, " + nome + " " + sobrenome);