console.log("Truthy & Falsy Values in JavaScript\n");

const truthyValues = [1, "hello", true, [], {}, "false", Infinity, -1, new Date()];
const falsyValues = [0, "", null, undefined, NaN, false];

console.log("Truthy Values:");
truthyValues.forEach(value => console.log(`${value} →`, Boolean(value)));

console.log("\nFalsy Values:");
falsyValues.forEach(value => console.log(`${value} →`, Boolean(value)));

// Example Usage in Conditions
console.log("\nChecking values in conditions:");

function checkValue(value) {
    if (value) {
        console.log(`${value} is TRUTHY ✅`);
    } else {
        console.log(`${value} is FALSY ❌`);
    }
}

// Testing different values
checkValue("JavaScript");
checkValue(0);
checkValue([]);
checkValue(null);
checkValue({});
checkValue(NaN);
checkValue(" ");



/*

Truthy & Falsy Values in JavaScript

Truthy Values:
1 → true
hello → true
true → true
 → true
[object Object] → true
false → true
Infinity → true
-1 → true
Sun Mar 23 2025 12:34:56 GMT+0000 (UTC) → true

Falsy Values:
0 → false
 → false
null → false
undefined → false
NaN → false
false → false

Checking values in conditions:
JavaScript is TRUTHY ✅
0 is FALSY ❌
 is TRUTHY ✅
null is FALSY ❌
[object Object] is TRUTHY ✅
NaN is FALSY ❌
  is TRUTHY ✅




*/
