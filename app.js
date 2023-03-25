const calculadora = require("./calculadora")

const a = 15;
const b = 5;

const resultadoResta = calculadora.resta(a, b);
const resultadoDivision = calculadora.division(a, b);

console.log(`La resta de ${a} y ${b} es: ${resultadoResta}`);
console.log(`La division de ${a} y ${b} es: ${resultadoDivision}`);
