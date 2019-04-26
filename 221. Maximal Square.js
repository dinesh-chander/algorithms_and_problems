/* https: //leetcode.com/problems/maximal-square/ */

/**
 * @param {character[][]} matrix
 * @return {number}
 */

var maximalSquare = function (matrix) {
  let ans = 0;
  let distances = [];
  let temp, temp1;

  for (let i = 0; i < matrix.length; i++) {
    distances[i] = [];

    for (let j = 0; j < matrix[i].length; j++) {
      temp1 = {
        top: 0,
        left: 0
      };

      temp = +matrix[i][j];

      temp1.left = 0 <= j - 1 && distances[i][j - 1].left && temp ? distances[i][j - 1].left + temp : temp;
      temp1.top = 0 <= i - 1 && distances[i - 1][j].top && temp ? distances[i - 1][j].top + temp : temp;

      distances[i][j] = temp1;
    }
  }

  console.log(distances);

  for (let i = 0; i < distances.length; i++) {
    for (let j = 0; j < distances[i].length; j++) {

      let k = 0,
        minLength = Math.min(distances[i][j].left, distances[i][j].top);

      if (matrix[i][j] === '1') {
        while (0 <= i - k && 0 <= j - k && k < minLength) {
          minLength = Math.min(minLength, distances[i - k][j].left, distances[i][j - k].top);
          // console.log(k, minLength, distances[i - k][j], distances[i][j - k]);
          k++;
        }

        // console.log(ans, minLength, i, j);

        ans = Math.max(minLength, ans);
      }
    }
  }

  return ans * ans;
}


// var maximalSquare = function (matrix) {
//   let temp = [],
//     max = 0;

//   for (let i = 0; i < matrix.length; i++) {
//     temp[i] = [];

//     for (let j = 0; j < matrix[0].length; j++) {

//       if (matrix[i][j] === '0') {
//         temp[i][j] = 0;
//       } else if (0 <= i - 1 && 0 <= j - 1) {
//         let isPrevTopEleSet = 0 <= i - 1 ? +matrix[i - 1][j] : 0;
//         let isPrevLeftEleSet = 0 <= j - 1 ? +matrix[i][j - 1] : 0;
//         let temp2 = Math.min(isPrevLeftEleSet, isPrevTopEleSet, temp[i - 1][j - 1]);

//         console.log(isPrevLeftEleSet, isPrevTopEleSet, temp2)

//         temp[i][j] = temp2;
//       } else {
//         temp[i][j] = +matrix[i][j];
//       }

//       max = Math.max(temp[i][j], max);
//     }
//   }


//   console.log(temp);
//   return max * max;
// };

console.log(maximalSquare([
  ["1", "1"],
  ["1", "1"]
]));

// console.log(maximalSquare([
//   ["0", "1", "1", "0", "1"],
//   ["1", "1", "0", "1", "0"],
//   ["0", "1", "1", "1", "0"],
//   ["1", "1", "1", "1", "0"],
//   ["1", "1", "1", "1", "1"],
//   ["0", "0", "0", "0", "0"]
// ]));

console.log(maximalSquare(
  [
    ["1", "0", "1", "0", "0"],
    ["1", "0", "1", "1", "1"],
    ["1", "1", "1", "1", "1"],
    ["1", "0", "0", "1", "0"]
  ]));

// console.log(maximalSquare([
//   ["0", "1", "1", "0", "0", "1", "0", "1", "0", "1"],
//   ["0", "0", "1", "0", "1", "0", "1", "0", "1", "0"],
//   ["1", "0", "0", "0", "0", "1", "0", "1", "1", "0"],
//   ["0", "1", "1", "1", "1", "1", "1", "0", "1", "0"],
//   ["0", "0", "1", "1", "1", "1", "1", "1", "1", "0"],
//   ["1", "1", "0", "1", "0", "1", "1", "1", "1", "0"],
//   ["0", "0", "0", "1", "1", "0", "0", "0", "1", "0"],
//   ["1", "1", "0", "1", "1", "0", "0", "1", "1", "1"],
//   ["0", "1", "0", "1", "1", "0", "1", "0", "1", "1"]
// ]));

// console.log(maximalSquare([
//   ['0']
// ]));

// console.log(maximalSquare([
//   ['1']
// ]));