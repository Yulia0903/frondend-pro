"use strict";

alert("Welcome to calculator!");

const whatAction = prompt(
  "What action you want to do? Add, Diff, Mult, Div, Sqrt, Sin, Cos"
);

let result;

switch (whatAction) {
  case "Add":
  case "Diff":
  case "Mult":
  case "Div": {
    const firstNumber = prompt("Enter the first number");
    const secondNumber = prompt("Enter the second number");
    const isInvalidInput =
      firstNumber === null ||
      secondNumber === null ||
      isNaN(firstNumber) ||
      isNaN(secondNumber)
        ? alert("This is a bad digit, good bye.")
        : result;
    result =
      whatAction === "Add"
        ? Number(firstNumber) + Number(secondNumber)
        : whatAction === "Diff"
        ? Number(firstNumber) - Number(secondNumber)
        : whatAction === "Mult"
        ? Number(firstNumber) * Number(secondNumber)
        : whatAction === "Div" && Number(secondNumber) !== 0
        ? Number(firstNumber) / Number(secondNumber)
        : undefined;

    if (result !== undefined) {
      alert(
        `Result of ${whatAction} of ${firstNumber} and ${secondNumber} is ${result}`
      );
    }
    break;
  }

  case "Sqrt":
  case "Sin":
  case "Cos": {
    const number = prompt("Enter a number");

    const isInvalidfirstNumber =
      number === null || isNaN(number)
        ? alert("This is a bad digit, good bye.")
        : result;

    result =
      whatAction === "Sqrt"
        ? Math.sqrt(Number(number))
        : whatAction === "Sin"
        ? Math.sin(Number(number))
        : whatAction === "Cos"
        ? Math.cos(Number(number))
        : undefined;

    if (result !== undefined) {
      alert(`Result of ${whatAction} of ${number}  is ${result}`);
    }
    break;
  }

  default: {
    alert("Good bye, see you later.");
  }
}
