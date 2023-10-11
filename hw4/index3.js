"use strict";

let numFirst = Number(prompt("Введите первое число"));
let numSecond = Number(prompt("Введите второе число"));

if (isNaN(numFirst) || isNaN(numSecond)) {
  console.log("Вы ввели некорректные числа");
} else {
  if (numFirst % numSecond === 0) {
    console.log(`${numFirst} является делителем ${numSecond}.`);
  } else {
    console.log(`${numFirst} не является делителем ${numSecond}.`);
  }

  if (numSecond % numFirst === 0) {
    console.log(`${numSecond} является делителем ${numFirst}.`);
  } else {
    console.log(`${numSecond} не является делителем ${numFirst}.`);
  }
}
