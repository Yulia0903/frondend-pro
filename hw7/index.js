"use strict";

alert("Welcome to calculator!");

let startWork = true;

calculator: do {
  const whatAction = prompt(
    "What action you want to do? Add, Diff, Mult, Div, Sqrt, Sin, Cos"
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
          firstNumber = undefined;
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

      switch (whatActionNormal) {
        case "add":
          alert(
            `Sum of ${firstNumber} and ${secondNumber} is ${
              firstNumber + secondNumber
            }`
          );
          break;
        case "diff":
          alert(
            `Difference of ${firstNumber} and ${secondNumber} is ${
              firstNumber - secondNumber
            }`
          );
          break;
        case "mult":
          alert(
            `Product of ${firstNumber} and ${secondNumber} is ${
              firstNumber * secondNumber
            }`
          );
          break;
        case "div":
          if (secondNumber === 0) {
            alert("Division by zero is not allowed.");
          } else {
            alert(
              `Division of ${firstNumber} by ${secondNumber} is ${
                firstNumber / secondNumber
              }`
            );
          }
          break;
        default:
          alert("Oops, erroneous operation!");
          break;
      }

      startWork = confirm(" Do you want continie work with calculation?");
      if (!startWork) {
        alert("Goodbye, see you later!");
      }
      break;
    }

    case "sqrt":
    case "sin":
    case "cos": {
      let number;

      while (true) {
        const userNumber = prompt("Enter the  number", 0);
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
          number = undefined; // Очистити значення number
          continue;
        }

        break;
      }

      if (whatActionNormal === "sqrt") {
        if (number >= 0) {
          alert(`Square root of ${number} is ${Math.sqrt(number)}`);
        } else {
          alert("Number must be positive.");
        }
      } else if (whatActionNormal === "sin") {
        alert(`Sine of ${number} is ${Math.sin(number)}`);
      } else if (whatActionNormal === "cos") {
        alert(`Cosine of ${number} is ${Math.cos(number)}`);
      } else {
        alert("I don't know this operation. Please enter a correct operation.");
      }

      startWork = confirm(" Do you want continie work with calculation?");
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
