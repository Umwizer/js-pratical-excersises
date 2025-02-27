// 1. Create a class Product with properties name (string), price (number), and methods:
//     - `getDetails()`: Returns a string representation of the product details (name and price).
//     - `applyDiscount(discount)`: Applies a discount (percentage) to the product's price 
//     and returns the discounted price.

class Product{
    constructor(name,price){
        this.name =name;
        this.price = price;
    }
    getDetails(){
        return `${this.name} costs $${this.price.toFixed(2)}`
    };
    applyDiscount(discount){
        return this.price * (1 - discount/100)
    }

}
const product = new Product("Laptop",1000);
console.log(Product.getDetails())
console.log(Product.getDetails())
console.log(Product.getDetails())