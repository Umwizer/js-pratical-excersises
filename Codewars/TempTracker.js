// you've started a heating company with an
// oddly-mathematical All-Time Max, Min, Mean and Mode Temperature Guarantee™.

// Write a class TempTracker with these methods:

// insert()   // records a new temperature
// getMax()   // returns the highest temp we've seen so far
// getMin()   // returns the lowest temp we've seen so far
// getMean()  // returns the mean of all temps we've seen so far
// getMode()  // returns the temp we've seen the most times so far
// Do not store every single temperature inserted.
// You expect to get so much input that you won't be
// able to store all the temperatures in memory.
//  Optimize for space and time. The time and space costs of your functions should all be O(1)!

// The function to get the mean should return a float,
// but the rest of the get functions can return integers.
// If no temperatures have been inserted yet, the get functions
// should return None/null/nil . Temperatures will all be inserted
//  as integers. You'll record your temperatures in Fahrenheit,
//  so you can assume they'll all be in the range 0 to 110.

// If there is more than one mode, return any of the modes.
function TempTracker() {
  // Track min and max
  this.maxTemp = null;
  this.minTemp = null;

  // For mean
  this.sum = 0;
  this.count = 0;

  // For mode
  this.occurrences = new Array(111).fill(0); // Range: 0–110
  this.maxOccurrences = 0;
  this.mode = null;
  this.insert = function (temperature) {
    // Max
    if (this.maxTemp === null || temperature > this.maxTemp) {
      this.maxTemp = temperature;
    }
    // Min
    if (this.minTemp === null || temperature < this.minTemp) {
      this.minTemp = temperature;
    } // Mean
    this.sum += temperature;
    this.count++;
    // Mode
    this.occurrences[temperature]++;
    if (this.occurrences[temperature] > this.maxOccurrences) {
      this.maxOccurrences = this.occurrences[temperature];
      this.mode = temperature;
    }
  };
  this.getMax = function () {
    return this.maxTemp;
  };
  this.getMin = function () {
    return this.minTemp;
  };
  this.getMean = function () {
    return this.count === 0 ? null : this.sum / this.count;
  };
  this.getMode = function () {
    return this.mode;
  };
}
const tracker = new TempTracker();
tracker.insert(70);
tracker.insert(80);
tracker.insert(70);
tracker.insert(80);
tracker.insert(80);
console.log(tracker.getMax());
console.log(tracker.getMin());
console.log(tracker.getMode());
console.log(tracker.getMode());
