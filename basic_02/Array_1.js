// Creating an array
let fruits = ["Apple", "Banana", "Cherry"];
console.log("Initial Array:", fruits);

// Accessing elements
console.log("First Element:", fruits[0]); // Apple
console.log("Second Element:", fruits[1]); // Banana

// Getting array length
console.log("Array Length:", fruits.length);

// Modifying an element
fruits[1] = "Orange"; 
console.log("After Modification:", fruits); // ["Apple", "Orange", "Cherry"]

// Adding elements using push()
fruits.push("Mango");
console.log("After Push:", fruits); // ["Apple", "Orange", "Cherry", "Mango"]

// Removing the last element using pop()
let removedElement = fruits.pop();
console.log("After Pop:", fruits); // ["Apple", "Orange", "Cherry"]
console.log("Removed Element:", removedElement); // "Mango"

// Adding elements at the beginning using unshift()
fruits.unshift("Grapes");
console.log("After Unshift:", fruits); // ["Grapes", "Apple", "Orange", "Cherry"]

// Removing the first element using shift()
let firstRemoved = fruits.shift();
console.log("After Shift:", fruits); // ["Apple", "Orange", "Cherry"]
console.log("Removed First Element:", firstRemoved); // "Grapes"

// Slicing an array (Extracting elements)
let slicedFruits = fruits.slice(1, 3);
console.log("Sliced Array:", slicedFruits); // ["Orange", "Cherry"]

// Splicing an array (Removing and inserting)
fruits.splice(1, 1, "Pineapple", "Peach");
console.log("After Splice:", fruits); // ["Apple", "Pineapple", "Peach", "Cherry"]

// Joining an array into a string
let fruitString = fruits.join(", ");
console.log("Joined String:", fruitString); // "Apple, Pineapple, Peach, Cherry"

// Reversing an array
fruits.reverse();
console.log("After Reverse:", fruits); // ["Cherry", "Peach", "Pineapple", "Apple"]

// Sorting an array
fruits.sort();
console.log("After Sort:", fruits); // ["Apple", "Cherry", "Peach", "Pineapple"]

// Using map() to transform array elements
let upperCaseFruits = fruits.map(fruit => fruit.toUpperCase());
console.log("Uppercase Fruits:", upperCaseFruits); // ["APPLE", "CHERRY", "PEACH", "PINEAPPLE"]

// Using filter() to get elements that start with 'P'
let pFruits = fruits.filter(fruit => fruit.startsWith("P"));
console.log("Fruits starting with P:", pFruits); // ["Peach", "Pineapple"]

// Using reduce() to concatenate all fruit names
let concatenatedFruits = fruits.reduce((acc, fruit) => acc + " " + fruit);
console.log("Concatenated Fruits:", concatenatedFruits); // "Apple Cherry Peach Pineapple"

