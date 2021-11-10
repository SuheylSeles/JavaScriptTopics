
const ss = 13;

console.log(ss); // 13

console.log("*****************************************************************");

/**
 *       =	         Assignment operator	                 a = 7; // 7
         +=	         Addition assignment	                 a += 5; // a = a + 5
         -=	         Subtraction Assignment	                 a -= 2; // a = a - 2
         *=	         Multiplication Assignment	             a *= 3; // a = a * 3
         /=	         Division Assignment	                 a /= 2; // a = a / 2
         %=	         Remainder Assignment	                 a %= 2; // a = a % 2
         **=	     Exponentiation Assignment	             a **= 2; // a = a**2
 */

// JAVASCRIPT ARITHMETIC OPERATORS

let x = 5;
let y = 3;

// addition
console.log('x + y = ', x + y);  // 8

// subtraction
console.log('x - y = ', x - y);  // 2

// multiplication
console.log('x * y = ', x * y);  // 15

// division
console.log('x / y = ', x / y);  // 1.6666666666666667

// remainder
console.log('x % y = ', x % y);   // 2

// increment
console.log('++x = ', ++x); // x is now 6
console.log('x++ = ', x++); // prints 6 and then increased to 7
console.log('x = ', x);     // 7

// decrement
console.log('--x = ', --x); // x is now 6
console.log('x-- = ', x--); // prints 6 and then decreased to 5
console.log('x = ', x);     // 5

//exponentiation
console.log('x ** y =', x ** y);

console.log("*****************************************************************");


// JAVASCRIPT COMPARISON OPERATORS

// equal operator
console.log(2 == 2); // true
console.log(2 == '2'); // true

// not equal operator
console.log(3 != 2); // true
console.log('hello' != 'Hello'); // true

// strict equal operator
console.log(2 === 2); // true
console.log(2 === '2'); // false

// strict not equal operator
console.log(2 !== '2'); // true
console.log(2 !== 2); // false

console.log(42 >= 34); //true
console.log(42 <=34); //false

console.log(13 > 26); //false
console.log(13 < 26); //true

console.log("*****************************************************************");

// JAVASCRIPT LOGICAL OPERATORS

// logical AND
console.log(true && true); // true
console.log(true && false); // false

// logical OR
console.log(true || false); // true

// logical NOT
console.log(!true); // false

console.log("*****************************************************************");

// JAVASCRIPT BITWISE OPERATORS

/**
 *           &	             Bitwise AND
             |	             Bitwise OR
             ^               Bitwise XOR
             ~               Bitwise NOT
             <<              Left shift
             >>              Sign-propagating right shift
             >>>             Zero-fill right shift
 */

// concatenation operator
console.log('Hello' + ' ' + 'World!');

let a = 'JavaScript';

a += ' tutorial.';  // a = a + ' tutorial.';
console.log(a);

/**
 *          ,	         evaluates multiple operands and returns the value of the last operand.	    let a = (1, 3 , 4); // 4
            ?:           returns value based on the condition	                                 (5 > 3) ? 'success' : 'error'; // "success"
            delete	     deletes an object's property, or an element of an array	                delete x
            typeof	     returns a string indicating the data type	                                typeof 3; // "number"
            void	     discards the expression's return value	                                    void(x)
            in	         returns true if the specified property is in the object	                prop in object
            instanceof	 returns true if the specified object is of of the specified object type	object instanceof object_type
 */
