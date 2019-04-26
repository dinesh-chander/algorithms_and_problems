/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function (digits) {
  let carry = 0,
    i = digits.length - 1;

  digits[i] += 1;

  while (0 <= i) {
    digits[i] += carry;
    [carry, digits[i]] = [Math.floor(digits[i] / 10), digits[i] % 10];
    i--;
  }

  if (carry) {
    digits.unshift(carry);
  }

  return digits;
};

console.log(plusOne([1, 2, 3]));