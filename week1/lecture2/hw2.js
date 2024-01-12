// Part 1
// 1) Aq Otay restaurant
const name = "Aq-Otay";
const city = "Almaty";
const address = "street Ozernaya 2";
let age = 20;
const isOpen = false;
let isClose = true;
const count = null;
let cnt = null;
cnt = 23;
let person;

const restaurant = {
  name: "Aq-otay",
  city: "Astana",
  "phone number": +77474747372,
  age: 199,
  isOpen: true,
  human: null,
};
restaurant.country = "Kazakhstan";
delete restaurant.age;
restaurant.city = "Almaty";
console.log(restaurant);

// 2) Erkebulan`s store

const nameStore = "Kalkadam";
let country = "Kazakhstan";
let address_store = "Almaty";
let phone = 77734731;
const isOpen_store = false;
let salary = null;
let hello;

// 3) Car Toyota Camry V55
const car_name = "Toyota";
const model = "Camry";

let Car = {
  company: "Toyota",
  model: "Camry V55",
  year: 2017,
  color: "black",
  maxSpeed: 300,
  numOfDoors: 4,
  numOfSeats: 5,
  "is Automatic transmission": true,
  new: true,
};
delete Car["model"];
Car["iswhite"] = false;
Car["year"] = 2018;
console.log(Car);

// Part 2

let vehicle = {};

vehicle.brandName = "BMW";
vehicle.model = "X5";
vehicle["model"] = "M1";
delete vehicle["model"];
// console.log(vehicle)

// Part 3

let salaries = {
  Alzhan: 120,
  Daulet: 140,
  Number: 200,
  Emil: 100,
  Erkebulan: 150,
  Anuar: 400,
};

let sum = 0;
for (let i in salaries) {
  sum += salaries[i];
}
console.log(sum);
