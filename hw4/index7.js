"use strict";

let number = Number(prompt("Введите трехначное  число"));

if (!isNaN(number) && number >= 100 && number <= 999) {
  let num1 = (number / 100) | 0;
  let num2 = (number / 10) % 10 | 0;
  let num3 = number % 10;

  let sum = num1 + num2 + num3;

  if (sum % 5 === 0) {
    console.log("Сумма цифр кратна 5.");
  } else {
    console.log("Сумма цифр  не кратна 5.");
  }
} else {
  console.log("Вы ввели некорректное число.");
}
