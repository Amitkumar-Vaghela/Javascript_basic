// Here’s what happens:
// The fetch call returns a promise.
// await pauses the function until the promise is resolved.
// Once resolved, it assigns the result to response.
// Same for response.json().

async function fetchData() {
  let response = await fetch('https://api.example.com/data');
  let data = await response.json();
  console.log(data);
}



// ✅ Important Rules:
// You can only use await inside an async function.
// If the promise is rejected, it throws an error — so use try/catch.

// ✅ With Error Handling:
async function getData() {
  try {
    const res = await fetch('https://api.example.com/data');
    const data = await res.json();
    console.log(data);
  } catch (error) {
    console.error('Error:', error);
  }
}



// ✅ Return Values:
async function greet() {
  return "Hello";
}

greet().then(alert); // Alerts "Hello"


