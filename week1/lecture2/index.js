"use strict";
console.log("hello");

// let a = 1;
// console.log(a)

let customer = "Erkebulan";
console.log(customer);

const shopName = `Koishybai ${customer}`;
console.log(shopName);

var city = "Astana";

const a = 5;
const b = 2;
const c = a + b;

console.log(`a+b=${c}`);
// важно не забывать точка запятой ;

// alert('Hello');

//Data types

// Numbers, NaN, infinity
let age = 25;
const YEAR = 2022;
console.log(25 / 0); //Infinity

//String
const name = "nfactorial";
// const city = 'Almaty';

//Boolean
let isTeacher = true;
isTeacher = false;

//null
let country = null;
console.log(country);

// undefined

let earth;
console.log(earth);

// Object {key: value}

const user = {
  name: "Alzhan",
  isTeacher: false,
  age: 18,
  friends: {
    first: "Daulet",
    second: "Nurbek",
  },
};

const user1 = {
  name: "Daulet",
  isTeacher: true,
  age: 18,
  "phone number": +7777777,
};

console.log(user.friends, user1["phone number"]);
console.log(user);

// Adding to Object
user.city = "Almaty";
console.log(user);

// Delete from Object

delete user.age;
console.log(user);

// Iterate Object
console.log(' ');

for (let key in user){
    console.log(' ')
    console.log(key, '=', user[key]);
}

// Arrays

const students = ["Daulet", 'Alzhan','Nurbek', 'Erkebulan'];
const numbers = [1,2,3,4,5,6,7,8,9,0];
console.log(numbers);
console.log(students);
let f = ['uzbek',true,123];
console.log(f);

// typeof

console.log(typeof f)
console.log(typeof user)
console.log(typeof customer)