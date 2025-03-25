3. Exception Handling

console.log("Starting the program...\n");

try {
    console.log("Trying to execute some code...");
    
    // Intentionally causing an error
    let result = 10 / 0;  // Division by zero (won't throw an error in JS)
    console.log("Result:", result);
    
    let x = y + 5;  // ReferenceError: 'y' is not defined
    
} catch (error) {
    console.log("\nAn error occurred!");
    console.log("Error Name:", error.name);  // Type of error (ReferenceError, TypeError, etc.)
    console.log("Error Message:", error.message);  // Error description
    
} finally {
    console.log("\nFinally block executed.");
    console.log("This block runs regardless of an error.\n");
}

// Example of throwing a custom error
function checkAge(age) {
    if (age < 18) {
        throw new Error("Age must be 18 or above.");
    } else {
        console.log("Access granted.");
    }
}

try {
    checkAge(16); // This will throw an error
} catch (error) {
    console.log("\nCaught a custom error!");
    console.log("Error:", error.message);
}

console.log("\nProgram execution continues...");

// output
/*
Starting the program...

Trying to execute some code...

An error occurred!
Error Name: ReferenceError
Error Message: y is not defined

Finally block executed.
This block runs regardless of an error.

Caught a custom error!
Error: Age must be 18 or above.

Program execution continues...






*/
