/* https://leetcode.com/problems/find-all-anagrams-in-a-string/ */

/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */

let areDictsMatching = (main, cloned) => {
	// console.log(main, cloned);
	let mainKeys = Object.keys(main);

	if (mainKeys.length !== Object.keys(cloned).length) {
		return false;
	}

	for (let i = 0; i < mainKeys.length; i++) {
		if (cloned[mainKeys[i]] < main[mainKeys[i]]) {
			return false;
		}
	}

	return true;
};

var findAnagrams = function(s, p) {
	let ans = [],
		temp,
		startIndex = 0,
		i = 0;

	let dict = [],
		tempDict = [];

	while (i < p.length) {
		dict[p[i]] = dict[p[i]] + 1 || 1;
		i++;
	}

	i = 0;

	while (i < s.length) {
		temp = s[i];

		if (dict[temp]) {
			tempDict[temp] = tempDict[temp] + 1 || 1;

			if (areDictsMatching(dict, tempDict)) {
				ans.push(startIndex);
			}

			i++;

			while (p.length <= i - startIndex) {
				if (tempDict[s[startIndex]]) {
					tempDict[s[startIndex]]--;
				}

				startIndex++;
			}
		} else {
			startIndex = ++i;
			tempDict = {};
		}
	}

	return ans;
};

console.log(findAnagrams('cbaebabacd', 'abc'));
// console.log(findAnagrams('abab', 'ab'));
