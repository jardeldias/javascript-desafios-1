// Crie um programa que utilize o console.log para exibir uma mensagem de boas-vindas.
console.log('Seja bem vindo');
 console.log(' ');


// Crie uma variável chamada "nome" e atribua a ela o seu nome. Em seguida, utilize o console.log para exibir a mensagem "Olá, [seu nome]!" no console do navegador.
let nome = 'Jardel';
console.log(`Olá, [${nome}]!`);
 console.log(' ');


// Crie uma variável chamada "nome" e atribua a ela o seu nome. Em seguida, utilize o alert para exibir a mensagem "Olá, [seu nome]!" .
nome = 'Jardel';
alert(`Olá, [${nome}]`)

// Utilize o prompt e faça a seguinte pergunta: Qual a linguagem de programação que você mais gosta?. Em seguida, armazene a resposta em uma variável e mostre no console do navegador.
let linguagemProgamacaoFavorita = prompt('Qual a linguagem de programação que você mais gosta?');
console.log(`Linguagem de programação favorita do usuário é ${linguagemProgamacaoFavorita}`);
 console.log(' ');

// Crie uma variável chamada "valor1" e outra chamada "valor2", atribuindo a elas valores numéricos de sua escolha. Em seguida, realize a soma desses dois valores e armazene o resultado em uma terceira variável chamada "resultado". Utilize o console.log para mostrar a mensagem "A soma de [valor1] e [valor2] é igual a [resultado]." no console.
let valor1 = 5, valor2 = 4;
let resultado = valor1 + valor2;
console.log(`A soma de [${valor1}] e [${valor2}] é igual a [${resultado}].`);
 console.log(' ');


// Crie uma variável chamada "valor1" e outra chamada "valor2", atribuindo a elas valores numéricos de sua escolha. Em seguida, realize a subtração desses dois valores e armazene o resultado em uma terceira variável chamada "resultado". Utilize o console.log para mostrar a mensagem "A diferença entre [valor1] e [valor2] é igual a [resultado]." no console.
valor1 = 2, valor2 = 3;
resultado = valor1 - valor2;
console.log(`A diferença entre [${valor1}] e [${valor2}] é igual a [${resultado}].`);
 console.log(' ');


// Peça ao usuário para inserir sua idade com prompt. Com base na idade inserida, utilize um if para verificar se a pessoa é maior ou menor de idade, exibindo uma mensagem apropriada no console.
let idade = prompt('Informe sua idade');
if (idade >= 18){
    console.log(`${idade}, maior de idade.`);
} else {
    console.log(`${idade}, menor de idade.`);
}
 console.log(' ');


// Crie uma variável "numero" e peça um valor com prompt verifique se é positivo, negativo ou zero. Use if-else para imprimir a respectiva mensagem.
let numero = prompt('Informe um número');
if (numero > 0){
    console.log(`${numero}, positivo.`);
} else if (numero == 0){
    console.log(`${numero}`);
} else {
    console.log(`${numero}, é negativo`);
}
 console.log(' ');

// Use um loop while para imprimir os números de 1 a 10 no console.
console.log(`Contador de 1 à 10`);
let contador = 1;
while (contador <= 10){
    console.log(contador);
    contador++;
}
 console.log(' ');;

// Crie uma variável "nota" e atribua um valor numérico a ela. Use if-else para determinar se a nota é maior ou igual a 7 e exiba "Aprovado" ou "Reprovado" no console.
console.log('Aprovado ou reprovado, minimo, 7');
let nota = 10;
if (nota > 7){
    console.log('Aprovado.');
} else {
    console.log('Reprovado');
}
 console.log(' ');;

// Use o Math.random para gerar qualquer número aleatório e exiba esse número no console.
console.log('Número aleatório');
let numeroAleatorio = Math.random().toFixed(2);
console.log(`${numeroAleatorio}`);
 console.log(' ');;

// Use o Math.random para gerar um número inteiro entre 1 e 10 e exiba esse número no console.
console.log('Número aleatório entre 1 e 10')
let  numeroInteiro1a10 = parseInt(Math.random() * (10 - 1) + 1);
console.log(`Número inteiro ${ numeroInteiro1a10}`);
 console.log(' ');;

// Use o Math.random para gerar um número inteiro entre 1 e 1000 e exiba esse número no console.
console.log('Número inteiro aleatório entre 1 e 1000');
let numeroInteiro1a1000 = parseInt(Math.random() * (1000 - 1) + 1);
console.log(numeroInteiro1a1000);
console.log(' ');
