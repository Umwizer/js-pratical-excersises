const keypoints = [
  "what is reduce method()",
  "how to use reduce method()",
  "why is reduce useful",
];

//reduce () is method javascript that processes an array and returns a single value by applying function to each element.

const prices = [10, 50, 12];

const total = prices.reduce((sum, price) => sum + price, 0);
console.log(total);

//reduce () is powerul because it can replace loops and handles complex tasks like sum
