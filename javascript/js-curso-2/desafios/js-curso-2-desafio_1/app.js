/*
v.Altere o conteúdo da tag h1 com document.querySelector e atribua o seguinte texto: Hora do Desafio.

v.Crie uma função que exiba no console a mensagem O botão foi clicado sempre que o botão Console for pressionado.

v.Crie uma função que exiba um alerta com a mensagem: Eu amo JS, sempre que o botão Alerta for pressionado.

v.Crie uma função que é executada quando o botão prompt é clicado, perguntando o nome de uma cidade do Brasil. Em seguida, exiba um alerta com a mensagem concatenando a resposta com o texto: Estive em {cidade} e lembrei de você.

v.Ao clicar no botão soma, peça 2 números e exiba o resultado da soma em um alerta.*/
document.querySelector('h1').innerHTML = 'Hora do desafio';

function botaoClicado(){
    console.log('O botão foi clicado.');
}

function alertEuAmoJS(){
    alert('Eu amo JS');
}

function promptCidade(){
    let cidade = prompt('Diga o nome de uma cidade do Brasil.')
    alert(`Estive em ${cidade} e lembrei de você`)
}

function soma(){
    let numero1 = prompt('Informe um número:')
    let numero2 = prompt('Agora informe mais um número:')
    let soma = parseInt(numero1) + parseInt(numero2)
    alert(`A soma entre ${numero1} e ${numero2} é ${soma}.`)
}