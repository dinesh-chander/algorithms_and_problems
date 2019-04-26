/* https://leetcode.com/problems/shortest-distance-to-a-character/ */
/**
 * @param {string} S
 * @param {character} C
 * @return {number[]}
 */
var shortestToChar = function(S, C) {
	let last, current;
	let ans = [];

	for (let i = 0; i < S.length; i++) {
		current = S.indexOf(C, i);

		if (current !== -1) {
			ans[current] = 0;

			while (i < current) {
				console.log(i, current, last);
				ans[i] =
					last === undefined ? current - i : Math.min(current - i, i - last);
				i++;
			}

			last = current;
		} else {
			let j = 1;
			while (i < S.length) {
				ans[i++] = j++;
			}
		}
	}

	return ans;
};

// console.log(shortestToChar('loveleetcode', 'e'));

// console.log(shortestToChar('abaa', 'b'));

console.log(shortestToChar('baab', 'b'));
