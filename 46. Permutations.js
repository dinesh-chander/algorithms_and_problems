/* https://leetcode.com/problems/permutations/ */

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {
	let ans = [],
		temp;

	let compute = function(index) {
		if (index === nums.length) {
			ans.push(Array.from(nums));
			return;
		}

		for (let i = index; i < nums.length; i++) {
			compute(index + 1);
			temp = nums[index];
			nums.splice(index, 1);
			nums.push(temp);
		}
	};

	compute(0);
	return ans;
};

console.log(permute([1, 2, 3]));

console.log(permute([1]));
console.log(permute([]));
console.log(permute([5, 4, 6, 2]));
