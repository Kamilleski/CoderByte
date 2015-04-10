function ExOh(str) {
  x = 0;
  o = 0;
  for (var i = 0; i < str.length; i++) {
    if (str.charAt(i) === "x") {
      x++;
    }
    else if (str.charAt(i) === "o") {
      o++;
    }
  }
  if ( x == o ) {
    return true;
  }
  else {
    return false;
  }
}
   
// keep this function call here
// to see how to enter arguments in JavaScript scroll down
ExOh(readline());