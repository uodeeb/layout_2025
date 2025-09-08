// alert("Hello World!");
// console.log("Hello World!");
// console.log(8 + 9);

// // variables
// var num01 = 10;
// var num02 = 50;
// var sum = num01 + num02;
// console.log(sum);
// console.log(45 + sum);

// data types
// Primitive
// Number
// var x = 8;
// console.log(x);
// console.log(typeof x);
// console.log(x.toFixed(2));
// // String
// // Boolean

// var studentName = "Mohamed";
// var studentAge = 20;
// var studentGrade = 90;
// var studentIsPassed = true;

// console.log("student name is: " + studentName);
// console.log("student age is: " + studentAge);
// console.log("student grade is: " + studentGrade);
// console.log("student is passed: " + studentIsPassed);

// // student object
// var student = {
//     name: "Mohamed",
//     age: 20,
//     grade: 90,
//     isPassed: true,
//     greet: function() {
//         console.log("Hello, my name is " + this.name + " and I am " + this.age + " years old");
//     }
// }

// student.greet();

// // strings
// var text = "Hello World!";
// var text01 = 'Hello World!';
// var text02 = `Hello World!`;

// console.log(text);
// console.log(typeof text);
// console.log(text.length);
// console.log(text.toUpperCase());
// console.log(text.toLowerCase());
// console.log(text.charAt(0));
// console.log(text.indexOf("W"));
// console.log(text.slice(0, 5));
// console.log(text.replace("World", "JavaScript"));
// console.log(text.concat(" ", "is", " ", "fun"));
// console.log(text.split(" "));
// console.log(text[8])
// text[0] = "J";
// console.log(text);
// // string concatenation
// console.log(text + " " + text01 + " " + text02);
// // template literals
// console.log(`string one:${text}, string two:       ${text01}, string three: ${text02}`)
// // string concatenation with numbers
// var res = text + 112457;
// console.log(res);
// console.log(typeof res);

// // loose typing
// console.log( 1 == "1");
// console.log( 1 === "1");

// // undefined
// var z;
// console.log(z);
// console.log(typeof z);

// // null
// var n = null;
// console.log(n);
// console.log(typeof n);

// console.log( z == n);
// console.log( z === n);

// console.log(z + 1);
// console.log(n + 15);

// // expressions
// var xx = 10;
// var yy = 20;
// var zz = x + y;
// console.log(z);






/*--------------------

ddds/dlk/sld
s
'd;'
s;d;
'
sld'
sdl;
var ali
var Ali
-----------------------*/

// functions
// var x = 5;
// var z = 8;

// function sum(x, z) {
//     var res = x + z;
//     return res;
//     console.log(res);
// }

 
// console.log(sum(45, 85), sum(87, 885), sum(11, 857));

// // variable scope
// var globalVar = 100;
// console.log(globalVar);

// function getGlobal(){
//     console.log(globalVar);
//     var localVar = 1000;
//     console.log(localVar);
// }

// getGlobal();
// //console.log(localVar);

// console.log(window)
// console.log(this)

// // hoisting phenomena




// console.log(newVar);
// var newVar = 1000;
// console.log(newVar);

// // Array
// var numbers = [1, 2, 3, 4, 5, 6, "one", true, {name: "Ali", age: 54}, [5, 9, 8], null];
// console.log(numbers);
// console.log(numbers[0]);
// console.log(numbers.length);

// var colors = ["red", "green", "blue"];
// console.log(colors);
// colors[1] = "yellow";
// console.log(colors);
// console.log(colors.push("orange"));
// console.log(colors);
// console.log(colors.pop());
// console.log(colors);
// console.log(colors.shift());
// console.log(colors);
// console.log(colors.unshift("purple"));
// console.log(colors);
// console.log(colors.indexOf("blue"));
// console.log(colors.slice(0, 2));
// console.log(colors);
// console.log(colors.reverse());
// console.log(colors);

// conditional statements
// var personAge = 17;
// if (personAge >= 18) {
//     //execute this code
//             console.log("Person is an adult");
// } else if (personAge >= 13) {
//     console.log("Person is a teenager");
// } else if (personAge >= 3) {
//     console.log("Person is a child");
// } else {
//     console.log("Person is a baby");
// }

// // switch case
// var day = 0;
// switch (day) {
//     case 1:
//         console.log("Monday");
//         break;
//     case 2:
//         console.log("Tuesday");
//         break;
//     case 3:
//         console.log("Wednesday");
//         break;
//     case 4:
//         console.log("Thursday");
//         break;
//     case 5:
//         console.log("Friday");
//         break;
//     case 6:
//         console.log("Saturday");
//         break;
//     case 7:
//         console.log("Sunday");
//         break;
//     default:
//         console.log("Invalid day");
//         break;
// }

// // ternary operator
// var age = 20;
// var isAdult = (age >= 18) ? "Yes, person is an adult" : "No, person is not an adult";
// console.log(isAdult);

// // loops
// for (var i = 0; i < 5; i++) {
//     console.log("Iteration number: " + i);
//     if (i === 2) {
//         console.log("Found number 2!");
//     }
// }

// // nested for loop
// for (var i = 0; i <= 3; i++) {
//     for (var j = 0; j <= 3; j++) {
//         console.log("First round: i: " + i + ", Second round: j: " + j);
//     }
// }

// // while loop
// var count = 0;
// while (count < 5) {
//     console.log("Iteration number: " + count);
//     count++;
// }

// console.log(1 != "1");
// console.log(1 !== "1");

// logical operators
//ATM system

// var isCardInserted = true;
// var pincode = 1234;
// // if(isCardInserted === true){
// //     if(pincode === 1234){
// //         console.log("Welcome to your account");
// //     }
// // }

// // and operator &&
// if(isCardInserted === true && pincode === 1234){
//     console.log("Welcome to your account");
// }   else{
//     console.log("Please insert your card and enter the correct pincode");
// }
// // or operator ||
// var hasCash = false;
// var hasCredit = true;
// if(hasCash || hasCredit){
//     console.log("You can make a purchase");
// }   else{
//     console.log("Please insert a valid payment method");
// }

// // not operator !
// var isAccountLocked = false;
// if(!isAccountLocked){
//     console.log("000000000000000000");
// }   else{
//     console.log("Your account is locked");
// }

// // truthy and falsy values
// // falsy values: 0, "", null, undefined, NaN, false
// // truthy values: all other values  
// var testVar = 1;
// if(testVar){
//     console.log("This is a truthy value");
// }   else{
//     console.log("This is a falsy value");
// }

// working with arrays
var students = ["Ali", "Ahmed", "Aisha", "Sara", "Omar", "Lina", "Yousef", "Talal"];
// console.log(students);
// console.log(students.length);
// for(var i = 0; i < students.length; i++){
//     console.log(i);
//     console.log(students[i]);
// }

// // for of loop
// for(var student of students){
//     console.log(student);
//     // console.log(students.indexOf(student));
// }

// // for in loop
// for(var index in students){
//     console.log(index);
//     console.log(students[index]);
// }

// working with objects
// var car = {
//     brand: "Toyota",
//     model: "Camry",
//     year: 2020,
//     color: "Black",
//     isAutomatic: true,
//     passengers: 5,
//     start: function() {
//         console.log(`The car ${this.brand} ${this.model} is starting...`);
//         console.log(this);
//     }
// }

// console.log(car);
// console.log(car.brand);
// console.log(car.model);
// console.log(car.year);
// console.log(car.color);
// console.log(car.isAutomatic);
// console.log(car.passengers);
// car.year = 2021;
// console.log(car.year);
// car["color"] = "White";
// console.log(car);
// car.start();
// console.log(car);

// // object creation
// var person = new Object();
// console.log(person);
// person.name = "Ali";
// person.age = 30;

// // constructor function
// function Person(personName, personAge, personGender) {
//     this.personName = personName;
//     this.personAge = personAge;
//     this.personGender = personGender;
//     this.personInfo = function() {
//         console.log(`Person name: ${this.personName}, Person age: ${this.personAge}, Person gender: ${this.personGender}`);
//     }
// }

// var person1 = new Person("Ahmed", 25, "Male");
// console.log(person1);
// var person2 = new Person("Aisha", 22, "Female");
// console.log(person2);
// var person3 = new Person("Sara", 28, "Female");
// console.log(person3);
// person1.personInfo();
// person2.personInfo();
// person3.personInfo();
// person3.newFunction = function() {
//     console.log("This is a new function added to person3");
// }
// person3.newFunction();

// // object looping
// for(var key in person3){
//     console.log(key);
//     console.log(person3[key]);
// }

// array of objects
var employees = [
  { 
    name: "Ali", 
    age: 30, 
    position: "Manager" 
},
  { 
    name: "Ahmed", 
    age: 25, 
    position: "Developer" 
  },
  { 
    name: "Aisha", 
    age: 22, 
    position: "Designer" 
  },
  { 
    name: "Sara", 
    age: 28, 
    position: "QA" 
  }
];

// var vs let vs const
var test = "Hello";
console.log(test);
var test = "Hello World";
console.log(test);
let test01 = "Hello000000";
console.log(test01);
test01 = "Hello World00000";
console.log(test01);

const test02 = "Hello1111111";
console.log(test02);
//test02 = "Hello World111111"; // error
const pi = 3.14;
console.log(pi);
// pi = 3.14159; // error

// arrow functions
// regular function
function multiply(x, y) {
    return x * y;
}
console.log(multiply(5, 10));
// arrow function
const multiplyArrow = (x, y) => x * y;
console.log(multiplyArrow(5, 10));
// arrow function with no parameters
const greet = () => console.log("Hello from arrow function");
greet();

// IIFE - Immediately Invoked Function Expression
(function() {
    console.log("Hello from IIFE");
})();

(() => console.log("Hello from IIFE"))();

// prompt
let userName = prompt("Please enter your name:");
console.log("Welcome: " + userName);

// ATM system simulation

/*---------------------- Project Plan ----------------------    
1. Project Description
   - Create a simple ATM system simulation using JavaScript.
   - The system will allow users to perform basic banking operations such as checking balance, depositing money, and withdrawing money.

2. Inputs
   - User PIN code
   - Real password
   - balance amount
   - Withdrawal amount
   - Deposit amount
3. Outputs
   - Display messages for successful or failed operations.
   - Updated balance after each transaction.
4. Processes(steps/functions)
   - User authentication
   - Check balance
   - Deposit money
   - Withdraw money

*/
// ATM system simulation
// variables
