function isPalindrome(word) {
  // Write your algorithm here
   // Reverse the word
  function reverseString(str) {
    return str.split('').reverse().join('');
  }

  const reversedWord = reverseString(word);

  // Compare the reversed word with the original word
  if (word === reversedWord) {
    return true;
  } else {
    return false;
  }
}  

/* 
  Add your pseudocode here
  isPalindrome(word):
  reversedWord = reverseString(word)
  if reversedWord equals word:
    return true
  else:
    return false

reverseString(word):
  split word into array of characters
  reverse the array
  join the array into a string
  return the string

*/

/*
  Add written explanation of your solution here
  The solution implements a function isPalindrome() which checks if a given word is a palindrome, and a helper function reverseString() that reverses a given string.

The isPalindrome() function takes in a word as input and stores its reverse using the reverseString() function. It then compares the reversed word with the original word and returns true if they are the same, indicating that the word is a palindrome, and false otherwise.

The reverseString() function takes in a string as input and first splits it into an array of individual characters using the split() method. It then reverses the array using the reverse() method and joins the reversed characters back into a string using the join() method.

The code also includes tests that check if the isPalindrome() function works correctly for a range of input strings. The tests are written using the Mocha test framework and the Chai assertion library.

The corrected code exports the isPalindrome() function using module.exports = isPalindrome; statement, allowing it to be used in other files.
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
console.log("Expecting: true");
console.log("=>", isPalindrome("racecar"));

console.log("");

console.log("Expecting: false");
console.log("=>", isPalindrome("robot"));

if (require.main === module) {
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", isPalindrome("mom"));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", isPalindrome("abba"));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", isPalindrome("madam"));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", isPalindrome("deified"));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", isPalindrome("level"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("hello world"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("not a palindrome"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("palindrome with a typo"));
}
}
module.exports = isPalindrome;
