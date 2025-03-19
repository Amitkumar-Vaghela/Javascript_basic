// Creating an object using the Object constructor (No literal object)
const myUser = new Object();
myUser.name = "Amit";
myUser.age = 22;
console.log(myUser);

// Creating an object using object literal syntax
const LiteralObject = {
    email: "av90@gmail.com",
    Fullname: {
        USername: {
            firstname: "Amit",
            lastname: "Vaghela"
        }
    }
};
console.log(LiteralObject.hasOwnProperty("email")); // true
console.log(LiteralObject.hasOwnProperty("Phone")); // flase

// 1️⃣ Object.create() - Creates a new object with an existing prototype
const person = {
    greet: function () {
        return `Hello, my name is ${this.name}`;
    }
};

const user = Object.create(person);
user.name = "Amit";
console.log(user.greet()); // Output: Hello, my name is Amit

// 2️⃣ Object.prototype.hasOwnProperty() - Checks if a property exists directly on an object
console.log(user.hasOwnProperty("name")); // true
console.log(user.hasOwnProperty("greet")); // false (inherited from prototype)

// 3️⃣ Object.prototype.toString() - Returns a string representation of an object
console.log(user.toString()); // Output: [object Object]

// 4️⃣ Object.prototype.valueOf() - Returns the primitive value of an object
const num = new Number(100);
console.log(num.valueOf()); // Output: 100

// 5️⃣ Constructor function with prototype methods
function User(name, age) {
    this.name = name;
    this.age = age;
}

// 6️⃣ Adding methods using prototype
User.prototype.getDetails = function () {
    return `${this.name} is ${this.age} years old.`;
};

const user1 = new User("Amit", 22);
console.log(user1.getDetails()); // Output: Amit is 22 years old.

// 7️⃣ Object.prototype.isPrototypeOf() - Checks if an object is a prototype of another
console.log(person.isPrototypeOf(user)); // Output: true

// 8️⃣ Extending built-in prototypes (Array.prototype)
Array.prototype.customLength = function () {
    return `Array has ${this.length} elements.`;
};

const numbers = [1, 2, 3, 4];
console.log(numbers.customLength()); // Output: Array has 4 elements.

// 9️⃣ Object.keys() - Returns an array of an object's own property names
console.log(Object.keys(user1)); // Output: ["name", "age"]

// 🔟 Object.assign() - Copies properties from one object to another
const target = { a: 1 };
const source = { b: 2, c: 3 };
Object.assign(target, source);
console.log(target); // Output: { a: 1, b: 2, c: 3 }

