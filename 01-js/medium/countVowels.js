/*
  Implement a function `countVowels` that takes a string as an argument and returns the number of vowels in the string.
  Note: Consider both uppercase and lowercase vowels ('a', 'e', 'i', 'o', 'u').

  Once you've implemented the logic, test your code by running
*/

function countVowels(str) {
    let count=0
    let s1=str.toLowerCase()
    for(let i=0;i<s1.length;i++){
      let curr=s1.charAt(i)
      if(curr==='a'||curr==='e'||curr==='i'||curr==='o'||curr==='u'){
        count++;
      }
    }
    return count
}

module.exports = countVowels;