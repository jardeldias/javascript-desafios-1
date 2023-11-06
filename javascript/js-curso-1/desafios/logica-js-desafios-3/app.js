// Crie um contador que comece em 1 e vá até 10 usando um loop while. Mostre cada número.
console.log('Console progressivo de 1 até 10');
let i = 0;
while (i < 10){
    i++;
    console.log(i);
}
console.log('------------')
// Crie um contador que começa em 10 e vá até 0 usando um loop while. Mostre cada número.
console.log('Contador regressivo, de 10 até 0');
c = 10;
while (c >= 0){
    console.log(c);
    c--;
}
console.log('------------')
// Crie um programa de contagem regressiva. Peça um número e conte deste número até 0, usando um loop while no console do navegador.
console.log('Contador regressivo, do número informado até 0');
let numero = prompt('Informe um número:');
while (numero > 0 ){
    console.log(numero);
    numero--;
}
console.log('------------')
// Crie um programa de contagem progressiva. Peça um número e conte de 0 até esse número, usando um loop while no console do navegador.
console.log('Contador progressivo, de 0 até o número informado.');
let fim = prompt('Informe outro número:');
let contador = 0;
while (fim >= contador){
    console.log(contador);
    contador++;
}
console.log('------------')
