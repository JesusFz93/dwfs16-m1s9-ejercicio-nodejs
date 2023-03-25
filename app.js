const calculadora = require("./calculadora")

const a = 10;
const b = 5;

const resultadoResta = calculadora.resta(a, b);
const resultadoDivision = calculadora.division(a, b);
const resultadoSuma = calculadora.suma(a, b);
const resultadoMultiplicacion = calculadora.multiplicacion(a, b);

console.log(`La resta de ${a} y ${b} es: ${resultadoResta}`);
console.log(`La division de ${a} y ${b} es: ${resultadoDivision}`);
console.log(`La suma de ${a} y ${b} es: ${resultadoSuma}`);
console.log(`La multiplicacion de ${a} y ${b} es: ${resultadoMultiplicacion}`);
