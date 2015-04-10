function ABCheck(str) {
  for (var i = 0; i < str.length; i++) {
    if (str[i] === "a" || str [i] === "A") {
      if (str[i + 4] === "b" || str[i + 4] === "B") {
        return true;
      }
    }
    if (str[i] === "b" || str[i] === "B") {
      if (str[i + 4] === "a" || str[i+4] === "A") {
        return true;
      }
    }
  }
  return false;
}
   
// keep this function call here
// to see how to enter arguments in JavaScript scroll down
ABCheck(readline());
