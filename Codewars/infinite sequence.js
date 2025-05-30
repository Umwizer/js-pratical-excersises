// Write a method which defines an infinite sequence for a given rule, and allows use of the #take and #take_while methods (JS: take and takeWhile property) to get 'n' elements of the sequence, or all elements that match a condition.

// Example:

// sequence {|n| n}.take_while {|n| n < 10} => [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
// sequence {|n| (n * n)}.take(10) => [0, 1, 4, 9, 16, 25, 36, 49, 64, 81]
function sequence(fun) {
  return {
    take(n) {
      const result = [];
      for (let i = 0; i < n; i++) {
        result.push(fun(i));
      }
      return result;
    },
    takewhile(conditionFn) {
      const result = [];
      let i = 0;
      while (true) {
        const value = fn(i);
        if (!conditionFn(value)) break;
        result.push(value);
        i++;
      }
      return result;
    },
  };
}
