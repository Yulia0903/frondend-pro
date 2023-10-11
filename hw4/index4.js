"use strict";

let number = prompt("Введите двузначное число");
let lastNumber = number % 10;

if (isNaN(number)) {
  console.log("Вы ввели некорректное число");
} else {
  if (lastNumber % 2 === 0) {
    console.log(`Последняя цифра (${lastNumber}) четная.`);
  } else {
    console.log(`Последняя цифра (${lastNumber})  нечетная.`);
  }
}
