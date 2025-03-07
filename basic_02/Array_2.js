
// Example demonstrating Array.isArray, Array.from, and Array.of

// 1. Array.isArray() - Checks if a value is an array
console.log(Array.isArray([1, 2, 3])); // true
console.log(Array.isArray("Hello")); // false

// 2. Array.from() - Creates an array from an iterable (like a string or Set)
let str = "Hello";
let arrFromStr = Array.from(str);
console.log(arrFromStr); // ['H', 'e', 'l', 'l', 'o']

let set = new Set([1, 2, 3, 4]);
let arrFromSet = Array.from(set);
console.log(arrFromSet); // [1, 2, 3, 4]

// 3. Array.of() - Creates an array from given arguments
let arrOfNumbers = Array.of(1, 2, 3, 4);
console.log(arrOfNumbers); // [1, 2, 3, 4]

let arrOfSingle = Array.of(5);
console.log(arrOfSingle); // [5]
