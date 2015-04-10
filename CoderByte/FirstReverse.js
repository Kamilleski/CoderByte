function FirstReverse(str) {
  var output = [];
  aray = str.split("")
  for (i = str.length - 1; i >= 0; i--) {
    output.push(aray[i]);
  }
  output = output.join("");
  // code goes here
  return output;
         
}
   
// keep this function call here
// to see how to enter arguments in JavaScript scroll down
FirstReverse(readline());
