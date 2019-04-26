/* https://leetcode.com/problems/jewels-and-stones/ */

/**
 * @param {string} J
 * @param {string} S
 * @return {number}
 */

var numJewelsInStones = function (J, S) {
	var Jdict = {};
	var totalJewels = 0;

	for (let i = 0; i < J.length; i++) {
		Jdict[J[i]] = true;
	}

	for (let i = 0; i < S.length; i++) {
		if (Jdict[S[i]]) {
			totalJewels++;
		}
	}

	return totalJewels;
};

console.log(numJewelsInStones("aA", "aAAbbbb"));
