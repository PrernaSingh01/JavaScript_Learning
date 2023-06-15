//console.log("Hello world");//

/**👉 Values and Variables **/

//var myName = "Prerna Singh";
//console.log(myName);

/**👉 Naming Practiice **/

//var _myName = "Prerna";
//var 1myName = "Prerna";
//var _1my__Name = "Prerna";
//var $myName = "Prerna";

//console.log($myName);

/** 👉 DataTypes **/

//var myName = "Prerna";
//console.log(myName); // String

//var myAge = 21; //Number

//var iAMPrerna = true; //Boolean

/** Types of Operator **/
//console.log(typeof iAMPrerna);

//** DataTypes Practice **//

//console.log(10 + "20"); --(1024)
//console.log(10 + 20); --(30)
//console.log(9 - "5"); --(4) //1st JavaScript bug
//console.log("java" + "Script"); --(javaScript)
//console.log(" " + " "); --()
//console.log(" " + 0); --(0)
//console.log("Prerna" - "Singh"); --(Nan)
//console.log("10" - "10"); --(0)
//console.log(true + true); --(2)
//   -> 1 true
//   -> 0 false
//console.log(true + false); --(1)
//console.log(false + true); --(1)
//console.log(false - true); --(-1)

// ** 1st_Interview Question ** //
/**  Diff. between null vs undefined **/

//var iAmUseless = null;
//console.log(iAmUseless);
//console.log(typeof iAmUseless); --(object) 2nd JavaScript bug

//var iAmStandBy;
//console.log(iAmStandBy);
//console.log(typeof iAmStandBy); --(undefined)

//**  2nd_Interview Question **/
/** What is Nan? **/

// myPhoneNumber = 1234567890;
//var myName = "Prerna Singh";

//console.log(isNaN(myPhoneNumber));
//console.log(isNaN(myName));

//if (isNaN(myName)) {
//  console.log("plzz enter valid number");
//}

//** 👉Expressions and operators **//

//** Assignment Operator **//

//var x = 5;
//var y = 5;

//console.log(`Is both the x and y are equal : ${x == y}`);

//** Arithmetic Operator **//

//console.log(3 + 3);
//console.log(10 - 5);
//console.log(20 / 5);
//console.log(5 * 6);

//console.log("Remainder operator " + (27 % 4));

//**  Increment and Decrement Operator **//

/*var num = 15;
var newNum = num++;
console.log(num);
console.log(newNum);*/

/*var num = 15;
var newNum = --num;
console.log(num);
console.log(newNum);*/

//**  Comparison Operator **//

//var a = 30;
//var b = 10;

// Equal(==)
//console.log(a == b);

// Not Equal to
//console.log(a != b);

//Greater Than (>)
//console.log(a > b);

//Greater Than or equal (>=)
//console.log(a >= b);

// Less Than (<)
//console.log(a < b);

// Less than or equal (<=)
//console.log(a <= b);

//** Logical Operator **//

var a = 30;
var b = -20;

// Logical AND (&&)
/*console.log(a > b && b > 0);
console.log(a > b && b < a);*/

// Logical OR (||)
//console.log(a > b || b < 0);

// Logical NOT (!)
//console.log(!false);

//** String Concatenates (Operator)**//

//console.log("Hello World");
//console.log("Hello " + "World");

//** Challenge **//

//console.log(9 ** 2); // 9*9 //Exponentiation Operator
//console.log("Prerna" + 5);
//Swap number
/*var a = 5;
var b = 10;
var c = b; // c = 10
b = a; // b = 5
a = c;
console.log("The value of a is " + a);*/

//** Interview Question 4**//

//**Diff. between == vs === *//
//var a = 5;
//var b = "5";

/*console.log(typeof a);
console.log(typeof b);
console.log(a == b);*/

/*console.log(typeof a);
console.log(typeof b);
console.log(a === b);*/

//** 👉 Control Statement & Loops **//

//** If Else Statement **//

// if rain = raincoat
// else no raincoat

var tomr = "rain"; /*8/6/2023*/

/*if (tomr == "rain") {
  console.log("take a raincoat");
} else {
  console.log("No need to take a raincoat");
}*/

/*if (tomr == "Sunny") {
  console.log("take a raincoat");
} else {
  console.log("No need to take a raincoat");
}
*/

//** Challenge **//

//---- Leap year or not

/*var year = 2020;

if (year % 4 === 0) {
  if (year % 100 === 0) {
    if (year % 400 === 0) {
      console.log("the year " + year + "is a leap year");
    } else {
      console.log("the year " + year + " is not a leap year");
    }
  } else {
    console.log("The year " + year + " is a leap year");
  }
} else {
  console.log("The year " + year + " is not a leap year");
}*/

//** Truthy Fruthy **//

/*if ((Score = 0)) {
  console.log("OMG, We loss the game");
} else {
  console.log("Yay, We won the game");
}*/

//** Conditional (ternary) operator **//

/*var age = 18;

if (age >= 18) {
  console.log("Eligible");
} else {
  console.log("Not Eligible");
}*/

/*var age = 17;

console.log(age > 18 ? "Eligible" : "Not Eligible");*/

//** Switch statement **//

// 1st without break statement
//Find the Area Of Circle, traingle and rectangle?'

/*var area = "traingle";
var PI = 3.142,
  l = 5,
  b = 4,
  r = 3;

switch (area) {
  case "circle":
    console.log("The area of the circle is " + PI * r ** 2);
    break;
  case "rectangle":
    console.log("The area of the rectangle is " + PI * r ** 2);
    break;
  case "traingle":
    console.log("The area of the traingle is " + PI * r ** 2);
    break;
  default:
    console.log("please enter valid date ");
}*/

//** While loop statement **//

/*var num = 0;
//block scope
while (num <= 10) {
  console.log(num); //infinite loop
  num++;
}*/

//** Do While Loop **//
/*var num = 0;
do {
  console.log(num);
  num++;
} while (num <= 10);*/

//** For Loop **//

/*for (var num = 0; num <= 10; num++) {
  debugger;
  console.log(num);
}*/

//** Challenge **//

/*for (var num = 1; num <= 10; num++) {
  var tableof = 8;
  console.log(tableof + " * " + num + " = " + tableof * num);
}*/

/*for (var num = 1; num <= 10; num++) {
  var tableof = 2;
  console.log(tableof + " * " + num + " = " + tableof * num);
}*/

//** 👉 Functions in Javascript **//

/*var a = 5;
var b = 5;
var sum = a + b;
console.log(sum);*/

/*function sum() {
  var a = 5,
    b = 5;
  var total = a + b;
  console.log(total);
}*/

//** Calling Function **//

/*function sum() {
  var a = 5,
    b = 5;
  var total = a + b;
  console.log(total);
}

sum();*/

//** Function Paramenters VS Function Arguments **//

/*function sum(a, b) {
  //function parameter
  var total = a + b;
  console.log(total);
}
sum();
sum(10, 10); //function argument
sum(2, 2);*/

//** Function Expressions **//

/*function sum(a, b) {
  var total = a + b;
  console.log(total);
}

var funExp = sum(5, 5);*/

//** Return Keyword **//

/*function sum(a, b) {
  return (total = a + b);
}

var funExp = sum(5, 10);
console.log(funExp);*/

//** Anonymous Function **//

/*var funExp = function (a, b) {
  return (total = a + b);
};

var sum = funExp(5, 5);
console.log(sum);*/

/*****************************************************************************************************************************************/

///////******👉 ES6 ******////////

//** ⚡ LET VS CONST VS VAR **//

/*var myName = "Prerna";
console.log(myName);

myName = "Prerna Singh";
console.log(myName);*/

/*let myName = "Prerna";
console.log(myName);

myName = "Prerna Singh";
console.log(myName);*/

/*const myName = "Prerna";
console.log(myName);

myName = "Prerna Singh";
console.log(myName);*/

//** ⚡ Template Literals (Template Strings) **//

/*for (let num = 1; num <= 10; num++) {
  let tableof = 8;
  console.log(`${tableof} * ${num} = ${tableof * num}`);
}*/

//** ⚡ Default Arguments **//

/*function mult(a, b = 5) {
  //default parameter
  return a * b;
}

console.log(mult(5));*/

//** ⚡ FAT ARROR FUNCTION **//

/*console.log(sum());

function sum() {
  let a = 5;
  b = 5;
  let sum = a + b;
  return `the sum of two number is ${sum}`;
}*/

/*const sum = () => {
  let a = 5;
  b = 5;
  let sum = a + b;
  return `the sum of two number is ${sum}`;
};

console.log(sum());*/

/*const sum = () => {
  return `the sum of two number is ${(a = 5) + (b = 5)}`;
};

console.log(sum());*/

//----👉 ARRAYS -----//

//var myFreinds = ["Prerna", "Khushi", "Sunny", "Nimmi"];

//** ⚡ Traversal array **//

/*var myFreinds = ["Prerna", "Khushi", "Nimmi", "Sunny"];
console.log(myFreinds[1]);*/

// for loop
/*var myFreinds = ["Prerna", "Khushi", "Nimmi", "Sunny"];

for (var i = 0; i < myFreinds.length; i++) {
  console.log(myFreinds[i]);
}
*/

//for in loop & for of loop

//var myFreinds = ["Prerna", "Khushi", "Nimmi", "Sunny"];

/*for (let elements in myFreinds) {
  console.log(elements);
}*/

/*for (let elements of myFreinds) {
  console.log(elements);
}*/

//forEach loop

//var myFreinds = ["Prerna", "Khushi", "Nimmi", "Sunny"];

/*myFreinds.forEach(function (element, index, array) {
  console.log(element + " " + index + " " + array);
});*/

/*myFreinds.forEach((element, index, array) => {
  console.log(element + " " + index + " " + array);
});*/

//** ⚡ Searching and Filter in an Array **//

//** ⚡ Perform CRUD  **//

//Array.Prototype.push()

/*const animals = ["pig", "dog", "cat", "parrot"];

animals.push("cow", "sparrow");
console.log(animals);*/

///🌟 Challenge ///--- Splice

// 1: Add Dec at the end of an arrray?

/*const months = ["Jan", "march", "April", "June", "July"];

months.push("Dec");
console.log(months);*/

//const months = ["Jan", "march", "April", "June", "July"];

//const newMonth = months.splice(5, 0, "Dec");
//console.log(months);

//console.log(newMonth);

/*const updateMonth = months.splice(1, 1, "March");*/
/*const updateMonth = months.splice(1, 2);
console.log(months);
console.log(updateMonth);*/

///----filter()

/*const array1 = [1, 4, 6, 9, 25, 100];

//num>9

let newArr = array1.filter((currentElement, index, arr) => {
  return currentElement > 9;
});
//console.log(array1);
console.log(newArr);
*/

///---map()

/*const array1 = [1, 4, 6, 9, 25, 100];
//num>9

let newArr = array1.map((currentElement, index, arr) => {
  return currentElement > 9;
});
console.log(array1)
console.log(newArr);*/

///🌟 challenge /// sqaure_root

/*let arr = [25, 36, 49, 64, 81];

let arrSqr = arr.map((currentElement) => {
  return Math.sqrt(currentElement);
});

console.log(arrSqr);*/

///🌟

/*let arr = [25, 36, 49, 64, 81];

let arr2 = arr
  .map((currentElement) => currentElement * 2)
  .filter((currentElement) => currentElement > 10);
console.log(arr2);*/

///----reduce()

/*let arr = [2, 2, 2];

let sum = arr.reduce((accumulator, currentElement, index, array) => {
  debugger;
  return (accumulator += currentElement);
}, 4);

console.log(sum);*/

//** Strings **//

//String.prototype.length👈

/*let myName = "Prerna Singh";
console.log(myName.length);*/

//Escape Characters👈

/*let anySentence = 'My name is "Prerna" Singh';
console.log(anySentence);*/

//Finding a string in a string👈

/*const myBioData = "I am Prerna Singh";
console.log(myBioData.indexOf("am"));*/

//Searching 👈

/*const myBioData = "I am Prerna Singh";
let sData = myBioData.search("Prerna");
console.log(sData);*/

//Extracting String Parts👈

/*There are 3 methods for extracting a part of a string:

slice(start, end)
substring(start, end)
substr(start, length)*/

//slice(start, end)👈

/*var str = "Apple, Mango, Banana";

//let res = str.slice(0, 4);
let res = str.slice(7);
console.log(res);*/

//Challenge⚡

/*let myTweets =
  "JavaScript is the world's most popular programming language.JavaScript is the programming language of the Web.JavaScript is easy to learn.slice() extracts a part of a string and returns the extracted part in a new string.The method takes 2 parameters: start position, and end position (end not included).substring() is similar to slice().The difference is that start and end values less than 0 are treated as 0 in substring().";*/

/*let len = myTweets.length;
console.log(len);*/ //-- 426

/*let myActualTweets = myTweets.slice(0, 280);
console.log(myActualTweets);
console.log(myActualTweets.length);*/

//substring(start, end)
/*var str = "Apple, Mango, Banana";
//let response = str.substring(0, 4);
let response = str.substring(7, -2);
//let response = str.slice(7, -2);
console.log(response);*/

//substr(start, length)👈
/*var str = "Apple, Mango, Banana";
//let res = str.substr(0, 4);
//let res = str.substr(7);
let res = str.substr(-4);
console.log(res);*/

//Replacing String Content 👈

/*let myBioData = "I am Prerna Singh";
let replaceData = myBioData.replace("Prerna", "Khushi");
console.log(replaceData);*/

//Extracting String Character👈

/*let str = "HELLO WORLD";
//console.log(str.charAt(0));
console.log(str.charCodeAt(0));*/

//Challenge⚡

//Return the unicode of the last character

/*let str = "Hello World";
let lastchar = str.length - 1;
console.log(str.charCodeAt(lastchar));
//console.log(str.charCodeAt(10));*/

// [ ]

/*var str = "HELLO WORLD";
console.log(str[6]);*/

//Other useful method👈

/*let myName = "PRerna SINgh";
console.log(myName.toUpperCase());
console.log(myName.toLowerCase());*/

// Concat() method

/*let fName = "Prerna";
let lName = "Singh";

//console.log(fName.concat(lName));
console.log(fName.concat(" ", lName));*/

// Converting a String to an Array
/*var text = "a,b,c,d,e,f";

console.log(text.split(","));
console.log(text.split(" "));
console.log(text.split(" | "));*/

//Date & Time object 👈

//new Date()

/*let currentDate = new Date();
console.log(currentDate);*/

//console.log(new Date());
//console.log(new Date().toLocaleString());
//console.log(new Date().toString());

//Date.now()

//console.log(Date.now());

//new Date( Jan, Feb,...)🌟

//console.log(2 + "2");

//new Date(datestring)
/*var d = new Date("August 26, 2001 11:13:00");
console.log(d.toLocaleString());*/

/*var d = new Date(0);
console.log(d.toLocaleString());*/

//Date Method 👈

//const currentDate = new Date();

//indivisual date
//console.log(currentDate.toLocaleString());
//console.log(currentDate.getFullYear());
//console.log(currentDate.getDate());
//console.log(currentDate.getDay());
//console.log(currentDate.getMonth());
//console.log(currentDate.getMinutes());

//Challenge ⚡
//new Date().toLocaleDateString(); ⚡ 8/6/2023 ⚡
/*var d = new Date();
console.log(d.toLocaleDateString());*/

//new Date().toLocaleTimeString(); ⚡ 8:34:49 am ⚡
/*var t = new Date();
console.log(t.toLocaleTimeString());*/

//new Date().toLocaleString(); ⚡ 8/6/2023, 8:36:41 am ⚡
/*var d = new Date();
console.log(d.toLocaleString());*/

//Math Object 👈

//console.log(Math.PI);

//Math.round?()
/*let num = 10.2555;
console.log(Math.round(num));*/

//Math.pow()
//console.log(Math.pow(2, 3));

//Math.sqrt()
/*console.log(Math.sqrt(25));
console.log(Math.sqrt(4));
console.log(Math.sqrt(16));*/

//Math.abs()
/*console.log(Math.abs(-55));
console.log(Math.abs(-555));
console.log(Math.abs(-44.123456));
console.log(Math.abs(2 - 4));*/

//Math.ceil()

/*console.log(Math.ceil(4.4));
console.log(Math.round(55.61));*/

//Math Floor()

//console.log(Math.floor(4.7));
//console.log(Math.floor(99.1));

//Math.min()

//console.log(Math.min(0, 150, 200, 1000, -0, -4, -255));

//Math.max()

//console.log(Math.max(0, 4, 255, 1000, 50, -200, -7000));

//Math.random

//console.log(Math.floor(Math.random() * 10)); 0 to 9

//Math.trunc()

//console.log(Math.trunc(4.6));
//console.log(Math.abs(Math.trunc(-99.1)));

//  DOM in js👈

//Events in js 👈

//OOPS concept👈

/*let bioData = "Prerna Singh";
console.log(bioData);*/

/*let bioData = {
  myName: "Prerna Singh",
  myAge: "22",
  getData: function () {
    console.log(`My name is ${bioData.myName} and my age is ${bioData.myAge}`);
  },
};

bioData.getData();*/
