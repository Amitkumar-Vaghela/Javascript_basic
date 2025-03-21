// global and local scope in JS
let globalVar = "I am global"; // Accessible everywhere

function showGlobal() {
    console.log(globalVar); // Can access globalVar
}

showGlobal();
console.log(globalVar); // Accessible here too



// local scope
function exampleFunction() {
    let localVar = "I am local"; // Function scoped
    console.log(localVar);
}

exampleFunction();
// console.log(localVar);  // ❌ ERROR: localVar is not defined outside the function



//Block scope
if (true) {
    let blockVar = "I exist only in this block";
    console.log(blockVar); // ✅ Accessible inside the block
}

// console.log(blockVar); // ❌ ERROR: blockVar is not defined outside the block


//Lexical Scope (Nested Functions)
function outerFunction() {
    let outerVar = "I am outer";

    function innerFunction() {
        console.log(outerVar); // ✅ Accessible (lexical scope)
    }

    innerFunction();
}

outerFunction();



// closure (Function Scope with Lexical Scope)
function createCounter() {
    let count = 0; // Private variable

    return function () {
        count++;
        console.log(count);
    };
}

const counter = createCounter();
counter(); // 1
counter(); // 2
counter(); // 3

