"use strict";

let number = Number(prompt("Введите двузначное число"));

if (!isNaN(number) && number >= 10 && number <= 99) {
  let firstNumber = Number(String(number)[0]);
  let secondNumber = number % 10;

  if (firstNumber > secondNumber) {
    console.log(`Первая цифра (${firstNumber}) больше второй.`);
  } else if (secondNumber > firstNumber) {
    console.log(`Вторая цифра (${secondNumber}) больше первой.`);
  } else {
    console.log(`Первая и вторая цифры (${firstNumber}) равны.`);
  }
} else {
  console.log("Вы ввели некорректное число.");
}
