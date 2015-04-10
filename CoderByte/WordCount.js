function WordCount(str) {
  var count = 1;
  for (i = 0; i < str.length; i++) {
    if (str.charAt(i) == " ")
      count++;
  }
  // code goes here
  return count;
         
}
   
// keep this function call here
// to see how to enter arguments in JavaScript scroll down
WordCount(readline());
