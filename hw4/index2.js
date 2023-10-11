"use strict";

let num1 = Number(prompt("Введите растояние в километрах"));
let num2 = Number(prompt("Введите растояние в футах"));
let numKm = num1 * 1000;
let numFeet = num2 * 0.305;

console.log(numKm);
console.log(numFeet);

if (isNaN(numKm) || isNaN(numFeet)) {
  console.log(`Вы ввели не верное значение`);
} else {
  if (numKm > numFeet) {
    console.log(`Значение в футах (${num2}) меньше.`);
  } else if (numKm < numFeet) {
    console.log(`Значение в км (${num1}) меньше.`);
  } else {
    console.log(`Значение в км (${num1}) равное значению в футах (${num2}).`);
  }
}
