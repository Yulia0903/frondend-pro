"use strict";

alert("Welcome to calculator!");

let startWork = true;
const operationsHistory = [];

calculator: do {
  const whatAction = prompt(
    `What action you want to do? Add, Diff, Mult, Div, Sqrt, Sin, Cos, ${
      operationsHistory.length ? `,History` : " "
    }`
  );

  if (!whatAction) {
    startWork = false;
    alert("Goodbye, see you later!");
    break;
  }

  const whatActionNormal = whatAction.toLowerCase();

  switch (whatActionNormal) {
    case "add":
    case "diff":
    case "mult":
    case "div": {
      let firstNumber;
      let secondNumber;

      while (true) {
        let userNumber = prompt("Enter the first number", 0);
        if (userNumber === null) {
          startWork = false;
          alert("This is a bad digit. Goodbye!");
          break calculator;
        }

        if (userNumber === "" || isNaN(parseFloat(userNumber))) {
          alert("This is a bad digit. Enter a valid number!");
          continue;
        }

        firstNumber = parseFloat(userNumber);

        if (!Number.isInteger(firstNumber)) {
          alert("This is not an integer. Enter an integer number!");
          continue;
        }

        break;
      }

      do {
        let userNumber = prompt("Enter the second number", 0);
        if (userNumber === null) {
          startWork = false;
          alert("This is a bad digit. Goodbye!");
          break calculator;
        }

        if (userNumber === "" || isNaN(parseFloat(userNumber))) {
          alert("This is a bad digit. Enter a valid number!");
          continue;
        }

        secondNumber = parseFloat(userNumber);

        if (!Number.isInteger(secondNumber)) {
          alert("This is not an integer. Enter an integer number!");
          secondNumber = undefined;
          continue;
        }

        break;
      } while (true);

      let operationResult;
      switch (whatActionNormal) {
        case "add":
          operationResult = firstNumber + secondNumber;
          break;
        case "diff":
          operationResult = firstNumber - secondNumber;
          break;
        case "mult":
          operationResult = firstNumber * secondNumber;
          break;
        case "div":
          if (secondNumber === 0) {
            alert("Division by zero is not allowed.");
          } else {
            operationResult = firstNumber / secondNumber;
          }
          break;
        default:
          alert("Oops, erroneous operation!");
          break;
      }

      operationsHistory.push(
        `${whatActionNormal}: ${firstNumber} ${whatActionNormal} ${secondNumber} = ${operationResult}`
      );

      alert(`Result: ${operationResult}`);

      break;
    }

    case "sqrt":
    case "sin":
    case "cos": {
      let number;

      while (true) {
        const userNumber = prompt("Enter the number", 0);
        if (userNumber === null) {
          startWork = false;
          alert("This is a bad digit. Goodbye!");
          break calculator;
        }

        if (userNumber === "" || isNaN(parseFloat(userNumber))) {
          alert("This is a bad digit. Enter valid number!");
          continue;
        }

        number = parseFloat(userNumber);

        if (!Number.isInteger(number)) {
          alert("This is not an integer. Enter an integer number!");
          number = undefined;
          continue;
        }

        break;
      }

      let operationResult;
      switch (whatActionNormal) {
        case "sqrt":
          if (number >= 0) {
            operationResult = Math.sqrt(number);
          } else {
            alert("Number must be positive.");
            continue;
          }
          break;
        case "sin":
          operationResult = Math.sin(number);
          break;
        case "cos":
          operationResult = Math.cos(number);
          break;
        default:
          alert(
            "I don't know this operation. Please enter a correct operation."
          );
          break;
      }

      operationsHistory.push(`${whatActionNormal}: ${operationResult}`);

      alert(`Result: ${operationResult}`);

      break;
    }

    case "history": {
      if (operationsHistory.length === 0) {
        alert("You haven't done any operations yet.");
      } else {
        let historyMessage = "Your operations:\n";
        for (const operation of operationsHistory) {
          historyMessage += operation + "\n";
        }
        alert(historyMessage);
      }

      startWork = confirm(
        "Do you want to continue working with the calculator?"
      );
      if (!startWork) {
        alert("Goodbye, see you later!");
      }
      break;
    }

    default:
      alert("I don't know this operation. Please enter a correct operation.");
      break;
  }
} while (startWork);
