/* https://leetcode.com/problems/palindromic-substrings/ */

/**
 * @param {string} s
 * @return {number}
 */

var countSubstrings = function(s) {
	let ans = [];

	var isPallindrome = function(i, j) {
		while (i <= j) {
			if (s[i] !== s[j]) {
				return false;
			}

			i++;
			j--;
		}

		return true;
	};

	for (let index = 0; index < s.length; index++) {
		ans.push(s[index]);

		for (let i = 0; i <= index; i++) {
			if (i != index && isPallindrome(i, index)) {
				ans.push(s.substring(i, index + 1));
			}
		}
	}

	return ans.length;
};

console.log(countSubstrings('abc'));
console.log(countSubstrings('abccba'));
