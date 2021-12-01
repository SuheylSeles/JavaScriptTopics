// JS Let

let name = 'Süheyl';
{
    let name = "SELEŞ";
    console.log(name);
}
console.log(name);

console.log("**********************");

/**
let x = function(x, y){
    return x * y;
}

// yukarıdaki yerine, aşağıdaki gibi kullanılabilir.

let x = (x, y) => x*y;
*/

class Person {
    constructor(name){
        this.name = name;
    }
}

const person1 = new Person('Süheyl');

console.log(person1.name);

console.log("**********************");

function sum(x, y = 5){
    console.log(x + y);
}

sum(5);
sum(5, 15);

console.log("**********************");

const first_name = 'Jack';
const last_name = "Chick";

console.log('Hello ' + first_name + ' ' + last_name);

console.log(`Hello ${first_name} ${last_name}`);

console.log("**********************");

// before you would do something like this
const person2 = {
    name2: 'Sara',
    age2: 25,
    gender2: 'female'    
}

/**
let name2 = person2.name2;
let age2 = person2.age2;
let gender2 = person2.gender2;
*/

let { name2, age2, gender2 } = person2;

console.log(name2); // Sara
console.log(age2); // 25
console.log(gender2); // female

console.log("**********************");

/**
// JS Promises

// returns a promise
let countValue = new Promise(function (resolve, reject) {
    reject('Promise rejected'); 
 });
 
 // executes when promise is resolved successfully
 countValue.then(
     function successValue(result) {
         console.log(result); // Promise resolved
     },
  )
*/

function show(a, b, ...args) {
    console.log(a); // one
    console.log(b); // two
    console.log(args); // ["three", "four", "five", "six"]
  }
  
  show('one', 'two', 'three', 'four', 'five', 'six')

console.log("*********************************************");

  let arr1 = ['one', 'two'];
  let arr2 = [...arr1, 'three', 'four', 'five'];
  console.log(arr2); // ["one", "two", "three", "four", "five"]

console.log("*********************************************");

// JS Arrow Function

/**
 * let x = function(x, y){
 * return x*y;
 * }
 * 
 * let x = (x, y) => x * y;
 */

// Example 1: Arrow Function with No Argument
let greet = () => console.log('Hello');
greet();

console.log("**********************");

// Example 2: Arrow Function with One Argument
let greet2 = x => console.log(x);
greet2('Hello'); // Hello 

console.log("**********************");

// Example 3: Arrow Function as an Expression
let age3 = 28;

let welcome = (age3 > 18) ?
  () => console.log('Yetişkin'):
  () => console.log('Çocuk');

welcome();

console.log("**********************");

// Example 4: Multiline Arrow Functions
let sum2 = (a, b) => {
    let result = a + b;
    return result;
}

let result1 = sum2(34,42);
console.log(result1); // 12

console.log("**********************");

function Person3() {
    this.name4 = 'Jack',
    this.age4 = 25,
    this.sayName = function () {

        // this is accessible
        console.log(this.age4);

        function innerFunc() {

            // this refers to the global object
            console.log(this.age4);
            console.log(this);
        }

        innerFunc();

    }
}

let x = new Person3();
x.sayName();

console.log("**********************");

function Person4() {
    this.name5 = 'Jack',
    this.age5 = 25,
    this.sayName2 = function () {

        console.log(this.age5);
        let innerFunc2 = () => {
            console.log(this.age5);
        }

        innerFunc2();
    }
}

const x2 = new Person4();
x2.sayName2();

console.log("**********************");

// Arguments Binding
/**
let x3 = function () {
    console.log(arguments);
}
*****************************
let x3 = () => {
    console.log(arguments);
}
*/

let x3 = (...n) => {
    console.log(n);
}

x3(34,42,99);

console.log("**********************");

// Arrow Function with Promises and Callbacks
/**
// ES5
asyncFunction().then(function() {
    return asyncFunction1();
}).then(function() {
    return asyncFunction2();
}).then(function() {
    finish;
});

// ES6
asyncFunction()
.then(() => asyncFunction1())
.then(() => asyncFunction2())
.then(() => finish);
*/

// Things You Should Avoid With Arrow Functions

// 1-You should not use arrow functions to create methods inside objects.
let person3 = {
    name6: 'Jack',
    age6: 25,
    sayName3: () => {

        // this refers to the global .....
        //
        console.log(this.age6);
    }
}

person3.sayName3(); // undefined

console.log("**********************");

// 2-You cannot use an arrow function as a constructor. For example,
/**
let Foo = () => {};
let foo = new Foo(); // TypeError: Foo is not a constructor
*/

// JavaScript Default Parameters kaldığım yer !!!!!!! 

function sum(x = 3, y = 5) {

    // return sum
    return x + y;
}

console.log(sum(5, 15));    // 20 
console.log(sum(7));        // 12
console.log(sum());         // 8

console.log("**********************");

const name7 = 'Jack';
console.log(`Hello ${name7}`); 

// template literals used with expressions

const result = `The sum of  4 + 5 is ${4 + 5}`;
console.log(result); 

console.log(`${result < 10 ? 'Too low': 'Very high'}`)

console.log("**********************");

const name8 = 'Jack';
const greet3 = true;

function tagExample(strings, nameValue) {
    let str0 = strings[0]; // Hello
    let str1 = strings[1]; // , How are you?

    if(greet) {
        return `${str0}${nameValue}${str1}`;
    }
}

// creating tagged literal
// passing argument name
const result2 = tagExample`Hello ${name8}, How are you?`;

console.log(result2);

console.log("**********************");

const arrValue = ['My', 'name', 'is', 'Jack'];

console.log(arrValue);   // ["My", "name", "is", "Jack"]
console.log(...arrValue); // My name is Jack

console.log("**********************");

const arr3 = ['one', 'two'];
const arr4 = [...arr3, 'three', 'four', 'five'];

console.log(arr4); 
//  Output:
//  ["one", "two", "three", "four", "five"]

console.log("**********************");

let arr5 = [ 1, 2, 3];
let arr6 = arr1;

console.log(arr5); // [1, 2, 3]
console.log(arr6); // [1, 2, 3]

// append an item to the array
arr5.push(4);

console.log(arr5); // [1, 2, 3, 4]
console.log(arr6); // [1, 2, 3, 4]

console.log("**********************");

let arr7 = [ 1, 2, 3];

// copy using spread syntax
let arr8 = [...arr7];

console.log(arr7); // [1, 2, 3]
console.log(arr8); // [1, 2, 3]

// append an item to the array
arr7.push(4);

console.log(arr7); // [1, 2, 3, 4]
console.log(arr8); // [1, 2, 3]

console.log("**********************");

// create a Map
const map1 = new Map(); // an empty map
console.log(map1); // Map {}

console.log("**********************");

// create a set
let map2 = new Map();

// insert key-value pair
map2.set('info', {name: 'Jack', age: 26});
console.log(map2); // Map {"info" => {name: "Jack", age: 26}}

// Map with object key
let map3 = new Map();

let obj = {};
map3.set(obj, {name: 'Jack', age: "26"});

console.log(map3); // Map {{} => {name: "Jack", age: "26"}}

console.log("**********************");

let map4 = new Map();
map4.set('info', {name: 'Jack', age: "26"});

// access the elements of a Map
console.log(map4.get('info')); // {name: "Jack", age: "26"}

console.log("**********************");

const set1 = new Set([1, 2, 3]);

let map5 = new Map();
map5.set('info', {name: 'Jack', age: "26"});

// check if an element is in Set
console.log(map5.has('info')); // true

console.log("**********************");

let map6 = new Map();
map6.set('info', {name: 'Jack', age: "26"});

// removing a particular element
map6.delete('address'); // false
console.log(map6); // Map {"info" => {name: "Jack", age: "26"}} 

map6.delete('info'); // true
console.log(map6); // Map {}

console.log("**********************");

let map7 = new Map();
map7.set('info', {name: 'Jack', age: "26"});

// removing all element
map7.clear();
console.log(map7); // Map {}

console.log("**********************");

let map8 = new Map();
map8.set('info', {name9: 'Süheyl', age7: "28"});

console.log(map8.size);

console.log("**********************");

let map9 = new Map();
map9.set('name', 'Süheyl');
map9.set('age', '28');

// looping through Map
for (let [key, value] of map9) {
    console.log(key + ' - ' + value);
}

console.log("**********************");

const weakMap = new WeakMap();
console.log(weakMap); // WeakMap {} 

let obj2 = {};

// adding object (element) to WeakMap
weakMap.set(obj2, 'hello');

console.log(weakMap); // WeakMap {{} => "hello"}

console.log("**********************");

// create Set
const set2 = new Set(); // an empty set
console.log(set2); // Set {}

// Set with multiple types of value
const set3 = new Set([1, 'hello', {count : true}]);
console.log(set3); // Set {1, "hello", {count: true}}

console.log("**********************");

const set4 = new Set([1, 2, 3]);

// access the elements of a Set
console.log(set4.values()); // Set Iterator [1, 2, 3]

console.log("**********************");

const set5 = new Set([1, 2, 3]);

// check if an element is in Set
console.log(set5.has(1));

console.log("**********************");

const weakSet = new WeakSet();
console.log(weakSet); // WeakSet {}

let obj3 = {
    message: 'Hi',
    sendMessage: true
}

// adding object (element) to WeakSet
weakSet.add(obj3);

console.log(weakSet); // WeakSet {{message: "Hi", sendMessage: true}}

console.log("**********************");

let student1 = {
    age: 24,
    name: "Felix"
}

const handler = {
    get: function(obj, prop) {
        return obj[prop] ? obj[prop] : 'property does not exist';
    }
}

const proxy = new Proxy(student1, handler);
console.log(proxy.name); // Felix
console.log(proxy.age); // 24
console.log(proxy.class); // property does not exist

// Proxies ile ilgili başka örneklerde var. Gerektiğinde; bakarım. https://www.programiz.com/javascript/proxies
