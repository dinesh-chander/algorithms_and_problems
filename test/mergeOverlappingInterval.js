/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function (intervals) {
  intervals.sort((a, b) => a[0] - b[0]);

  let ans = [];
  let temp = intervals[0];
  let i = 0;

  while (temp) {
    let temp2 = intervals[i++];

    if (temp2 && (temp2[0] <= temp[1] && temp[1] <= temp2[1] || (temp2[1] <= temp[1]))) {
      temp = [temp[0], Math.max(temp2[1], temp[1])];
    } else {
      ans.push(temp);
      temp = temp2;
    }
  }

  return ans;
};


console.log(merge([
  [1, 3],
  [2, 6],
  [8, 10],
  [15, 18]
]));

console.log(merge([
  [1, 4],
  [4, 5]
]));

console.log(merge([
  [1, 4],
  [2, 3]
]));


/*

Input: [
  [1, 3],
  [2, 6],
  [8, 10],
  [15, 18]
]
Output: [
  [1, 6],
  [8, 10],
  [15, 18]
]
Explanation: Since intervals[1, 3] and[2, 6] overlaps, merge them into[1, 6].
Example 2:

  Input: [
    [1, 4],
    [4, 5]
  ]
Output: [
  [1, 5]
]
Explanation: Intervals[1, 4] and[4, 5] are considered overlapping.
*/