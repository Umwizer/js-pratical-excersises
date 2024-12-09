// Wolves have been reintroduced to Great Britain. You are a sheep farmer, and are now plagued by wolves which pretend to be sheep. Fortunately, you are good at spotting them.

// Warn the sheep in front of the wolf that it is about to be eaten. Remember that you are standing at the front of the queue which is at the end of the array:

// [sheep, sheep, sheep, sheep, sheep, wolf, sheep, sheep]      (YOU ARE HERE AT THE FRONT OF THE QUEUE)
//    7      6      5      4      3            2      1
// If the wolf is the closest animal to you, return "Pls go away and stop eating my sheep". Otherwise, return "Oi! Sheep number N! You are about to be eaten by a wolf!" where N is the sheep's position in the queue.

// Note: there will always be exactly one wolf in the array.

// Examples
// Input: ["sheep", "sheep", "sheep", "wolf", "sheep"]
// Output: "Oi! Sheep number 1! You are about to be eaten by a wolf!"

// Input: ["sheep", "sheep", "wolf"]
// Output: "Pls go away and stop eating my sheep"
function warnTheSheep(queue) {
    // Step 1: Find the index of the wolf
    const wolfIndex = queue.indexOf('wolf');
    
    // Step 2: Check the position of the wolf
    if (wolfIndex === queue.length - 1) {
        // If the wolf is the closest to the front (last in the array)
        return "Pls go away and stop eating my sheep";
    } else {
        // Calculate the position of the sheep in front of the wolf
        const sheepPosition = queue.length - wolfIndex - 1; // sheepPosition is 1-based
        return `Oi! Sheep number ${sheepPosition}! You are about to be eaten by a wolf!`;
    }
}

// Example usage:
console.log(warnTheSheep(["sheep", "sheep", "sheep", "wolf", "sheep"])); // "Oi! Sheep number 1! You are about to be eaten by a wolf!"
console.log(warnTheSheep(["sheep", "sheep", "wolf"])); // "Pls go away and stop eating my sheep"
// Explanation of the Code
// Finding the Wolf:

// const wolfIndex = queue.indexOf('wolf');
// This line finds the index of the wolf in the array. If the wolf is at index 3 in the example ["sheep", "sheep", "sheep", "wolf", "sheep"], wolfIndex will be 3.
// Checking Wolf's Position:
// if (wolfIndex === queue.length - 1):
// This checks if the wolf is at the last 
// position in the array (the closest to you). If it is, we return the message indicating that the wolf should go away.
// Calculating Sheep Position:

// const sheepPosition = queue.length - wolfIndex - 1;
// This calculates the position of the sheep in
//  front of the wolf. Since arrays are zero-indexed and we want a 1-based position (where the first sheep in front of the wolf is number 1), we subtract the wolf's index from the total length of the array and subtract 1.
// Returning the Warning Message:

// The final return statement constructs the message for the sheep in front of the wolf using template literals.
// This implementation efficiently checks the position of the wolf and returns the appropriate warning message based on its position relative to the sheep.

