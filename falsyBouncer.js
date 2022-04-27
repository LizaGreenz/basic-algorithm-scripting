// Remove all falsy values from an array.
// Falsy values in JavaScript are false, null, 0, "", undefined, and NaN.

/* Boolean(false); 
   Boolean(0); 
   Boolean(""); 
   Boolean(undefined); 
   Boolean(NaN); 
   The above are falsy values and will return false. */

function bouncer(arr) {
  return arr.filter(Boolean);
}

bouncer([7, "ate", "", false, 9]);
