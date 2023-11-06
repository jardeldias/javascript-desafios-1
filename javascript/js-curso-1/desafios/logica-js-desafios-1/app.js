/*
v.Mostre um alerta com a mensagem "Boas vindas ao nosso site!".

v.Declare uma variável chamada nome e atribua a ela o valor "Lua".

v.Crie uma variável chamada idade e atribua a ela o valor 25.

v.Defina uma variável numeroDeVendas e atribua a ela o valor 50.

v.Defina uma variável saldoDisponivel e atribua a ela o valor 1000.

v.Exiba um alerta com o texto "Erro! Preencha todos os campos."

v.Declare uma variável chamada mensagemDeErro e atribua a ela o valor "Erro! Preencha todos os campos." Agora exiba um alerta com o valor da variável mensagemDeErro.

v.Use um prompt para perguntar o nome do usuário e armazená-lo na variável nome.

v.Peça ao usuário para digitar sua idade usando um prompt e armazene-a na variável idade.

v.Agora, caso a idade seja maior ou igual que 18, exiba um alerta com a mensagem "Pode tirar a habilitação!".
 */
alert('Boas vindas ao nosso site!');
let nome = "Lua";
let idade = 25;
let numeroDeVendas = 50;
let saldoDisponivel = 1000;
alert("Erro! Preencha todos os campos.")

let mensagemDeErro = "Erro! Preencha todos os campos.";
alert(mensagemDeErro)

nome = prompt('Qual o seu nome?');
idade = prompt('Qual sua idade?')
if (idade >= 18){
    alert('Pode tirar a habilitação!');
}