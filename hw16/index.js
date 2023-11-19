function Person(name, age) {
  this.name = name;
  this.age = age;

  this.displayInfo = function () {
    console.log(`Name: ${this.name}, Age: ${this.age}`);
  };
}

function Car(brand, model, year, licensePlate, owner) {
  this.brand = brand;
  this.model = model;
  this.year = year;
  this.licensePlate = licensePlate;
  this.owner = null;

  this.assignOwner = function (owner) {
    if (owner.age >= 18) {
      this.owner = owner;
    } else {
      console.log("Cannot assign owner. Age must be 18 or older.");
    }
  };

  this.displayInfo = function () {
    console.log(
      `Car Info: ${this.year} ${this.brand} ${this.model}, License Plate: ${this.licensePlate}`
    );

    if (this.owner) {
      console.log("Owner Info:");
      this.owner.displayInfo();
    } else {
      console.log("No owner assigned.");
    }
  };
}

const person1 = new Person("John", 25);
const person2 = new Person("Jane", 17);

const car1 = new Car("Toyota", "Camry", 2020, "AB123CD");
car1.assignOwner(person1);

const car2 = new Car("Honda", "Civic", 2018, "XY789ZA");
car2.assignOwner(person2);

car1.displayInfo();
console.log("--------------------");
car2.displayInfo();
