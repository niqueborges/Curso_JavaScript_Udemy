const padrao = /Abacax?i/;

console.log(padrao.test('Abacaxi')); // true
console.log(padrao.test('Abacai')); // true

const padrao2 = /\d+\w?/;