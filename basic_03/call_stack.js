function first() {
    console.log("First function IN");
    second();
    console.log("First function OUT");
}

function second() {
    console.log("Second function IN");
    third();
    console.log("Second function OUT");
}

function third() {
    console.log("Third function IN");
    console.log("Third function OUT");
}

console.log("Global Execution Context of First Function ----> 1st Call");
first();

console.log("Global Execution Context of Second Function-----> 2nd Call");
second();

console.log("Global Execution Context of Third Function-----> 3rd Call");
third();
