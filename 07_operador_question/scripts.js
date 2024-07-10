const padrao = /Abacax?i/; // ? -> 0 ou 1 vez

console.log(padrao.test('Abacaxi')); // true
console.log(padrao.test('Abacai')); // true

const padrao2 = /\d+\w?/;

console.log(padrao2.test('123')); // true
console.log(padrao2.test('123a')); // true
console.log(padrao2.test('123 ')); // true