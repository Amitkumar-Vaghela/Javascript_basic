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
