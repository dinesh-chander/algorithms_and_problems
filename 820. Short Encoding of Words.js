/* https://leetcode.com/problems/short-encoding-of-words/ */

/**
 * @param {string[]} words
 * @return {number}
 */
var minimumLengthEncoding = function(words) {
	let trie = { child: {} };
	let tempWord, temp;
	let sum = 0;

	for (let i = 0; i < words.length; i++) {
		temp = trie;
		tempWord = words[i];

		for (let k = tempWord.length - 1; 0 <= k; k--) {
			temp.child[tempWord[k]] = temp.child[tempWord[k]] || {
				ch: tempWord[k],
				child: {}
			};

			temp = temp.child[tempWord[k]];
		}
	}

	let calculateSum = (trie, depth) => {
		let keys = Object.keys(trie.child);

		if (keys.length === 0) {
			console.log(depth);
			sum += depth + 1;
			return 0;
		}

		depth++;

		for (let i = 0; i < keys.length; i++) {
			calculateSum(trie.child[keys[i]], depth);
		}
	};

	calculateSum(trie, 0);

	return sum;
};

console.log(minimumLengthEncoding(['time', 'me', 'bell']));
