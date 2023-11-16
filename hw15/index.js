function Human(name, gender) {
  this.name = name;
  this.gender = gender;
}

function Apartment() {
  this.residents = [];

  this.addResident = function (resident) {
    this.residents.push(resident);
  };
}

function House(maxApartments) {
  this.apartments = [];
  this.maxApartments = maxApartments;

  this.addApartment = function (apartment) {
    if (this.apartments.length < this.maxApartments) {
      this.apartments.push(apartment);
    } else {
      console.log("Cannot add more apartments. Maximum limit reached.");
    }
  };
}

const person1 = new Human("John", "Male");
const person2 = new Human("Jane", "Female");

const apartment1 = new Apartment();
apartment1.addResident(person1);

const apartment2 = new Apartment();
apartment2.addResident(person2);

const house = new House(2);
house.addApartment(apartment1);
house.addApartment(apartment2);

console.log(house);
