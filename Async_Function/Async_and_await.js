// ✅ 2. Using async/await

async function getUserData() {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/users/1');
    const data = await response.json();
    console.log('User Data (async/await):', data);
  } catch (error) {
    console.error('Error (async/await):', error);
  }
}

getUserData();


// 🧾 Output:
// User Data (async/await): {
//   id: 1,
//   name: "Leanne Graham",
//   username: "Bret",
//   email: "Sincere@april.biz",
//   address: { street: "Kulas Light", city: "Gwenborough", ... },
//   phone: "1-770-736-8031 x56442",
//   website: "hildegard.org",
//   company: { name: "Romaguera-Crona", ... }
// }
