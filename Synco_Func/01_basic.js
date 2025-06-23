function greet() {
  console.log("Hello!");
}

console.log("Before Greeting");
greet();
console.log("After Greeting");

// Before Greeting
// Hello!
// After Greeting



// example 2

// problem in syncro
function blockForSeconds(seconds) {
  const start = Date.now();
  while (Date.now() - start < seconds * 1000) {
    // Blocking the thread
  }
}

console.log("Start");
blockForSeconds(3); // blocks for 3 seconds
console.log("End");


// Start
// (wait 3 seconds)
// End

