const pontoRegex = /./;

console.log('.'); // Qualquer caractere
console.log(pontoRegex.test('asd')); // true
console.log(pontoRegex.test(' ')); // true
console.log(pontoRegex.test('123')); // true
console.log(pontoRegex.test('123sad')); // true

const dRegex = /\d/; // [0-9] //

console.log('d'); // Qualquer caractere
console.log(dRegex.test('asd')); // false
console.log(dRegex.test(' ')); // false
console.log(dRegex.test('123')); // true
console.log(dRegex.test('123sad')); // true

const dRegex2 = /\D/; // [^0-9]

console.log('D'); // Qualquer caractere
console.log(dRegex2.test('asd')); // true
console.log(dRegex2.test(' ')); // true
console.log(dRegex2.test('123')); // false
console.log(dRegex2.test('123sad')); // true

const sRegex2 = /\s/; // [ \t\n\r\f]

console.log('s'); // Qualquer caractere
console.log(sRegex2.test('asd')); // false
console.log(sRegex2.test(' ')); // true
console.log(sRegex2.test('123')); // false
console.log(sRegex2.test('123sad')); // false

const wRegex2 = /\w/; //    

console.log('w'); // Qualquer caractere
console.log(wRegex2.test('asd')); // true
console.log(wRegex2.test(' ')); // false
console.log(wRegex2.test('123')); // true
console.log(wRegex2.test('123sad')); // true




