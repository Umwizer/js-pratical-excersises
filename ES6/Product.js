// 1. Create a class Product with properties name (string), price (number), and methods:
// - getDetails(): Returns a string representation of the product details (name and price).

// applyDiscount(discount): Applies a discount
// (percentage) to the product's price and returns the discounted price.

//solution
// . Class & Properties
// We'll create a class called Product that will have:

// name: the name of the product (a string)

// price: the price of the product (a number)

// 2. Method: getDetails()
// This method returns a string with the name and price of the product.
// For example: "Product: Laptop, Price: $1000"

// 3. Method: applyDiscount(discount)
// This method:

// Takes a discount percentage (e.g. 10 for 10%)

// Calculates the discounted price

// Updates the product’s price

// Returns the new discounted price
class Product {
  constructor(name, price) {
    this.name = name;
    this.price = price;
  }
  getDetails() {
    return `${this.name} costs $${this.price.toFixed(2)}`;
  }
  applyDiscount(discount) {
    return this.price * (1 - discount / 100);
  }
}
const laptop = new Product("Laptop", 1000);
console.log(laptop.getDetails());
console.log(laptop.getDetails(10));
console.log(laptop.getDetails());
