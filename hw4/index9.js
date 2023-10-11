"use strict";

let number = Number(prompt("Введите трехначное  число"));

if (!isNaN(number) && number >= 100 && number <= 999) {
  let num1 = (number / 100) | 0;
  let num2 = (number / 10) % 10 | 0;
  let num3 = number % 10;

  if (numt1 === num2 && num2 === num3) {
    console.log("Все цифры в числе  одинаковые.");
  } else {
    console.log("Не все цифры в числе одинаковые.");
  }
} else {
  console.log("Вы ввели некорректное  число.");
}
