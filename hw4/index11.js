"use strict";

let number = Number(prompt("Введите шестизначное число"));

if (!isNaN(number) && number >= 100000 && number <= 999999) {
  let mirrorNumber =
    number % 10 === parseInt(number / 100000, 10) &&
    parseInt(number / 10, 10) % 10 === parseInt(number / 10000, 10) % 10 &&
    parseInt(number / 100, 10) % 10 === parseInt(number / 1000, 10) % 10;

  if (mirrorNumber) {
    console.log("Число является зеркальным");
  } else {
    console.log("Число не является зеркальным");
  }
} else {
  console.log("Вы ввели некорректное  число.");
}
