console.log("Day 03 - JavaScript Basics");

// Operator - sysbols (+,-,*,/,% ) performing operations
//operands - x+y, x and y are operands
//expression - combination of operators and operands
//example: 5 + 3 is an expression, where + is the operator and
//5 and 3 are operands
//Evaluating Expressions x+y
//Assignment expression: x = 2

//Arithmetic Operators
let a = 10;
let b = 5;
console.log("Addition:", a + b); // 15
console.log("Subtraction:", a - b); // 5
console.log("Multiplication:", a * b); // 50
console.log("Division:", a / b); // 2
console.log("Modulus:", a % b); // 0
//Exponentiation Operator
console.log("Exponentiation:", a ** b); // 100000 (10^5)

//string concatenation
let f_name = "Nehal";
let l_name = "Asad";
console.log("Full Name:", f_name + " " + l_name); // Nehal Asad
//its a string concatenation, not addition and must stay way from it unless needed
 
//post increment
let count = 5;
console.log("Post Increment:", count++); // 5 (then count becomes 6)
console.log("After Post Increment:", count); // 6
//pre increment
console.log("Pre Increment:", ++count); // 7 (count is now 7)
console.log("After Pre Increment:", count); // 7

// Demonstrating Assignment Operators
console.log("**** Assignment Operators ****");

let x = 10; // Initial value

x += 5;     // Adds 5 to x → x = 15 
x -= 3;     // Subtracts 3 from x → x = 12
x *= 2;     // Multiplies x by 2 → x = 24
x /= 4;     // Divides x by 4 → x = 6

console.log("Final value of x:", x); // Output: 6

// Demonstrating Comparison Operators
console.log("**** Comparison Operators ****");
// loose equality
console.log(0 == false);        // true → loose equality allows type coercion
console.log(3 == '3');          // true → number and string are loosely equal
//strict equality 
console.log(3 === '3');         // false → strict equality checks both value and type
console.log(null === null);     // true → both are the same type and value
console.log(undefined === undefined); // true → both are the same type and value

// NaN = Not a Number (not directly shown here, but worth noting)
// NaN is a special value in JavaScript that represents an invalid number result

// Object declarations
let obj1 = { name: 'tapaScript' }; // Object 1
let obj2 = { name: 'tapaScript' }; // Object 2

// Note: obj1 === obj2 will be false because they reference different memory locations

// Demonstrating Logical Operators
console.log("**** Logical operators ****");

// Logical AND (&&) returns the first falsy value or the last value if all are truthy
console.log(false && false);     // false → both operands are falsy
console.log(true && false);      // false → second operand is falsy
console.log(true && true);       // true → both operands are truthy
console.log(false && true);      // false → first operand is falsy

// When both operands are non-boolean, JS returns the second if the first is truthy
console.log("Cow" && "Horse");   // "Horse" → "Cow" is truthy, so returns "Horse"

// Logical OR (||) returns the first truthy value or the last value if all are falsy
console.log(false || false);     // false → both operands are falsy
console.log(true || false);      // true → first operand is truthy
console.log(true || true);       // true → first operand is truthy
console.log(false || true);      // true → second operand is truthy

// When both operands are non-boolean, JS returns the first truthy one
console.log("Cow" || "Horse");   // "Cow" → "Cow" is truthy, so it's returned

// Nullish Coalescing Operator (??)
// Returns the right-hand value only if the left-hand value is null or undefined

let a1 = null ?? 1;              // null → returns 1
let a2 = undefined ?? 3;         // undefined → returns 3
const a3 = false ?? "tapaScript"; // false is NOT null/undefined → returns false
const a4 = 0 ?? "tapas";         // 0 is NOT null/undefined → returns 0

console.log(a1); // 1
console.log(a2); // 3
console.log(a3); // false
console.log(a4); // 0

// Conditional (ternary) operator
console.log("**** Conditional (ternary) operator ****");

// Syntax: condition ? value_if_true : value_if_false

let age = 23;
let status = age >= 60 ? "Senior Citizen" : "Non Senior Citizen";

console.log(status); // Output: Non Senior Citizen

console.log("**** Bitwise Operators in JavaScript ****");
// These operators work on the binary representation of numbers

// 1. AND (&)
console.log("1. Bitwise AND (&)");
let andResult = 5 & 3; // 0101 & 0011 = 0001 → 1
console.log(andResult); // Output: 1

// 2. OR (|)
console.log("2. Bitwise OR (|)");
let orResult = 5 | 3; // 0101 | 0011 = 0111 → 7
console.log(orResult); // Output: 7

// 3. XOR (^)
console.log("3. Bitwise XOR (^)");
let xorResult = 5 ^ 3; // 0101 ^ 0011 = 0110 → 6
console.log(xorResult); // Output: 6

// 4. NOT (~)
console.log("4. Bitwise NOT (~)");
let notResult = ~5; // ~0101 = 1010 (in 32-bit signed: -6)
console.log(notResult); // Output: -6

// 5. Left Shift (<<)
console.log("5. Left Shift (<<)");
let leftShift = 5 << 1; // 0101 << 1 = 1010 → 10
console.log(leftShift); // Output: 10

// 6. Right Shift (>>)
console.log("6. Right Shift (>>)");
let rightShift = 5 >> 1; // 0101 >> 1 = 0010 → 2
console.log(rightShift); // Output: 2

// 7. Zero-fill Right Shift (>>>)
console.log("7. Zero-fill Right Shift (>>>)");
let zeroFillShift = -5 >>> 1; // fills left bits with 0 → large positive number
console.log(zeroFillShift); // Output: 2147483645 

// **** typeof Operator ****
// Used to check the data type of a value

console.log("**** typeof ****");

console.log(typeof "tapas");     // "string"
console.log(typeof false);       // "boolean"

let size = 100;
console.log(typeof size);        // "number"

const numbers = [1, 2, 3, 4];
console.log(typeof numbers);     // "object" → arrays are technically objects in JS
