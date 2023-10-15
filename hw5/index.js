"use strict";

alert("Welcome to calculator!");

const whatAction = prompt(
  "What action you want to do? Add, Diff, Mult, Div, Sqrt, Sin, Cos"
);

if (whatAction === null) {
  alert("Good bye, see you later.");
} else {
  if (
    whatAction === "Add" ||
    whatAction === "Diff" ||
    whatAction === "Mult" ||
    whatAction === "Div"
  ) {
    const firstNumber = prompt("Enter the first number");
    const secondNumber = prompt("Enter the second number");

    if (
      firstNumber === null ||
      secondNumber === null ||
      isNaN(firstNumber) ||
      isNaN(secondNumber)
    ) {
      alert("This is a bad digit, good bye.");
    } else {
      let result;
      if (whatAction === "Add") {
        result = Number(firstNumber) + Number(secondNumber);
      } else if (whatAction === "Diff") {
        result = Number(firstNumber) - Number(secondNumber);
      } else if (whatAction === "Mult") {
        result = Number(firstNumber) * Number(secondNumber);
      } else if (whatAction === "Div") {
        if (Number(secondNumber) !== 0) {
          result = Number(firstNumber) / Number(secondNumber);
        } else {
          alert("Division by zero is not allowed. Good bye.");
          result = undefined;
        }
      }

      if (result !== undefined) {
        alert(
          `Result of ${whatAction} of ${firstNumber} and ${secondNumber} is ${result}`
        );
      }
    }
  } else if (
    whatAction === "Sqrt" ||
    whatAction === "Sin" ||
    whatAction === "Cos"
  ) {
    const number = prompt("Enter a number");

    if (number === null || isNaN(number)) {
      alert("This is a bad digit, good bye.");
    } else {
      let result;

      if (whatAction === "Sqrt") {
        result = Math.sqrt(Number(number));
      } else if (whatAction === "Sin") {
        result = Math.sin(Number(number));
      } else if (whatAction === "Cos") {
        result = Math.cos(Number(number));
      }

      alert(`Result of ${whatAction} of ${number} is ${result}`);
    }
  } else {
    alert("Good bye, see you later.");
  }
}
