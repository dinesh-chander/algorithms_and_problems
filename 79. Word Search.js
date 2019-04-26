/* https://leetcode.com/problems/word-search/ */

/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */

var exist = function(board, word) {
	var check = (i, j, wordIndex) => {
		if (word.length <= wordIndex) {
			return true;
		}

		let result = false;
		let incrWordIndex = wordIndex + 1;
		let tempCh = board[i][j];
		board[i][j] = '';

		if (0 <= i && i < board.length && 0 <= j && j < board[0].length) {
			if (board[i + 1] && board[i + 1][j] === word[wordIndex]) {
				result = result || check(i + 1, j, incrWordIndex);
			}

			if (board[i - 1] && board[i - 1][j] === word[wordIndex]) {
				result = result || check(i - 1, j, incrWordIndex);
			}

			if (board[i][j + 1] === word[wordIndex]) {
				result = result || check(i, j + 1, incrWordIndex);
			}

			if (board[i][j - 1] === word[wordIndex]) {
				result = result || check(i, j - 1, incrWordIndex);
			}
		}

		board[i][j] = tempCh;
		return result;
	};

	for (let i = 0; i < board.length; i++) {
		for (let j = 0; j < board[0].length; j++) {
			if (board[i][j] === word[0] && check(i, j, 1)) {
				return true;
			}
		}
	}

	return false;
};

let board = [['A', 'B', 'C', 'E'], ['S', 'F', 'C', 'S'], ['A', 'D', 'E', 'E']];

console.log(exist(board, 'ABCCED'));
console.log(exist(board, 'SEE'));
console.log(exist(board, 'ABCB'));
