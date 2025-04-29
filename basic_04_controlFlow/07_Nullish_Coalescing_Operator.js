// Example 1: Variable is null
let count1 = null;

// If count1 is null or undefined, use 10 as default
let result1 = count1 ?? 10;

console.log("Example 1 (null):", result1); // Output: 10


// Example 2: Variable is undefined
let count2; // Not assigned, so it's undefined

let result2 = count2 ?? 10;

console.log("Example 2 (undefined):", result2); // Output: 10


// Example 3: Variable is a valid number (0)
let count3 = 0;

let result3 = count3 ?? 10;

console.log("Example 3 (zero with ??):", result3); // Output: 0
// 0 is not null or undefined, so it is used as-is


// Example 4: Using || operator with 0
let count4 = 0;

let result4 = count4 || 10;

console.log("Example 4 (zero with ||):", result4); // Output: 10
// 0 is falsy, so || uses the default value (10) — not what we usually want


// Example 5: Using ?? operator with 0 (correct behavior)
let result5 = count4 ?? 10;

console.log("Example 5 (zero with ??):", result5); // Output: 0
// ?? correctly keeps 0, because it's not null or undefined
