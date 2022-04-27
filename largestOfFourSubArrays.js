// Return an array consisting of the largest number from each provided sub-array. For simplicity, the provided array will contain exactly 4 sub-arrays.

function largestOfFour(arr) {
  let arr2 = [];
  for (let sub of arr) {
    sub.sort((a, b) => b - a);
  }
  arr2.unshift(arr[0][0], arr[1][0], arr[2][0], arr[3][0]);
  return arr2;
}

largestOfFour([
  [4, 5, 1, 3],
  [13, 27, 18, 26],
  [32, 35, 37, 39],
  [1000, 1001, 857, 1],
]);
