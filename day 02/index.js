// Note link: https://notebooklm.google.com/notebook/276abd72-0b49-4b19-a8fe-1f27932f48e8

//variables> Variable is a container for a value in JS
// syntax: let/const storageName = value;
/*- The name must have digits (0–9) or letters.
- The name can have $ and _.
- The first character must not be a digit.
- No reserved keywords.
*/
//variable names are case sensitive
// let $name = "John"; //valid 

/*- `var`: Function-scoped, can be redeclared (not recommended)
- `let`: Block-scoped, can be reassigned
- `const`: Block-scoped, **cannot** be reassigned
*/

/*
**Primitive Data Types:**
- `String` - Text values (`"Hello"`)
- `Number` - Numeric values (`25`, `3.14`)
- `Boolean` - True/False (`true`, `false`)
- `Undefined` - A variable declared but not assigned (`let x;`)
- `Null` - Represents "nothing" (`let y = null;`)
- `BigInt` - Large numbers (`BigInt(12345678901234567890)`)
- `Symbol` - Unique identifiers (`Symbol("id")`)

**Non-Primitive (Reference) Data Types:**
- `Object` - Collection of key-value pairs
- `Array` - Ordered list of values
- `Function` - Code that can be executed
*/
//tast 01: Declare Variables
let name = "Nehal";
let age = 22;
let isStudent = true;
let favoriteLanguage = "JavaScript";
//Task 2: Print Values to Console

console.log("Name:", name);
console.log("Age:", age);
console.log("Is Student:", isStudent);
console.log("Favorite Language:", favoriteLanguage);
// Task 3: Reassign let and const Variables
let city = "Dhaka";
city = "Chittagong"; // ✅ Works fine

const country = "Bangladesh";
//country = "India";  ❌ Error: Assignment to constant variable
//Task 4: Object and Array Mutation
const person = { name: "Nehal", age: 22 }; // Object with properties

const hobbies = ["coding", "reading"]; // Array with elements

const newPerson = person; // Reference to the same object
newPerson.age = 23;// Mutating the object

const newHobbies = hobbies;// Reference to the same array
newHobbies.push("gaming");//    Mutating the array

console.log(person);   // age is now 23
console.log(hobbies);  // includes "gaming"