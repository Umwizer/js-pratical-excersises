// Our football team has finished the championship.

// Our team's match results are recorded in a collection of strings. Each match is represented by a string in the format "x:y", where x is our team's score and y is our opponents score.

// For example: ["3:1", "2:2", "0:1", ...]

// Points are awarded for each match as follows:

// if x > y: 3 points (win)
// if x < y: 0 points (loss)
// if x = y: 1 point (tie)
// We need to write a function that takes this collection and returns the number of points our team (x) got in the championship by the rules given above.

// Notes:

// our team always plays 10 matches in the championship
// 0 <= x <= 4
// 0 <= y <= 4


//Explanation
// We are given an array of strings where each string represents a match result, like "x:y".
//  We need to calculate the total points based on the rules:
// Win (x > y): 3 points
// Loss (x < y): 0 points
// Tie (x = y): 1 point
// Step 2: Plan the Solution (Logic Building):
// Steps to Solve:
// Loop through all match results.
// Extract scores from each result.
// Compare scores to determine points.
// Accumulate the points into a total.
// Return the total points.

function points(games){
let totalPoints  = 0;
for(let game of games){
    const [x,y]  = game.split(':').map(Number);
    if(x>y){
        totalPoints += 3;
    }
    else if(x == y){
        totalPoints += 1;
    }
}
return totalPoints
}
const Results =  ["3:1", "2:2", "0:1", "4:0", "1:1", "2:0", "3:3", "4:4", "1:0", "2:1"];
console.log(points(Results));


