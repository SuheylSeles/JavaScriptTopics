const words = ['Hello', 'World', 'Welcome'];
console.log(words);

// 1. Using an array literal

const array1 = ["eat", "sleep"];

// 2. Using the new keyword

const array2 = new Array("eat", "gym", "sleep");

// empty array

const myList = [];

// array of numbers

const numberArray = [2, 4, 6, 8, 10];

// array of strings

const stringArray = ['eat', 'work', 'sleep'];

// array with mixed data types

const newData = ['work', 'exercise', 13, true];

// hepsini bir yapıda tanımlayabiliriz.

const newData2 = [
    {'task1': 'exercise'},
    [31, 42, 99],
    function hello(){
        console.log('hello')
    }
];

console.log(newData2);

// Access Elements of an Array

const myArray = ['h', 'e', 'l', 'l', 'o'];

// first element
console.log(myArray[0]);  // "h"

// second element
console.log(myArray[1]); // "e"

// Add an Element to an Array

let dailyActivities = ['eat', 'sleep'];

// add an element at the end
dailyActivities.push('exercise');

console.log(dailyActivities); //  ['eat', 'sleep', 'exercise']

let dailyActivities2 = ['eat', 'sleep'];

//add an element at the start
dailyActivities2.unshift('work'); 

console.log(dailyActivities2); // ['work', 'eat', 'sleep']

// Change the Elements of an Array

let dailyActivities3 = [ 'eat', 'sleep'];

// this will add the new element 'exercise' at the 2 index
dailyActivities3[2] = 'exercise';

console.log(dailyActivities3); // ['eat', 'sleep', 'exercise']

let dailyActivities4 = [ 'eat', 'sleep'];

// this will add the new element 'exercise' at the 3 index
dailyActivities4[3] = 'exercise';

console.log(dailyActivities4); // ["eat", "sleep", undefined, "exercise"]

//Remove an Element from an Array

let dailyActivities5 = ['work', 'eat', 'sleep', 'exercise'];

// remove the last element
dailyActivities5.pop();
console.log(dailyActivities5); // ['work', 'eat', 'sleep']

// remove the last element from ['work', 'eat', 'sleep']
const removedElement = dailyActivities5.pop();

//get removed element
console.log(removedElement); // 'sleep'
console.log(dailyActivities5);  // ['work', 'eat']

let dailyActivities6 = ['work', 'eat', 'sleep'];

// remove the first element
dailyActivities6.shift();

console.log(dailyActivities6); // ['eat', 'sleep']

// Array Length

const dailyActivities7 = ['eat', 'sleep'];

console.log(dailyActivities7.length); 

/**
 *                    concat()	               joins two or more arrays and returns a result
                      indexOf()	               searches an element of an array and returns its position
                      find()	               returns the first value of an array element that passes a test
                      findIndex()	           returns the first index of an array element that passes a test
                      forEach()	               calls a function for each element
                      includes()	           checks if an array contains a specified element
                      push()	               adds a new element to the end of an array and returns the new length of an array
                      unshift()	               adds a new element to the beginning of an array and returns the new length of an array
                      pop()	                   removes the last element of an array and returns the removed element
                      shift()	               removes the first element of an array and returns the removed element
                      sort()	               sorts the elements alphabetically in strings and in ascending order
                      slice()	               selects the part of an array and returns the new array
                      splice()	               removes or replaces existing elements and/or adds new elements
 */

let dailyActivities8 = ['sleep', 'work', 'exercise']
let newRoutine = ['eat'];

// sorting elements in the alphabetical order
dailyActivities8.sort();
console.log(dailyActivities8); // ['exercise', 'sleep', 'work']

//finding the index position of string
const position = dailyActivities8.indexOf('work');
console.log(position); // 2

// slicing the array elements
const newDailyActivities = dailyActivities8.slice(1);
console.log(newDailyActivities); // [ 'sleep', 'work']

// concatenating two arrays
const routine = dailyActivities8.concat(newRoutine);
console.log(routine); // ["exercise", "sleep", "work", "eat"]

// Working of JavaScript Arrays

let arr = ['h', 'e'];
let arr1 = arr;
arr1.push('l');

console.log(arr); // ["h", "e", "l"]
console.log(arr1); // ["h", "e", "l"]

let arr2 = ['h', 'e'];
arr2.name = 'John';

console.log(arr2); // ["h", "e"]
console.log(arr2.name); // "John"
console.log(arr2['name']); // "John"

