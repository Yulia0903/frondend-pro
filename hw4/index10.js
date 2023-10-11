"use strict";

let number = Number(prompt("Введите трехначное  число"));

if (!isNaN(number) && number >= 100 && number <= 999) {
  let num1 = (number / 100) | 0;
  let num2 = (number / 10) % 10 | 0;
  let num3 = number % 10;

  if (num1 === num2 || num2 === num3 || num1 === num3) {
    console.log("Есть одинаковые цифры.");
  } else {
    console.log("Нет одинаковых цифр.");
  }
} else {
  console.log("Вы ввели некорректное  число.");
}
