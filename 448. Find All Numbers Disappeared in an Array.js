/* https://leetcode.com/problems/find-all-numbers-disappeared-in-an-array/ */

/**
 * @param {number[]} nums
 * @return {number[]}
 */

/* var findDisappearedNumbers = function (nums) {
    let ans = [];
    nums.sort(function(a, b) {
        return b > a ? -1 : 1;
    });

    let k = 1, i = 0;

    while (k < nums[0]) {
        ans.push(k++);
    }

    while (i < nums.length - 1) {
        k = nums[i] + 1;

        // console.log(k, nums[i + 1]);

        while (k < nums[i + 1]) {
            ans.push(k++);
        }

        i++;
    }

    k = nums[i] + 1;
    while (k <= nums.length) {
        ans.push(k++);
    }

    return ans;
};
*/

var findDisappearedNumbers = function (nums) {
    let ans = [];

    return ans;
};

console.log(findDisappearedNumbers([4, 3, 2, 7, 8, 2, 3, 1]));
console.log(findDisappearedNumbers([1, 1, 1]));
console.log(findDisappearedNumbers([9]));
console.log(findDisappearedNumbers([1, 1]));
console.log(findDisappearedNumbers([10, 2, 5, 10, 9, 1, 1, 4, 3, 7]));
