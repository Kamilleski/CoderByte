function Palindrome(str) {
  halfStr = Math.floor(str.length / 2)
  for (var i = 0; i <= halfStr; i++) {
    if (str[i] === str[str.length - 1 - i]){
      return true;
    }
    else
      return false;
    
  }
  // code goes here
         
}
   
// keep this function call here
// to see how to enter arguments in JavaScript scroll down
Palindrome(readline());
