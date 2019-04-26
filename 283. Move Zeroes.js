/* https://leetcode.com/problems/move-zeroes/ */

/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
	let numofzeroes = 0;

	for (let i = 0; i < nums.length; ) {
		if (nums[i] === 0) {
			nums.splice(i, 1);
			numofzeroes++;
		} else {
			i++;
		}
	}

	for (let i = 0; i < numofzeroes; i++) {
		nums.push(0);
	}
};

var moveZeroes = function(nums) {
	var i,
		temp,
		pos = 0;

	for (i = 0; i < nums.length; i++) {
		temp = nums[i];
		if (temp) {
			nums[pos++] = temp;
		}
	}

	for (i = pos; i < nums.length; i++) {
		nums[i] = 0;
	}
};

let a = [0, 1, 0, 3, 12];
moveZeroes(a);
console.log(a);
