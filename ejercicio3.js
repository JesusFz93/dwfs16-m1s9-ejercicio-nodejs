const moment = require("moment")
const colors = require("colors")

const fechaHora = moment().format("DD/MM/YYYY HH:mm:ss")

console.log(`Hoy es: ${fechaHora}`)
console.log('hello'.green); // outputs green text
console.log('i like cake and pies'.underline.red) // outputs red underlined text
console.log('inverse the color'.inverse); // inverses the color
console.log('OMG Rainbows!'.rainbow); // rainbow
console.log('Run the trap'.trap); // Drops the bass