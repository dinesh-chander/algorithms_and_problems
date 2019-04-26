/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function (board, word) {

  let compute = function (i, j, index) {

    if (index === word.length) {
      return true;
    }

    let char = board[i][j];

    board[i][j] = '';

    let ans;

    if (0 <= i - 1 && board[i - 1][j] === word[index]) {
      ans = compute(i - 1, j, index + 1);
    }

    if (i + 1 < board.length && board[i + 1][j] === word[index]) {
      ans = ans || compute(i + 1, j, index + 1);
    }

    if (0 <= j - 1 && board[i][j - 1] === word[index]) {
      ans = ans || compute(i, j - 1, index + 1);
    }

    if (j + 1 < board[0].length && board[i][j + 1] === word[index]) {
      ans = ans || compute(i, j + 1, index + 1);
    }

    board[i][j] = char;
    return ans;
  };

  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[0].length; j++) {
      if (board[i][j] === word[0] && compute(i, j, 1)) {
        return true;
      }
    }
  }

  return false;
};

// var board = [
//   ['A', 'B', 'C', 'E'],
//   ['S', 'F', 'C', 'S'],
//   ['A', 'D', 'E', 'E']
// ];

// console.log(exist(board, 'ABCCED'));
// console.log(exist(board, 'SEE'));
// console.log(exist(board, 'ABCB'));

var board = [
  ['A', 'B']
];

console.log(exist(board, 'BA'));