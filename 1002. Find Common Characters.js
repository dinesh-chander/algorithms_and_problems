/* https://leetcode.com/problems/find-common-characters/ */

/**
 * @param {string[]} A
 * @return {string[]}
 */
var commonChars = function(A) {
	let ans = {};

	for (let i = 0; i < A.length; i++) {
		let temp = {};

		for (let j = 0; j < A[i].length; j++) {
			let ch = A[i][j];
			temp[ch] = temp[ch] || 0;
			temp[ch]++;
		}

		for (let key in temp) {
			ans[key] = ans[key] || { count: 0 };

			if (ans[key].count && ans[key].min) {
				ans[key].min = Math.min(temp[key], ans[key].min);
			} else {
				ans[key].min = temp[key];
			}

			ans[key].count++;
		}
	}

	let finalAns = [];

	for (let key in ans) {
		if (ans[key].count === A.length) {
			for (let j = 0; j < ans[key].min; j++) {
				finalAns.push(key);
			}
		}
	}

	return finalAns;
};

console.log(commonChars(['bella', 'label', 'roller']));
