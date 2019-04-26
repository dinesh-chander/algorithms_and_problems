/**
 * @param {string} s
 * @return {number}
 */
var titleToNumber = function (s) {
  let rowNumber = 0;
  let length = s.length;

  for (let i = 0; i < s.length; i++) {
    if (1 < length) {
      rowNumber += Math.pow(26, length - 1) * (s[i].charCodeAt() - 64);
    } else {
      rowNumber += s[i].charCodeAt() - 64;
    }

    length--
  }

  return rowNumber;
};

console.log(titleToNumber('AB'));
console.log(titleToNumber('ZY'));
console.log(titleToNumber('AAA'));


console.log(1 * 26 * 26 + 1 * 26 + 1);