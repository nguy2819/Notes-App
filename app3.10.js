// const add = require('./utils.js')

// const sum = add(4, -5)

// console.log(sum)

//
//Challenge #2: Define and use a function in a new file
//
//1. Create a new file called notes.js
//2. Create getNotes function that returns "Your notes..."
//3. Export getNotes function
//4. From app.js load in and call the function printing message to console

// const validator = require('validator')
// const chalk = require('chalk')

const getNotes = require('./notes.js')

const msg = getNotes()

console.log(msg)

// console.log(validator.isURL('http//mead.io'))
// console.log(validator.isEmail('tien@example.com'))



//
//Challange #3: Use the chalk library in your project
//
//1. Install the new version of chalk
//2. Load chalk into app.js or app3.10.js
//3. Use it to print the string "Success!" to the console in green
//4. Test your work
//
// Bonus: Use docs to mess around with other styles. Make text bold and inversed.

const chalk = require('chalk')

console.log(chalk.green('Success!'))

const greenMsg = chalk.yellow.bold.inverse('Yay!')
console.log(greenMsg)