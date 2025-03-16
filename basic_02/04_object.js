let obj1 = { name: "Alice", age: 25 };
let obj2 = Object.assign({}, obj1);

obj2.age = 30;
console.log(obj1.age); // 25 (obj1 remains unchanged)

//or

let obj1 = { name: "Alice", age: 25 };
let obj2 = { name: "Amit", age: 15 };

let obj3 = { ...obj1 , ...obj2};
console.log(obj3); //  name : Alice , Age

let obj = { name: "Alice", age: 25, city: "New York" };

Object.keys(obj).forEach(key => {
    console.log("Key:", key);
    console.log("Value:", obj[key]);
});
