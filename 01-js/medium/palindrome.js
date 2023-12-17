/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

function isPalindrome(str0) {
let str1=str0.toLowerCase()
let str2=str1.replace(/[!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~]/g, '')
 let str3=str2.replaceAll(' ','')
  let n=Math.floor(str3.length/2)
  let i=0
  let j=str3.length-1
  while(j>=i){
    if(str3.charAt(i)!=str3.charAt(j)){
      return false;
    }
    i++
    j--
  }
  return true;
}

module.exports = isPalindrome;
