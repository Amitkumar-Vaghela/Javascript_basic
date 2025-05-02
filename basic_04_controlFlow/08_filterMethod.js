const books = [
  { title: "Java Basics", author: "James Gosling", price: 450 },
  { title: "Python Crash Course", author: "Eric Matthes", price: 600 },
  { title: "Effective Java", author: "Joshua Bloch", price: 700 },
  { title: "Let Us C", author: "Yashwant Kanetkar", price: 350 }
];

// 1. Books under ₹500
const affordableBooks = books.filter(book => book.price < 500);
console.log("Books under ₹500:");
affordableBooks.forEach(book => {
  console.log(`${book.title} by ${book.author} - ₹${book.price}`);
});

// 2. Books by "Joshua Bloch"
const booksByJoshua = books.filter(book => book.author === "Joshua Bloch");

console.log("\nBooks by Joshua Bloch:");
booksByJoshua.forEach(book => {
  console.log(`${book.title} by ${book.author} - ₹${book.price}`);
});


// output
// Books under ₹500:
// Java Basics by James Gosling - ₹450
// Let Us C by Yashwant Kanetkar - ₹350

// Books by Joshua Bloch:
// Effective Java by Joshua Bloch - ₹700
