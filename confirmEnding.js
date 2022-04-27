// Check if a string (first argument, str) ends with the given target string (second argument, target).

function confirmEnding(str, target) {
  let lastLetter = str.substring(str.length - target.length);
  if (lastLetter == target) {
    return true;
  } else {
    return false;
  }
}

confirmEnding("Bastian", "n");
