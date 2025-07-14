// Implement a method for string instances called "forEachMatch", to mimic the string's .replace() method. Oh-- and don't use the string's replace method!

// It should take a regular expression, a callback function, and an optional context for the function to be called in. If no context was given, it should default to the global context.

// The callback should be called for every match in the string. It should receive the following arguments: the matched string, every group match as separate arguments, and then the index of the first character of the matches string, and finally the input string itself.

// So something like this:

// "string".forEachMatch(/(str)|(ing)/g, function(match, str, ing, index, input) {
//     console.log("'" + input + "' has '" + (str || ing) + "' at index "+index);
// });
// Should log out something like this:

// 'string' has 'str' at index 0
// 'string' has 'ing' at index 3

String.prototype.forEachMatch = function (regex, callback, context) {
  if (!(regex instanceof RegExp)) {
    throw new TypeError("First argument must be a RegExp");
  }

  const str = this.toString();
  const ctx = context || (typeof global !== "undefined" ? global : this);

  let match;
  const workingRegex = new RegExp(
    regex.source,
    regex.flags.includes("g") ? regex.flags : regex.flags + "g"
  );

  while ((match = workingRegex.exec(str)) !== null) {
    const args = [...match, match.index, str];
    callback.apply(ctx, args);

    if (match[0].length === 0) {
      workingRegex.lastIndex++;
    }
  }
};
