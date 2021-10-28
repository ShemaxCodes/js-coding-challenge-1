// set Mark and John's Weight and height
let markMass = 78;
let markHeight = 1.69;
let johnMass = 92;
let johnHeight = 1.95;

// Calculate their BMI with the formula
markBMI = markMass / markHeight ** 2;
johnBMI = johnMass / johnHeight ** 2;

// Display it to the console
console.log(markBMI);
console.log(johnBMI);

// Compare their BMI's so the boolean will process it
// to be true or false
const markHigherBMI = markBMI > johnBMI;
console.log(markHigherBMI);

// SOLVED! :)
