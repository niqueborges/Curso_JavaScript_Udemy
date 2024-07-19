const cep = /\d{5}-\d{3}/; // 5 dígitos, hífen e 3 dígitos

console.log(cep.test("12345-123")); // true
console.log(cep.test("12345123")); // false
console.log(cep.test("12345-1234")); // false
console.log(cep.test("asd")); // false

const tel = /\(\d{2}\)\s\d{4,5}-\d{4}/; // (XX) XXXX-XXXX ou (XX) XXXXX-XXXXX

console.log(tel.test("(11) 1234-1234")); // true
console.log(tel.test("(11) 12345-1234")); // true
console.log(tel.test("(11) 1234-12345")); // false