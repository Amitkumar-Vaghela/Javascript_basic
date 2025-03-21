const user = {
    username: "Amit",
    email: "av90@gmail.com",

    login() {  // Shorter method syntax
        return `${this.username} has logged in`; // `this` refers to the current object
    }
};

console.log(user.login()); // Output: Amit has logged in
console.log(this); // In a browser: Window object, In Node.js: empty object {}



