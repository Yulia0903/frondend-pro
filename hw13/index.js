function createSumFunction() {
  let total = 0;

  return function addValue(value) {
    total += value;
    return total;
  };
}

const sum = createSumFunction();

console.log(sum(3));
console.log(sum(5));
console.log(sum(20));
