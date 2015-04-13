function LetterCapitalize(str) {
  var k = str.length;
  str = str.substr(0, 1).toUpperCase() + str.substr(1, k-1);
  for(var i = 0; i < k; i++) {
    if (str[i] === " ") {
	  str = str.slice(0, i+1) + str.substr(i+1, 1).toUpperCase() + str.substr(i+2, k-1);
    }
  
  }// code goes here
  return str;
         
}
   
// keep this function call here
// to see how to enter arguments in JavaScript scroll down
LetterCapitalize(readline());
