let str = "JavaScript";

console.log(str.substring(0, 4));  // "Java" (Extracts from index 0 to 3)
console.log(str.substring(4, 10)); // "Script"
console.log(str.substring(4));     // "Script" (Extracts till the end)
console.log(str.substring(7, 4));  // "Scr" (Swaps 4 and 7)
console.log(str.substring(-3, 4)); // "Java" (Negative is treated as 0)





let str = "JavaScript";

console.log(str.slice(0, 4));   // "Java" (Extracts from index 0 to 3)
console.log(str.slice(4, 10));  // "Script"
console.log(str.slice(4));      // "Script" (Extracts till the end)
console.log(str.slice(-6));     // "Script" (Negative index counts from the end)
console.log(str.slice(-6, -3)); // "Scr" (From 6th last to 3rd last)
console.log(str.slice(7, 4));   // "" (Returns empty string, no swap like substring)
