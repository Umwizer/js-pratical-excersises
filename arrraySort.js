// You are given an array of product objects, each containing a name (string) and a price (number).
// Your task is to implement a function called sortProducts that sorts the products
// based on their prices in ascending order.

function sortProducts(products){
return products.sort((productA,productB) => productA.price-productB.price)
}
const products =[
    {name:"laptop",price:56789039876378},
    {name:"printer",price:2312}
]
console.log(sortProducts(products))
