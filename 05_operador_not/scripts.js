const notab = /[^ab]/; // ^ é o operador de negação

console.log(notab.test('a')); // false
console.log(notab.test('Aqui tem a')); // true

const nottoaz = /[^ab]/; // ^ é o operador de negação

console.log(nottoaz.test('123 as')); // true
console.log(nottoaz.test('asdfghjklç')); // true

const az = /[a-z]/; 

console.log(nottoaz.test('asd123asdad')); // true