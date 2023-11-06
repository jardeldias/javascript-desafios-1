/*
v.Criar uma função que exibe "Olá, mundo!" no console.

v.Criar uma função que recebe um nome como parâmetro e exibe "Olá, [nome]!" no console.

v.Criar uma função que recebe um número como parâmetro e retorna o dobro desse número.

v.Criar uma função que recebe três números como parâmetros e retorna a média deles.

v.Criar uma função que recebe dois números como parâmetros e retorna o maior deles.

v.Criar uma função que recebe um número como parâmetro e retorna o resultado da multiplicação desse número por ele mesmo
*/
function olaMundo() {
    console.log('Olá, mundo');
}

function olaNome(nome) {
    console.log(`Olá, ${nome}`);
}

function dobro(numero) {
    let dobroNumero = numero * 2;
    return console.log(`o dobro de ${numero} é ${dobroNumero}`)
}

function media3(n1,n2,n3) {
    let media = (parseInt(n1), parseInt(n2), parseInt(n3))/3
    return media;
}

function maior(n1, n2){
    let maior;
    if (n1 > n2){
        maior = n1;
    } else {
        maior = n2;
    }
    return console.log(maior);
}

function aoQuadrado(numero) {
    let quadrado = numero * numero;
    return console.log(quadrado);
}

olaMundo();
olaNome('jardel');
dobro(5);
media3(10,10,10);
maior(2,8);
aoQuadrado(5);