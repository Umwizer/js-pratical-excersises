// Given a hash of letters and the number of times they occur, recreate all of the possible
// anagram combinations that could be created using all of the letters, sorted alphabetically.

// The inputs will never include numbers, spaces or any special characters, only lowercase letters a-z.

// E.g. get_words({2=>["a"], 1=>["b", "c"]}) =>
// ["aabc", "aacb", "abac", "abca", "acab", "acba", "baac", "baca", "bcaa", "caab", "caba", "cbaa"]
function getWords(hash) {
  // Step 1: Expand the input into a list of letters
  const letters = [];
  for (const [countStr, chars] of Object.entries(hash)) {
    const count = parseInt(countStr);
    for (const ch of chars) {
      for (let i = 0; i < count; i++) {
        letters.push(ch);
      }
    }
  }

  // Step 2: Backtracking to generate unique anagrams
  const results = new Set();
  const used = Array(letters.length).fill(false);

  function backtrack(path) {
    if (path.length === letters.length) {
      results.add(path.join(""));
      return;
    }

    for (let i = 0; i < letters.length; i++) {
      if (used[i]) continue;

      used[i] = true;
      path.push(letters[i]);
      backtrack(path);
      path.pop();
      used[i] = false;
    }
  }

  backtrack([]);
  return Array.from(results).sort();
}
