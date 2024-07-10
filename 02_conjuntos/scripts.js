const reg1 = /[12345]/;

console.log(reg1.test('Tem o número 6?')); // false
console.log(reg1.test('Tem o número 2?')); // true
console.log(reg1.test('Tem o número 23?')); // true
console.log(reg1.test('Tem o número 60?')); // true

const reg2 = /[0-9]/;

console.log(reg2.test('Tem o número 65?')); // true
console.log(reg2.test('Tem o número?')); // false