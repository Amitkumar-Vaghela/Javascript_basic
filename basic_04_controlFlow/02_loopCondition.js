console.log("Using for loop:");
// for loop (prints numbers 1 to 5)
for (let i = 1; i <= 5; i++) {
    console.log(i);
}

console.log("\nUsing while loop:");
// while loop (prints numbers 6 to 10)
let j = 6;
while (j <= 10) {
    console.log(j);
    j++;
}

console.log("\nUsing do-while loop:");
// do-while loop (prints numbers 11 to 15)
let k = 11;
do {
    console.log(k);
    k++;
} while (k <= 15);

console.log("\nUsing forEach loop:");
// forEach loop (iterating over an array)
let numbers = [16, 17, 18, 19, 20];
numbers.forEach(num => console.log(num));

console.log("\nUsing for...in loop (Object Iteration):");
// for...in loop (iterating over an object)
let person = { name: "John", age: 30, city: "New York" };
for (let key in person) {
    console.log(`${key}: ${person[key]}`);
}

console.log("\nUsing for...of loop (Array Iteration):");
// for...of loop (iterating over an array)
let fruits = ["Apple", "Banana", "Cherry"];
for (let fruit of fruits) {
    console.log(fruit);
}
