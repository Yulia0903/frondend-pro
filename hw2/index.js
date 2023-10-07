"use strict";

let number1;
let number2;

let sum;
let diff;
let mult;
let div;

number1 = prompt("Please, enter the first number");
number2 = prompt("Please, enter the second number");

sum = `Sum: ${number1} + ${number2} = ${Number(number1) + Number(number2)}`;
diff = `Diff: ${number1} - ${number2} = ${Number(number1) - Number(number2)}`;
mult = `Mult: ${number1} * ${number2} = ${Number(number1) * Number(number2)}`;
div = `Div: ${number1} / ${number2} = ${Number(number1) / Number(number2)}`;

const result = `${sum}\n${diff}\n${mult}\n${div}`;

alert(result);
