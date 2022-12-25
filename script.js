// 1.Function Declearation
// example 1
function calculateAge(birthYear) {
  const age = 2022 - birthYear;
  return age;
}
const age1 = calculateAge(1992);
console.log(age1); // expected output: 30

// example 2 with short code with {DRY} dry means don't repet yourself!!
function calAge(birthYear1) {
  return 2022 - birthYear1;
}
const age2 = calAge(1995);
console.log(age2); // expected output: 27

// example 3 Door width hight
function calcRectArea(totalHight) {
  const hight = 7 * totalHight;
  return hight;
}
const hight1 = calcRectArea(6);
console.log(`door width and hight total area ${hight1} ft`); // expected output: 42 ft

function calcRectArea1(totalHight1) {
  return 7 * totalHight1;
}
const hight2 = calcRectArea1(5);
console.log(`door width and hight total area ${hight2} ft`); // expected output: 35 ft

// example  4 total  kg
function calKg(apple, orange, grapes) {
  const fruit = apple * 2 + orange * 3 + grapes * 2;
  return fruit;
}

const fruits = calKg(1, 1, 1);
console.log(`total ${fruits} kg fruits`);
//  short code
function calKg1(apple1, orange1, grapes1) {
  return apple1 * 5 + orange1 * 5 + grapes1 * 5;
}
const fullFruit = calKg1(1, 1, 1);
console.log(`total ${fullFruit} kg fruits`);

// example 5
function temp(celsius) {
  const temp2 = (5 / 6) * celsius;
  return temp2;
}
const toTemp = temp(30);
console.log(`total temperature is ${toTemp} Celsius`);

// 2. Function Expression
// example 1
const calculateAgeNew = function (birthYear5) {
  return 2022 - birthYear5;
};
const age6 = calculateAgeNew(1992);
console.log(age6);

// example 2
const fruitBox = function (apple5, orange5, grapes5) {
  return apple5 * 22 + orange5 * 23 + grapes5 * 22;
};
const fruit12 = fruitBox(1, 1, 1);
console.log(`total ${fruit12} kg fruits`);

// example 3

const door = function (totalHight11) {
  return 7 * totalHight11;
};
const doorHightNew = door(5);
console.log(`door width and hight total area ${doorHightNew} ft`);

// example 4

const jobLeft = function (birthYear9) {
  const age3 = 2022 - birthYear9;
  const ageLeft = 60 - age3;
  return ageLeft;
};
const ageJob = jobLeft(1988);
console.log(`job left ${ageJob}`);

// example 5
const temp22 = function (celsius) {
  return (5 / 6) * celsius;
};
const temp2 = temp22(30);
console.log(`total temperature is ${temp2} Celsius`);

// Different between Function declaration vs Function Expression!!
// example Function Declaration
// in function decleration we can call the function before { its call hosting}
const ageAnik1 = calculateAgeAnik(1993);

function calculateAgeAnik(birthYear) {
  const ageAnik = 2022 - birthYear;
  return ageAnik;
}

console.log(`anik age is ${ageAnik1} `); // expected output: 29

// in function expression first you have to write you function then we can call
// example Function expression
// it will give ERROR !!
// const ageBala1 = ageBala(1996);

// const ageBala = function (birthYear6) {
//   return 2022 - birthYear6;
// };
// console.log(`Bala age is ${ageBala1} `);
// function expression correct way
const ageBala2 = function (birthYear7) {
  return 2022 - birthYear7;
};
const ageBala7 = ageBala2(1996);
console.log(`Bala age is ${ageBala7} `);

// Arrow Function
// example 1
const calculateAgeOfc = (birthYear10) => {
  return 2022 - birthYear10;
};
const age4 = calculateAgeOfc(1992);
console.log(age4); // expected output: 30

// example 2
// const jobLeft1 = (birthYear2) => {
//   const age5 = 2022 - birthYear2;
//   const agejob = 62 - age5;// we can write this code in one line  showen below example
//   return agejob;// we can write this code in one line  showen below example
// };
// const ageLeft = jobLeft1(1976);
// console.log(`job left ${ageLeft}`);
// example 2 with short code with {DRY} dry means don't repet yourself!!
const jobLeft1 = (birthYear2) => {
  const age5 = 2022 - birthYear2;
  return 62 - age5;
};
const ageLeft = jobLeft1(1976);
console.log(`job left ${ageLeft}`);

// example 3
const fruitBox1 = (apple, orange5, grapes5) => {
  return apple * 23 + orange5 * 12 + grapes5 * 11;
};
const fruitbox = fruitBox1(1, 1, 1);
console.log(`total ${fruitbox} kg fruits`);

// example 4

// example 5
const temp5 = (celsius) => {
  return (5 / 6) * celsius;
};
const temp3 = temp5(30);
console.log(`total temperature is ${temp3} Celsius`);

// ARRAY
const student = ["Anik", "Rakib", "sakib"];
console.log(student);
// if you want to show indivisual name
//Array indexes start with 0:
console.log(student[0]);

// another way of writing ARRAY
const players = new Array("tamim", "sakib", "musfiq", "miraz");
console.log(players[0]);
console.log(players[(1, 2)]);

const newFruit = new Array(
  "mango",
  "jackfruit",
  "watermelon",
  "Banana",
  "Lemon"
);

console.log(newFruit);
// replace name in array
newFruit[0] = "leache";
console.log(newFruit);
// with .length we can get how many data is in the array
console.log(newFruit.length);
// Get Array Last Item
const arr2 = ["Emil", "Tobias", "Linus"];
console.log(arr2[arr2.length - 1]);

const arr3 = new Array("Emil", "Tobias", "Linus", "Peter");
console.log(arr3[arr3.length - 1]);
// in array we can store different type of data
const user = ["Anik", "Ahmed", 1993, 2022 - 1993, "web-Developer"];
console.log(user);
console.log(user[0]);

// Array Method

const user1 = ["Anik", "Ahmed", 1993, 2022 - 1993, "web-Developer"];

// push method
// to add last item
user1.push("javaScript");
console.log(user1);

// unshift
// to add in first position
user1.unshift("First Name");
console.log(user1);

// pop
// to delete last item
user1.pop();
console.log(user1);

// shift
// delete First item
user1.shift();
console.log(user1);

const user2 = ["Amit", "Ahamed", 2002, 2022 - 2001, "graphic-Designer"];
// shift
const removeItem = user2.shift();

console.log(removeItem);

//unshift
//add first item
user2.unshift("ISHAN");
console.log(user2);

// to delete last item
const removeItems = user2.pop();
console.log(removeItems);
