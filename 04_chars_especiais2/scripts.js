const dia = /\d\d/;

console.log(dia.test('2019') && '2019'.length == 2);
console.log(dia.test('asd'));
console.log(dia.test('05') && '05'.length == 2);
console.log(dia.test('asd1'));


let ano = /\d\d\d\d/;
console.log(ano.test('05'));
console.log(ano.test('2019'));
console.log(ano.test('opa'));

let palavraTresLetras = /\w\w\w/;
console.log(palavraTresLetras.test('dia'));
console.log(palavraTresLetras.test('ano'));
console.log(palavraTresLetras.test('oi'));
console.log(palavraTresLetras.test('teste'));