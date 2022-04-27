function titleCase(str) {
  let sentence = str
    .split(" ")
    .map((word) => word[0].toUpperCase() + word.slice(1).toLowerCase());
  return sentence.join(" ");
}

titleCase("I'm a little tea pot");
