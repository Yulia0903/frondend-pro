const smallSize = {
  price: 50,
  calories: 20,
};

const bigSize = {
  price: 100,
  calories: 40,
};

const cheese = {
  price: 10,
  calories: 20,
};

const salad = {
  price: 20,
  calories: 5,
};

const potato = {
  price: 15,
  calories: 10,
};

const spiceTopping = {
  price: 15,
  calories: 0,
};

const mayoTopping = {
  price: 20,
  calories: 5,
};

class Hamburger {
  constructor(size, stuffing) {
    this.size = size;
    this.stuffing = stuffing;
    this.toppings = [];
  }

  addTopping(topping) {
    this.toppings.push(topping);
  }

  calculate() {
    let totalCalories = this.size.calories + this.stuffing.calories;
    this.toppings.forEach((topping) => {
      totalCalories += topping.calories;
    });

    return totalCalories;
  }

  calculatePrice() {
    let totalPrice = this.size.price + this.stuffing.price;
    this.toppings.forEach((topping) => {
      totalPrice += topping.price;
    });

    return totalPrice;
  }
}

const hamburger = new Hamburger(smallSize, cheese);

hamburger.addTopping(mayoTopping);

console.log("Calories: " + hamburger.calculate());

console.log("Price: " + hamburger.calculatePrice());

hamburger.addTopping(spiceTopping);

console.log("Price with spice: " + hamburger.calculatePrice());
