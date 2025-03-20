function calculateTotalPrice(cartItems) {
    return cartItems.reduce((total, { price, quantity }) => total + price * quantity, 0);
}

// Example cart items
const cart = [
    { name: "Laptop", price: 800, quantity: 1 },
    { name: "Phone", price: 500, quantity: 2 },
    { name: "Headphones", price: 150, quantity: 1 },
];

// Calculate total price using spread operator
const updatedCart = [...cart];  // Copying cart items using spread
const totalPrice = calculateTotalPrice(updatedCart);

console.log("Total Price:", totalPrice);  // Output: Total Price: 1950
