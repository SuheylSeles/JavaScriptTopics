
function greet(){
    console.log("Hello there");
}

greet();

// function parameters

// program to print the text
// declaring a function
function greet(name) {
    console.log("Hello " + name + ":)");
}

let name;
// variable name can be different
//let name = prompt("Enter a name: ");
console.log("Enter a name: ", name);
// calling function
greet(name);

function add(a, b){
    console.log(a + b);
}

add(3,4);
add(4,2);
add(9,3);

console.log("*************************************");

// function expressions

let x = function(num){
    return num*num;
}
console.log(x(4));

let y = x(3);
console.log(y);

console.log("*************************************");

// Variable Scope
/**
// program to print a text 
let c = "hello";

function greet () {
    console.log(c);
}

greet(); // hello
*/

// Hoisting

console.log(test);
var test;

console.log("*************************************");

var test;
console.log(test);

console.log("*************************************");

a = 5;
console.log(a);
var a;

console.log("*************************************");

// program to display value
var a;
a = 5;
console.log(a); // 5

console.log("*************************************");

// program to display value
console.log(a);
var a = 5;

console.log("*************************************");

// program to print the text
greet();

function greet() {
    console.log('Hi, there.');
}

console.log("*************************************");

// Recursion

// program to count down numbers to 1
function countDown(number) {

    // display the number
    console.log(number);

    // decrease the number value
    const newNumber = number - 1;

    // base case
    if (newNumber > 0) {
        countDown(newNumber);
    }
}

countDown(4);

console.log("*************************************");

// program to find the factorial of a number
function factorial(x) {

    // if number is 0
    if (x === 0) {
        return 1;
    }

    // if number is positive
    else {
        return x * factorial(x - 1);
    }
}

const num = 3;

// calling factorial() if num is non-negative
if (num > 0) {
    let result = factorial(num);
    console.log(`The factorial of ${num} is ${result}`);
}

