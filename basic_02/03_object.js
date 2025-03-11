// Creating a Symbol
let mySym = Symbol("mySym");

// Object literals
const myUser = {
    name: "Amit",
    age: 22,
    location: "India",
    Email: "av90@gmail.com",
    isLoggin: false,
    [mySym]: Symbol("Stored Symbol")  // Correct: Storing a Symbol as a value
};

// Freezing the object to prevent modifications
Object.freeze(myUser);

// Attempting modifications (These will NOT work due to freeze)
myUser.age = 30; //  Won't change
myUser.city = "Delhi"; //  Won't add
delete myUser.Email; //  Won't delete

// Logging results
console.log("User Object After Freeze:", myUser);
console.log("Symbol Property Value:", myUser[mySym]); 
console.log("Symbol Property Value type:", typeof myUser[mySym]); 

// Checking if the object is frozen
console.log("Is myUser frozen?", Object.isFrozen(myUser)); // Should return true
