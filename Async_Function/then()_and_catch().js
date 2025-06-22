function getUserData() {
  fetch('https://jsonplaceholder.typicode.com/users/1')
    .then(response => response.json())
    .then(data => {
      console.log('User Data (then):', data);
    })
    .catch(error => {
      console.error('Error (then):', error);
    });
}

getUserData();



// output
// User Data (then): {
//   id: 1,
//   name: "Leanne Graham",
//   username: "Bret",
//   email: "Sincere@april.biz",
//   address: { street: "Kulas Light", city: "Gwenborough", ... },
//   phone: "1-770-736-8031 x56442",
//   website: "hildegard.org",
//   company: { name: "Romaguera-Crona", ... }
// }
