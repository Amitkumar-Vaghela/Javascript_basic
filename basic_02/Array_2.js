
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


// concate and Spread for merging array and spredinf arr

// Using Spread Operator (...)

// 1. Copying an array
let arr1 = [1, 2, 3];
let copyArr = [...arr1]; 
console.log("Copied Array:", copyArr); // [1, 2, 3]

// 2. Merging two arrays
let arr2 = [4, 5, 6];
let mergedArr = [...arr1, ...arr2];
console.log("Merged using spread:", mergedArr); // [1, 2, 3, 4, 5, 6]

// 3. Adding elements in between
let arr3 = [7, 8, 9];
let newArr = [0, ...arr1, 10, ...arr2, ...arr3, 11];
console.log("Array with spread and additional elements:", newArr);
// Output: [0, 1, 2, 3, 10, 4, 5, 6, 7, 8, 9, 11]


// Using concat()

// 4. Concatenating two arrays
let concatArr = arr1.concat(arr2);
console.log("Concatenated Array:", concatArr); // [1, 2, 3, 4, 5, 6]

// 5. Concatenating multiple arrays
let concatMultiple = arr1.concat(arr2, arr3);
console.log("Concatenated Multiple Arrays:", concatMultiple);
// Output: [1, 2, 3, 4, 5, 6, 7, 8, 9]

// 6. Adding values while concatenating
let concatWithValues = arr1.concat(99, 100, [101, 102]);
console.log("Concatenated with values:", concatWithValues);
// Output: [1, 2, 3, 99, 100, 101, 102]
