// Return the length of the longest word in the provided sentence.

// Your response should be a number.

function findLongestWordLength(str) {
  return str
    .split(" ")
    .map((w) => w.length)
    .sort((a, b) => b - a)[0];
}

findLongestWordLength("The quick brown fox jumped over the lazy dog");
