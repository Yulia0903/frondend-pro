"use strict";

let numFirst = Number(prompt("Plese, enter first number"));
let numSecond = Number(prompt("Plese, enter second number"));

if (isNaN(numFirst) || isNaN(numSecond)) {
  console.log("You enter incorrect numbers");
} else {
  if (numFirst > numSecond) {
    console.log(
      `First number (${numFirst}) more second number (${numSecond}).`
    );
  } else if (numFirst < numSecond) {
    console.log(
      `First number (${numFirst}) less  second number (${numSecond}).`
    );
  } else {
    console.log(`Numbers (${numFirst} и ${numSecond}) equal.`);
  }
}
