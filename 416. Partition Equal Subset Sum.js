/* https://leetcode.com/problems/partition-equal-subset-sum/ */

/**
 * @param {number[]} nums
 * @return {boolean}
 */

// var canPartition = function(nums) {
// 	let totalSum = 0;

// 	for (let i = 0; i < nums.length; i++) {
// 		totalSum += nums[i];
// 	}

// 	if (totalSum % 2 === 1) {
// 		return false;
// 	}

// 	let dict = [];

// 	let halfOfSum = totalSum / 2;

// 	let findElements = (index, currentSum) => {
// 		dict[index] = dict[index] || [];

// 		if (dict[index][currentSum] !== undefined) {
// 			return dict[index][currentSum];
// 		}

// 		if (currentSum === halfOfSum) {
// 			return true;
// 		}

// 		if (nums.length <= index) {
// 			return false;
// 		}

// 		dict[index][currentSum] =
// 			findElements(index + 1, currentSum + nums[index]) ||
// 			findElements(index + 1, currentSum);

// 		return dict[index][currentSum];
// 	};

// 	findElements(0, 0);
// 	return dict[0][0];
// };

var canPartition = function(nums) {
	nums.sort((a, b) => {
		return a < b ? -1 : 1;
	});

	let totalSum = 0;

	for (let i = 0; i < nums.length; i++) {
		totalSum += nums[i];
	}

	if (totalSum % 2 === 1) {
		return false;
	}

	let dict = [];

	let halfOfSum = totalSum / 2;
	let otherHalfFound = false;
	let temp;

	let findElements = (index, currentSum) => {
		if (otherHalfFound) {
			return true;
		}

		dict[index] = dict[index] || [];

		if (dict[index][currentSum] !== undefined) {
			return dict[index][currentSum];
		} else {
			dict[index][currentSum] = false;
		}

		if (halfOfSum <= currentSum || nums.length <= index) {
			return false;
		}

		temp = currentSum + nums[index];

		if (temp === halfOfSum) {
			otherHalfFound = true;
			dict[index][currentSum] = true;
		} else if (!otherHalfFound) {
			if (temp < halfOfSum) {
				dict[index][currentSum] =
					findElements(index + 1, temp) || findElements(index + 1, currentSum);
			} else {
				dict[index][currentSum] = false;
			}
		}

		return dict[index][currentSum];
	};

	findElements(0, 0);
	return dict[0][0];
};

// console.log(canPartition([1, 5, 11, 5]));
// console.log(canPartition([1, 2, 3, 5]));

console.log(canPartition([1, 5, 11, 5]));
// console.log(canPartition([1, 2, 5]));

// console.log(
// 	canPartition([
// 		28,
// 		63,
// 		95,
// 		30,
// 		39,
// 		16,
// 		36,
// 		44,
// 		37,
// 		100,
// 		61,
// 		73,
// 		32,
// 		71,
// 		100,
// 		2,
// 		37,
// 		60,
// 		23,
// 		71,
// 		53,
// 		70,
// 		69,
// 		82,
// 		97,
// 		43,
// 		16,
// 		33,
// 		29,
// 		5,
// 		97,
// 		32,
// 		29,
// 		78,
// 		93,
// 		59,
// 		37,
// 		88,
// 		89,
// 		79,
// 		75,
// 		9,
// 		74,
// 		32,
// 		81,
// 		12,
// 		34,
// 		13,
// 		16,
// 		15,
// 		16,
// 		40,
// 		90,
// 		70,
// 		17,
// 		78,
// 		54,
// 		81,
// 		18,
// 		92,
// 		75,
// 		74,
// 		59,
// 		18,
// 		66,
// 		62,
// 		55,
// 		19,
// 		2,
// 		67,
// 		30,
// 		25,
// 		64,
// 		84,
// 		25,
// 		76,
// 		98,
// 		59,
// 		74,
// 		87,
// 		5,
// 		93,
// 		97,
// 		68,
// 		20,
// 		58,
// 		55,
// 		73,
// 		74,
// 		97,
// 		49,
// 		71,
// 		42,
// 		26,
// 		8,
// 		87,
// 		99,
// 		1,
// 		16,
// 		79
// 	])
// );
