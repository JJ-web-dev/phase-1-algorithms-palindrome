const { expect } = require("chai");

function isPalindrome(word) {
  const array = word.split('');
  const reverseArray = array.reverse();
  const reverseToString = reverseArray.join('')

  if(word == reverseToString) {
    return true
  }else {
    return false
  }
}

isPalindrome('mom')
isPalindrome('rocket')

/* 
expect a function which takes an argument of a string
if the argument is a palindrome it will equal true
if it is not a palindrome it will equal false

return result
*/

/*
  1.create a function that takes an argument of a string
  2.the function should return true if the string reads the same forward and backward ex. mom and false if it 
  does not read this way
  3.the string should only be lowercase letters and no special chars or spaces


*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  isPalindrome('kayak') = true
  isPalindrome('rotator') = true 
  isPalindrome('king') = false 

  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
