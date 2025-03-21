const user = {
    username: "Amit",
    email: "av90@gmail.com",

    login() {  // Shorter method syntax
        return `${this.username} has logged in`; // `this` refers to the current object
    }
};

console.log(user.login()); // Output: Amit has logged in
console.log(this); // In a browser: Window object, In Node.js: empty object {}



// Use Arrow function in For loop 
const numbers = [10, 20, 30, 40, 50];
let sum = 0;
numbers.forEach(num => sum += num);
console.log("Sum:", sum); // Output: Sum: 150



