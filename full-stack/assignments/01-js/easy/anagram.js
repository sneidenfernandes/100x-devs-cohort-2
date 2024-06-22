/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/

function isAnagram(str1, str2) {

  // Get string length
  let n1 = str1.length;
  let n2 = str2.length;

  // Check for equality of string length 
  if (n1 != n2){
    return false;
  }

  // convert to array of letters in lowercase
  let arr1 = str1.toLowerCase().split("");
  let arr2 = str2.toLowerCase().split("");

  // sort arrays and join back to form  a string

  newStr1 = arr1.sort().join("");
  newStr2 = arr2.sort().join("");

  if (newStr1 == newStr2){
    return true;
  }

  return false;
  

}

module.exports = isAnagram;


