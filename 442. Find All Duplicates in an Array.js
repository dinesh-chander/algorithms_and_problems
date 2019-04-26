/* https: //leetcode.com/problems/find-all-duplicates-in-an-array/ */


/**
 * @param {number[]} nums
 * @return {number[]}
 */

var findDuplicates = function (nums) {
  let ans = [];

  for (let i = 0; i < nums.length; i++) {
    let index = Math.abs(nums[i]) - 1;

    if (nums[index] < 0) {
      ans[index + 1] = index + 1;
    } else {
      nums[index] *= -1;
    }
  }

  return ans.filter(key => ans[key]).map(key => key);
};

// this will also work
// var findDuplicates = function (nums) {
//   let ans = [];
//   let temp,
//     temp2;

//   for (let i = 0; i < nums.length; i++) {
//     temp = nums[i];
//     nums[i] = undefined;

//     if (temp) {
//       let flag = false;

//       if (nums[temp - 1] === temp && i != temp - 1) {
//         flag = true;
//       } else {
//         while (temp && nums[temp - 1] !== temp) {
//           temp2 = nums[temp - 1];
//           nums[temp - 1] = temp;
//           temp = temp2;
//           flag = true;
//         }
//       }

//       if (flag && temp) {
//         ans.push(temp);
//       }
//     }
//   }

//   return ans;
// };


console.log(findDuplicates([2, 2, 1]));
console.log(findDuplicates([4, 3, 2, 7, 8, 2, 3, 1]));
console.log(findDuplicates([2, 1]));
console.log(findDuplicates([2, 2]));