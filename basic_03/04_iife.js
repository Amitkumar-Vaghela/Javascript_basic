// An Immediately Invoked Function Expression (IIFE) is a function that runs as soon as it is defined.

// IIFE is a design pattern which is also known as Self-Executing Anonymous Function and contains two major parts.
// 1. The first is the anonymous function with lexical scope enclosed within the Grouping Operator (). This prevents accessing variables within the IIFE idiom as well as polluting the global scope.
// 2. The second part creates the immediately invoked function expression () through which the JavaScript engine will directly interpret the function.

const IIFE = (() => {
    console.log("Immediately Invoked Function Expression");
})();


//i. IIFE with function expression
(function Adding(a, b) {
    let result = a + b;  
    console.log("a and b addition is:", result);
    return result;  
})(2, 3);


// ii. IIFE with arrow function
(()=>{
    console.log("IIFE with arrow function");

})()
