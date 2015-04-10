function FirstFactorial(num) {
  for (var i = num - 1; i > 0; i--) {
    num = num * i;
  }
  // code goes here
  return num;
         
}
   
// keep this function call here
// to see how to enter arguments in JavaScript scroll down
FirstFactorial(readline());
