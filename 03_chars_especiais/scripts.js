const pontoRegex = /./;

console.log('.');
console.log(pontoRegex.test('asd'));
console.log(pontoRegex.test(' '));
console.log(pontoRegex.test('123'));
console.log(pontoRegex.test('123sad'));

const dRegex = /\d/; // [0-9]

console.log('d');
console.log(dRegex.test('asd'));
console.log(dRegex.test(' '));
console.log(dRegex.test('123'));
console.log(dRegex.test('123sad'));

const dRegex2 = /\D/; // [^0-9]

console.log('D');
console.log(dRegex2.test('asd'));
console.log(dRegex2.test(' '));
console.log(dRegex2.test('123'));
console.log(dRegex2.test('123sad'));

const sRegex2 = /\s/; // [ \t\n\r\f]

console.log('s');
console.log(sRegex2.test('asd'));
console.log(sRegex2.test(' '));
console.log(sRegex2.test('123'));
console.log(sRegex2.test('123sad'));

const wRegex2 = /\w/; //

console.log('w');
console.log(wRegex2.test('asd'));
console.log(wRegex2.test(' '));
console.log(wRegex2.test('123'));
console.log(wRegex2.test('123sad'));


