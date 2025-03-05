const now = new Date(); 

// Get Date Components
const year = now.getFullYear();
const month = now.getMonth() + 1; // Months are 0-based
const date = now.getDate();
const day = now.getDay(); // 0 = Sunday, 6 = Saturday

console.log("=== DATE INFORMATION ===");
console.log("Year:", year);
console.log("Month:", month);
console.log("Date:", date);
console.log("Day of the Week:", day); // 0 = Sunday, 1 = Monday, ..., 6 = Saturday

// Get Time Components
const hours = now.getHours();
const minutes = now.getMinutes();
const seconds = now.getSeconds();
const milliseconds = now.getMilliseconds();

console.log("\n=== TIME INFORMATION ===");
console.log("Hours:", hours);
console.log("Minutes:", minutes);
console.log("Seconds:", seconds);
console.log("Milliseconds:", milliseconds);

// Formatted Date and Time
const formattedDate = now.toLocaleDateString(); // Example: "3/5/2025"
const formattedTime = now.toLocaleTimeString(); // Example: "2:30:15 PM"

console.log("\n=== FORMATTED OUTPUT ===");
console.log("Formatted Date:", formattedDate);
console.log("Formatted Time:", formattedTime);




/*  



output

=== DATE INFORMATION ===
Year: 2025
Month: 3
Date: 5
Day of the Week: 3

=== TIME INFORMATION ===
Hours: 14
Minutes: 30
Seconds: 15
Milliseconds: 789

=== FORMATTED OUTPUT ===
Formatted Date: 3/5/2025
Formatted Time: 2:30:15 PM


*/
