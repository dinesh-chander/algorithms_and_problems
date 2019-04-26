/* https://leetcode.com/problems/subsets/ */

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function(nums) {
	let ans = [];
	nums.sort((a, b) => a - b);

	let compute = index => {
		console.log(nums);

		if (index >= nums.length) {
			return;
		}

		ans.push(Array.from(nums));

		let temp;

		for (let i = index; i < nums.length; i++) {
			temp = nums[i];
			nums.splice(i, 1);
			compute(i);
			nums.push(temp);
			// nums.splice(i, 0, temp);
		}
	};

	compute(0);
	return ans;
};

console.log(subsets([1, 2, 3]));
/*
[1]
[2]
[3]
[2, 3]
[1, 3]
[1, ]
[1, 2, 3]
[]
*/
