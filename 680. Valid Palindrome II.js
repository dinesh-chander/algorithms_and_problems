/* https: //leetcode.com/problems/valid-palindrome-ii/ */


/**
 * @param {string} s
 * @return {boolean}
 */

// var validPalindrome = function (s) {
//   let compute = (shouldReturn, indexToSkip) => {
//     let i = 0,
//       j = s.length - 1;

//     if (indexToSkip !== undefined) {
//       i === indexToSkip && i++;
//       j === indexToSkip && j--;
//     }

//     while (i <= j) {
//       if (s[i] != s[j]) {
//         return !shouldReturn ? compute(true, i) || compute(true, j) : false;
//       } else {
//         i++;
//         j--;

//         i === indexToSkip && i++;
//         j === indexToSkip && j--;

//       }
//     }

//     return true;
//   }

//   return compute();
// }

// var validPalindrome = function (s, shouldReturn) {
//   let i = 0,
//     j = s.length - 1;

//   while (i <= j) {
//     if (s[i] != s[j]) {

//       return !shouldReturn ? validPalindrome(s.substring(0, i) + s.substring(i + 1, s.length), true) || validPalindrome(s.substring(0, j) + s.substring(j + 1, s.length), true) : false;
//     } else {
//       i++;
//       j--;
//     }
//   }

//   return true;
// }

var validPalindrome = function (s) {
  let compute = (i, j, issue) => {

    while (i <= j) {
      if (s[i] != s[j]) {
        return issue ? false : compute(i, j - 1, true) || compute(i + 1, j, true);
      } else {
        i++;
        j--;
      }
    }

    return true;
  };

  return compute(0, s.length - 1, false);
};


console.log(validPalindrome('aababa'));
console.log(validPalindrome('eedede'));
console.log(validPalindrome("deeee"));
console.log(validPalindrome("abc"));