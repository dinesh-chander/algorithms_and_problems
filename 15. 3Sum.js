/* https://leetcode.com/problems/3sum/ */

/**
 * @param {number[]} nums
 * @return {number[][]}
 */

var threeSum = function(nums) {
	nums.sort((a, b) => a - b);

	for (let i = 1; i < nums.length; i++) {
		while
	}
};

// var threeSum = function(nums) {
// 	let ans = [];
// 	let dict = {};
// 	let temp;
// 	let i, j, k;

// 	nums.sort((a, b) => a - b);

// 	let moveForward = index => {
// 		let tempIndex = index - 1;

// 		while (nums[tempIndex] === nums[index] && index < nums.length) {
// 			index++;
// 		}

// 		return index;
// 	};

// 	for (i = 0; i < nums.length; i++) {
// 		temp = nums[i];
// 		dict[temp] = dict[temp] || -1;
// 		dict[temp] = Math.max(i, dict[temp]);
// 	}

// 	i = 0;

// 	while (i < nums.length) {
// 		j = i + 1;

// 		while (j < nums.length) {
// 			temp = -(nums[i] + nums[j]);
// 			if (dict[temp] !== undefined && j < dict[temp]) {
// 				ans.push([nums[i], nums[j], nums[dict[temp]]]);
// 			}

// 			j = moveForward(j + 1);
// 		}
// 		i = moveForward(i + 1);
// 	}

// 	return ans;
// };

// var threeSum = function(nums) {
// 	let ans = [];
// 	let temp;
// 	let i, j, k;

// 	nums.sort((a, b) => a - b);

// 	let moveForward = index => {
// 		let tempIndex = index - 1;

// 		while (nums[tempIndex] === nums[index] && index < nums.length) {
// 			index++;
// 		}

// 		return index;
// 	};

// 	i = 0;
// 	while (i < nums.length) {
// 		j = i + 1;

// 		while (j < nums.length) {
// 			temp = nums[i] + nums[j];
// 			k = j + 1;
// 			while (k < nums.length) {
// 				if (nums[k] + temp === 0) {
// 					ans.push([nums[i], nums[j], nums[k]]);
// 				}

// 				k = moveForward(k + 1);
// 			}

// 			j = moveForward(j + 1);
// 		}

// 		i = moveForward(i + 1);
// 	}

// 	return ans;
// };

console.log(threeSum([-1, 0, 1, 2, -1, -4]));
console.log(threeSum([0, 0, 0, 0]));
