
const s = 42;
const i = "İstanbul";

//JavaScript Data Types

/**
String	   represents textual data	                            'hello', "hello world!" etc
Number	   an integer or a floating-point number	            3, 3.234, 3e-2 etc.
BigInt	   an integer with arbitrary precision	                900719925124740999n , 1n etc.
Boolean	   Any of two values: true or false	                    true and false
undefined  a data type whose variable is not initialized	    let a;
null	   denotes a null value	                                let a = null;
Symbol	   data type whose instances are unique and immutable	let value = Symbol('hello');
Object	   key-value pairs of collection of data	            let student = { };
*/

// burada; Object dışındakiler ilkel veri türleridir. Object ilkel değildir..

const name = 'Süheyl';
const surname = "SELEŞ";
const result = `The names are ${name} ${surname}`;

console.log(name);
console.log(surname);
console.log(result);

console.log("***************************************************************");

const number1 = 42;
const number2 = 42.34;
const number3 = 4e2

console.log(number1);
console.log(number2);
console.log(number3);

console.log("***************************************************************");

const number11 = 3/0;
console.log(number11); // Infinity

const number12 = -3/0;
console.log(number12); // -Infinity

// strings can't be divided by numbers
const number13 = "abc"/3; 
console.log(number13);  // NaN

console.log("***************************************************************");

/**

// BigInt value
const value1 = 900719925124740998n;

// Adding two big integers
const result1 = value1 + 1n;
console.log(result1); // "900719925124740999n"

const value2 = 900719925124740998n;

// Error! BitInt and number cannot be added
const result2 = value2 + 1; 
console.log(result2); 

*/

const dataChecked = true;
const valueCounted = false;

console.log(dataChecked, valueCounted);

console.log("***************************************************************");

let name34;
console.log(name34);

let name42;
console.log(name42);

console.log("***************************************************************");

const number134 = null;
console.log(number134);

console.log("***************************************************************");

const value1 = Symbol('Hello');
const value2 = Symbol('Hello');

console.log(value1, value2);

console.log("***************************************************************");

const employee = {
    firstName: 'Süheyl',
    lastName: "SELEŞ",
    age: 28
}

console.log(employee);

console.log("***************************************************************");

let data;

data = 42;

data = "KONYASPOR";

console.log(data);

console.log("***************************************************************");

const name99 = 'BEŞİKTAŞ';
typeof(name99);

const number99 = 99;
typeof(number99);

const valueChecked99 = true;
typeof(valueChecked99);

const abc = null;
typeof(abc);

console.log(name99);
console.log(number99);
console.log(abc);

