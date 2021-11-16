// check if the number is positive

const number = 13;

// check if number is greater than 0
if (number > 0) {
 // the body of the if statement
  console.log("The number is positive");
}

console.log("The if statement is easy");

console.log("**********************************");

// check if the number is positive or negative/zero

const number2 = -5;

// check if number is greater than 0
if (number2 > 0) {
  console.log("The number is positive");
}
// if number is not greater than 0
else {
  console.log("The number is either a negative number or 0");
}

console.log("The if...else statement is easy");

console.log("**********************************");

// check if the number if positive, negative or zero
const number3 = 0;

// check if number is greater than 0
if (number3 > 0) {
    console.log("The number is positive");
}
// check if number is 0
else if (number3 == 0) {
  console.log("The number is 0");
}
// if number is neither greater than 0, nor zero
else {
    console.log("The number is negative");
}

console.log("The if...else if...else statement is easy");

console.log("**********************************");

const s = 13;

for(let i=1; i<s; i++){
    console.log("I love Python..");
}

console.log("**********************************");

// program to display the sum of natural numbers
let sum = 0;
const n = 100

// looping from i = 1 to n
// in each iteration, i is increased by 1
for (let i = 1; i <= n; i++) {
    sum += i;  // sum = sum + i
}

console.log('sum:', sum);

console.log("**********************************");

// program to display the sum of n natural numbers
let sum2 = 0;
const n2 = 100;

// looping from i = n to 1
// in each iteration, i is decreased by 1
for(let i = n2; i >= 1; i-- ) {
    // adding i to sum in each iteration
    sum2 += i; // sum = sum + i
}

console.log('sum2:',sum2);

console.log("**********************************");

// program to display numbers from 1 to 5
// initialize the variable
let i = 1, n3 = 5;

// while loop from i = 1 to 5
while (i <= n3) {
    console.log(i);
    i += 1;
}

console.log("**********************************");

// program to print the value of i
for (let i = 1; i <= 5; i++) {
    // break condition     
    if (i == 3) {
        break;
    }
    console.log(i);
}

console.log("**********************************");

// nested for loops

// first loop
for (let i = 1; i <= 3; i++) {

    // second loop
    for (let j = 1; j <= 3; j++) {
        if (i == 2) {
          break;
        }
        console.log(`i = ${i}, j = ${j}`);
    }
}

console.log("**********************************");

// program to print the value of i
for (let i = 1; i <= 5; i++) {

    // condition to continue    
    if (i == 3) {
        continue;
    }

    console.log(i);
}

console.log("**********************************");

// program using switch statement
let a = 2;

switch (a) {

    case 1:
        a = 'one';
        break;
    case 2:
        a = 'two';
        break;
    default:
        a = 'not found';
        break;
}
console.log(`The value is ${a}`);

console.log("**********************************");

// multiple case switch program
let fruit = 'apple';
switch(fruit) {
    case 'apple':
    case 'mango':
    case 'pineapple':
        console.log(`${fruit} is a fruit.`);
        break;
    default:
        console.log(`${fruit} is not a fruit.`);
        break;
}

