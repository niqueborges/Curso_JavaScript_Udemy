const dia = /\d\d/; // [0-9] //

console.log(dia.test('2019') && '2019'.length == 2); // true
console.log(dia.test('asd')); // false
console.log(dia.test('05') && '05'.length == 2); // true
console.log(dia.test('asd1')); // true

let ano = /\d\d\d\d/; 
console.log(ano.test('05')); // false
console.log(ano.test('2019')); // true
console.log(ano.test('opa')); // false

let palavraTresLetras = /\w\w\w/; // [a-zA-Z0-9_]
console.log(palavraTresLetras.test('dia')); // true
console.log(palavraTresLetras.test('ano')); // true
console.log(palavraTresLetras.test('oi')); // true
console.log(palavraTresLetras.test('teste')); // true