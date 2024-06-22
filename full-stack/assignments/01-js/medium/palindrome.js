/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

function isPalindrome(str) {
  let string = str.replace(/[\s\p{P}]/gu, '').toLowerCase();
  
  let j = string.length - 1;

  for(let i = 0; i < string.length/2; i++){
    if (string[i] != string[j]){
      return false;
    }
    j--;
  }
  return true;
}

module.exports = isPalindrome;


