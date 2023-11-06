/*
v.Pergunte ao usuário qual é o dia da semana. Se a resposta for "Sábado" ou "Domingo", mostre "Bom fim de semana!". Caso contrário, mostre "Boa semana!".

v.Verifique se um número digitado pelo usuário é positivo ou negativo. Mostre um alerta informando.

v.Crie um sistema de pontuação para um jogo. Se a pontuação for maior ou igual a 100, mostre "Parabéns, você venceu!". Caso contrário, mostre "Tente novamente para ganhar.".

v.Crie uma mensagem que informa o usuário sobre o saldo da conta, usando uma template string para incluir o valor do saldo.

v.Peça ao usuário para inserir seu nome usando prompt. Em seguida, mostre um alerta de boas-vindas usando esse nome.
*/

let diaSemana = prompt('Informe do dia da semana:');
if (diaSemana == 'Sábado' || diaSemana == 'Domingo'){
    alert('Bom final de semana!');
} else {
    alert('Boa semana!');
}

let numero = prompt('Informe um número:');
if (numero > 0){
    alert(`${numero} é positivo.`);
} else if(numero < 0){
    alert(`${numero} é negativo.`)
}

let numeroJogo = Math.random() * 200 + 1
if (numeroJogo >= 100){
    alert('Parabéns, você venceu!');
} else {
    alert('Tente novamente para ganhar.');
}

let saldo = 200;
alert(`Seu saldo atual é de R$${saldo.toFixed(2)}`)

let nome = prompt('Informe seu nome: ');
alert(`Bem vindo ${nome}`);