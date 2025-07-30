// Batman’s Utility Belt
// Batman has a utility belt filled with various gadgets. Each gadget has its own weight in grams.

// Write a function totalWeight(tools) that takes an array of integers representing
// the weights of the gadgets and returns the sum of the weights of only those gadgets
//  that weigh at least 100 grams. Gadgets weighing less than 100 grams should be ignored.

// Notes:
// The array may be empty.
// Only gadgets weighing 100 grams or more should be included in the sum.
// All weights are integers.

function totalWeight(tools) {
  return tools
    .filter((weight) => weight >= 100)
    .reduce((sum, weight) => sum + weight, 0);
}
