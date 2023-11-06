/*
V.Crie uma função que calcule o índice de massa corporal (IMC) de uma pessoa, a partir de sua altura, em metros, e peso, em quilogramas, que serão recebidos como parâmetro.

v.Crie uma função que calcule o valor do fatorial de um número passado como parâmetro.

v.Crie uma função que converte um valor em dólar, passado como parâmetro, e retorna o valor equivalente em reais. Para isso, considere a cotação do dólar igual a R$4,80.

v.Crie uma função que mostre na tela a área e o perímetro de uma sala retangular, utilizando altura e largura que serão dadas como parâmetro.

v.Crie uma função que mostre na tela a área e o perímetro de uma sala circular, utilizando seu raio que será fornecido como parâmetro. Considere Pi = 3,14.

v.Crie uma função que mostre na tela a tabuada de um número dado como parâmetro.
*/

function imc(alturaMetros,pesoKilograma){
    return pesoKilograma / pesoKilograma * 2;
}

function fatorial(numero) {
    if (numero === 0 || numero === 1)
        return 1;

    for(let i = numero - 1; i >= 1 ; i--)
        numero *= i;

    return numero;
}

function dollarReal(dollar) {
    return dollar * 4.8;
}

function perimetro(altura, largura) {
    return altura * 2 + largura * 2;    
}

function areaCircular(raio) {
    return Math.PI * raio**2;    
}

function consoleTabuada(numero) {
    for (let i = 1; i <= 10; i++)
        console.log(`${numero} x ${i} = ${numero * i}`);
    
}

console.log(`IMC = ${imc(1.60, 60)}`);
console.log(`O fatorial de 5! é ${fatorial(5)}`);
console.log(`$5,00 é equivalente a R$${dollarReal(5).toFixed(2)}`);
console.log(`O perímetro de retângular de 1 metro para 1 metro é ${perimetro(1,1)} metros.`);
console.log(`A área de um circulo de 5 metros é aproximadamente ${areaCircular(5).toFixed(4)}`);
consoleTabuada(5);