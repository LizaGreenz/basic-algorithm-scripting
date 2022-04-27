// Return the factorial of the provided integer.

// If the integer is represented with the letter n, a factorial is the product of all positive integers less than or equal to n.

function factorialize(num) {
  if (num == 0) {
    return 1;
  } else {
    for (let i = num - 1; i > 0; i--) {
      num *= i;
    }
  }
  return num;
}

factorialize(5);
factorialize(0);
