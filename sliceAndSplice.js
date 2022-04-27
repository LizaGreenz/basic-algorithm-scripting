function frankenSplice(arr1, arr2, n) {
  let arrNew = arr2.slice();
  arrNew.splice(n, 0, ...arr1);
  return arrNew;
}

frankenSplice([1, 2, 3], [4, 5, 6], 1);
