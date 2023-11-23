function SuperMath() {
  this.performOperation = function (obj) {
    while (!this.isValidOperator(obj.znak)) {
      obj = this.input();
    }

    const result = this.calculate(obj);
    console.log(`Result: ${result}`);
  };

  this.isValidOperator = function (operator) {
    return ["+", "-", "*", "/", "%"].includes(operator);
  };

  this.input = function () {
    const newX = parseInt(prompt("Enter a new value for X:"));
    const newY = parseInt(prompt("Enter a new value for Y:"));
    const newOperator = prompt("Enter a valid operator (+, -, *, /, %):");

    return { X: newX, Y: newY, znak: newOperator };
  };

  this.calculate = function (obj) {
    switch (obj.znak) {
      case "+":
        return obj.X + obj.Y;
      case "-":
        return obj.X - obj.Y;
      case "*":
        return obj.X * obj.Y;
      case "/":
        return obj.X / obj.Y;
      case "%":
        return obj.X % obj.Y;
      default:
        return NaN;
    }
  };
}

const p = new SuperMath();

const obj1 = { X: 12, Y: 3, znak: "/" };
p.performOperation(obj1);

const obj2 = { X: 5, Y: 2, znak: "!" };
p.performOperation(obj2);

const obj3 = { X: 8, Y: 4, znak: "*" };
p.performOperation(obj3);
