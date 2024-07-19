const umOuMaisNumeros = /\d+/; // [0-9] //

console.log(umOuMaisNumeros.test("1518")); // true
console.log(umOuMaisNumeros.test("")); // false
console.log(umOuMaisNumeros.test("asdasdas")); // false