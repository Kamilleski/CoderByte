function VowelCount(str) {
  counta = 0;
  var vowels = {
    "a" : true,
    "e" : true,
    "i" : true,
    "o" : true,
    "u" : true,
    "A" : true,
    "E" : true,
    "I" : true,
    "O" : true,
    "U" : true
  };
  for (var i = 0; i < str.length; i++) {
    if (vowels[str[i]]) {
      counta++;
    }
    
  }
  // code goes here
  return counta;
     
}
   
// keep this function call here
// to see how to enter arguments in JavaScript scroll down
VowelCount(readline());