/**
 * @param {string} s
 * @return {string}
 */

let checkPallindrome = s => {
	let i = 0,
		j = s.length - 1;

	while (i <= j) {
		if (s[i] !== s[j]) {
			return false;
		}

		i++;
		j--;
	}

	return true;
};

var longestPalindrome = function(s) {
	let ans = '';

	let compute = index => {
		if (s.length <= index) {
			return;
		}

		for (let i = index; i < s.length; i++) {
			let temp = s.substring(index, i + 1);
			// console.log(temp);

			if (checkPallindrome(temp)) {
				if (ans.length < temp.length) {
					// console.log(ans, temp);
					ans = temp;
				}
			}
		}

		if (ans.length === s.length) {
			return;
		}

		compute(index + 1);
	};

	compute(0);

	return ans;
};

// console.log(longestPalindrome('cbbd'));

// console.log(longestPalindrome('babad'));
// console.log(longestPalindrome('aa'));
// console.log(longestPalindrome('a'));
console.log(
	longestPalindrome(
		'bzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz'
	)
);

console.log(longestPalindrome('aaaabaaa'));
