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


//output
/*
Initial Array: [ 'Apple', 'Banana', 'Cherry' ]
First Element: Apple
Second Element: Banana
Array Length: 3
After Modification: [ 'Apple', 'Orange', 'Cherry' ]
After Push: [ 'Apple', 'Orange', 'Cherry', 'Mango' ]
After Pop: [ 'Apple', 'Orange', 'Cherry' ]
Removed Element: Mango
After Unshift: [ 'Grapes', 'Apple', 'Orange', 'Cherry' ]
After Shift: [ 'Apple', 'Orange', 'Cherry' ]
Removed First Element: Grapes
Sliced Array: [ 'Orange', 'Cherry' ]
After Splice: [ 'Apple', 'Pineapple', 'Peach', 'Cherry' ]
Joined String: Apple, Pineapple, Peach, Cherry
After Reverse: [ 'Cherry', 'Peach', 'Pineapple', 'Apple' ]
After Sort: [ 'Apple', 'Cherry', 'Peach', 'Pineapple' ]
Uppercase Fruits: [ 'APPLE', 'CHERRY', 'PEACH', 'PINEAPPLE' ]
Fruits starting with P: [ 'Peach', 'Pineapple' ]
Concatenated Fruits: Apple Cherry Peach Pineapple

*/


// Creating an array
let fruits = ["Apple", "Banana", "Cherry", "Mango", "Pineapple"];
console.log("Initial Array:", fruits);

// ==================== Using slice() ====================
// slice(start, end) - Extracts elements from start to end (excluding end)
let slicedFruits = fruits.slice(1, 4);
console.log("Sliced Array (index 1 to 3):", slicedFruits); // ["Banana", "Cherry", "Mango"]

// slice() without parameters returns a copy of the array
let copiedArray = fruits.slice();
console.log("Copied Array:", copiedArray); // ["Apple", "Banana", "Cherry", "Mango", "Pineapple"]

// ==================== Using splice() ====================
// splice(start, deleteCount, item1, item2, ...) - Removes and/or adds elements

// Removing 2 elements from index 1
let removedFruits = fruits.splice(1, 2);
console.log("After Splice (Removing 2 elements from index 1):", fruits); // ["Apple", "Mango", "Pineapple"]
console.log("Removed Elements:", removedFruits); // ["Banana", "Cherry"]

// Adding elements using splice
fruits.splice(1, 0, "Peach", "Orange"); // Inserts at index 1 without deleting anything
console.log("After Splice (Adding Peach & Orange at index 1):", fruits); // ["Apple", "Peach", "Orange", "Mango", "Pineapple"]

// Replacing elements using splice
fruits.splice(2, 1, "Grapes"); // Replaces "Orange" with "Grapes"
console.log("After Splice (Replacing Orange with Grapes):", fruits); // ["Apple", "Peach", "Grapes", "Mango", "Pineapple"]


/*
output

Initial Array: [ 'Apple', 'Banana', 'Cherry', 'Mango', 'Pineapple' ]
Sliced Array (index 1 to 3): [ 'Banana', 'Cherry', 'Mango' ]
Copied Array: [ 'Apple', 'Banana', 'Cherry', 'Mango', 'Pineapple' ]
After Splice (Removing 2 elements from index 1): [ 'Apple', 'Mango', 'Pineapple' ]
Removed Elements: [ 'Banana', 'Cherry' ]
After Splice (Adding Peach & Orange at index 1): [ 'Apple', 'Peach', 'Orange', 'Mango', 'Pineapple' ]
After Splice (Replacing Orange with Grapes): [ 'Apple', 'Peach', 'Grapes', 'Mango', 'Pineapple' ]



*/
