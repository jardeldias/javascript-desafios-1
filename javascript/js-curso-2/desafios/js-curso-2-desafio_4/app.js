/*
v.Crie uma lista vazia, com o nome listaGenerica.

v.Crie uma lista de linguagens de programação chamada linguagensDeProgramacao com os seguintes elementos: 'JavaScript','C','C++', 'Kotlin' e 'Python'.

v.Adicione à lista linguagensDeProgramacao os seguintes elementos: 'Java', 'Ruby' e 'GoLang'.

v.Crie uma lista com 3 nomes e exiba no console apenas o primeiro elemento.

v.Crie uma lista com 3 nomes e exiba no console apenas o segundo elemento.

v.Crie uma lista com 3 nomes e exiba no console apenas o último elemento.  
*/

let listaGenerica = [];

let linguagensDeProgramacao = ['JavaScript', 'C', 'C++','Kotlin', 'Python'];
linguagensDeProgramacao.push('Java', 'Ruby','GoLang');

let listaNomes = ['João', 'José', 'Maria'];
console.log(listaNomes[0]);
console.log(listaNomes[1]);
console.log(listaNomes[listaNomes.length - 1]);
