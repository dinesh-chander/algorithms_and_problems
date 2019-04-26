/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  let valid = {
    ')': '(',
    '}': '{',
    ']': '['
  };

  let stack = [];

  for (let i = 0; i < s.length; i++) {
    if (valid[s[i]] && valid[s[i]] === stack[stack.length - 1]) {
      stack.length -= 1;
    } else {
      stack.push(s[i]);
    }
  }

  console.log(stack);
  return stack.length ? false : true;
};

console.log(isValid('()'))
console.log(isValid('{}'))
console.log(isValid('{)'))