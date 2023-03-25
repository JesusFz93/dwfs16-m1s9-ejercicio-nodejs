const { resta, division, suma, multiplicacion } = require("./calculadora")

// const suma = require("./operaciones/suma")
// const resta = require("./operaciones/resta")
// const multiplicacion = require("./operaciones/multiplicacion")
// const division = require("./operaciones/division")

const a = 10;
const b = 5;

const resultadoResta = resta(a, b);
const resultadoDivision = division(a, b);
const resultadoSuma = suma(a, b);
const resultadoMultiplicacion = multiplicacion(a, b);

console.log(`La resta de ${a} y ${b} es: ${resultadoResta}`);
console.log(`La division de ${a} y ${b} es: ${resultadoDivision}`);
console.log(`La suma de ${a} y ${b} es: ${resultadoSuma}`);
console.log(`La multiplicacion de ${a} y ${b} es: ${resultadoMultiplicacion}`);
