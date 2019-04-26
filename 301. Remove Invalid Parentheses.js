/* https://leetcode.com/problems/remove-invalid-parentheses/ */

/**
 * @param {string} s
 * @return {string[]}
 */
var removeInvalidParentheses = function(s) {
	let stack = [];

	for (let i = 0; i < s.length; i++) {
		if (s[i] === '(' || s[i] === ')') {
			stack.push(s[i]);
		}
	}

	console.log(stack);
};

console.log(removeInvalidParentheses('()())()'));
console.log(removeInvalidParentheses('(a)())()'));
console.log(removeInvalidParentheses(')('));
