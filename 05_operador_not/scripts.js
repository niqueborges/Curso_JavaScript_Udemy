const notab = /[^ab]/;

console.log(notab.test('a')); // false
console.log(notab.test('Aqui tem a')); 

const nottoaz = /[^ab]/;

console.log(nottoaz.test('123 as')); 
console.log(nottoaz.test('asdfghjklç'));

const az = /[a-z]/;

console.log(nottoaz.test('asd123asdad'));