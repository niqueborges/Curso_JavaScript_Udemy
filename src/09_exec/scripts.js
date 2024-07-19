const digitos = /\d+/; // 1 ou mais dígitos

console.log(digitos.exec("Tem o número 100 aqui")); // [ '100', index: 12, input: 'Tem o número 100 aqui', groups: undefined ]
console.log(digitos.exec("Tem o número aqui")); // null