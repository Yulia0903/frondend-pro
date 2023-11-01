"use strict";

alert("Welcome to calculator!");

let startWork = true;
const operationsHistory = [];

function sum(a, b) {
  return a + b;
}

function diff(a, b) {
  return a - b;
}

function mult(a, b) {
  return a * b;
}

function div(a, b) {
  return b === 0 ? "Division by zero is not allowed." : a / b;
}

function showNotification(type) {
  switch (type) {
    case "error":
      alert("This is a bad digit. Goodbye!");
      break;
    case "invalidNumber":
      alert("This is a bad digit. Enter a valid number!");
      break;
    case "notInteger":
      alert("This is not an integer. Enter an integer number!");
      break;
    case "positiveNumber":
      alert("Number must be positive.");
      break;
    case "unknownOperation":
      alert("I don't know this operation. Please enter a correct operation.");
      break;
    default:
      break;
  }
}

function getUserNumber(promptMessage) {
  let userNumber;
  while (true) {
    const userInput = prompt(promptMessage, 0);
    if (userInput === null) {
      startWork = false;
      showNotification("error");
      break;
    }

    if (userInput === "" || isNaN(parseFloat(userInput))) {
      showNotification("invalidNumber");
      continue;
    }

    userNumber = parseFloat(userInput);

    if (!Number.isInteger(userNumber)) {
      showNotification("notInteger");
      continue;
    }

    if (userNumber < 0 && promptMessage === "Enter the number") {
      showNotification("positiveNumber");
      continue;
    }

    break;
  }
  return userNumber;
}

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
      let firstNumber = getUserNumber("Enter the first number");
      if (!firstNumber) break calculator;
      let secondNumber = getUserNumber("Enter the second number");
      if (!secondNumber) break calculator;

      let operationResult;
      switch (whatActionNormal) {
        case "add":
          operationResult = sum(firstNumber, secondNumber);
          break;
        case "diff":
          operationResult = diff(firstNumber, secondNumber);
          break;
        case "mult":
          operationResult = mult(firstNumber, secondNumber);
          break;
        case "div":
          operationResult = div(firstNumber, secondNumber);
          break;
        default:
          showNotification("unknownOperation");
          break;
      }

      if (typeof operationResult === "number") {
        operationsHistory.push(
          `${whatActionNormal}: ${firstNumber} ${whatActionNormal} ${secondNumber} = ${operationResult}`
        );
        alert(`Result: ${operationResult}`);
      } else {
        alert(operationResult);
      }
      break;
    }

    case "sqrt":
    case "sin":
    case "cos": {
      let number = getUserNumber("Enter the number");
      if (!number) break calculator;

      let operationResult;
      switch (whatActionNormal) {
        case "sqrt":
          if (number >= 0) {
            operationResult = Math.sqrt(number);
          } else {
            showNotification("positiveNumber");
          }
          break;
        case "sin":
          operationResult = Math.sin(number);
          break;
        case "cos":
          operationResult = Math.cos(number);
          break;
        default:
          showNotification("unknownOperation");
          break;
      }

      if (typeof operationResult === "number") {
        operationsHistory.push(`${whatActionNormal}: ${operationResult}`);
        alert(`Result: ${operationResult}`);
      }
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
      showNotification("unknownOperation");
      break;
  }
} while (startWork);
