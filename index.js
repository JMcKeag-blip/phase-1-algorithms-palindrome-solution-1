function reverseString(word) {
  return word.split("").reverse().join("");
}

function isPalindrome(word) {
  const reversedWord = reverseString(word);
  return word === reversedWord;
}

/* 
  reverse the input
  if the reversed input is the same as the original input
    return true
  else
    return false
*/

/*
  I need to make a isPalindrome function that returns either true or false. When
  the input is the same both ways, It will return true. That
  means that if the input is the same after It is reversed, It should return
  true. "mom" in reverse is also "mom", and "racecar" in reverse is
  also "racecar", so my solution should return true for these cases. "hi" in
  reverse is "ih", so my solution should return false for this case.
*/

if (require.main === module) {
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", isPalindrome("mom"));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", isPalindrome("abba"));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", isPalindrome("a"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("hi"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;