var majorityElement = nums => {
	let check = (start, end) => {
		console.log(start, end);
		let num = nums[start],
			count = 1;
		for (let i = start + 1; i < end; i++) {
			if (nums[i] === num) {
				count++;
			} else {
				count--;
				if (count === 0) {
					num = nums[i];
					count = 1;
				}
			}
		}

		return num;
	};

	let ans1 = check(0, 2 * Math.floor(nums.length / 3));
	let ans2 = check(nums.length - Math.floor(nums.length / 3), nums.length);

	let ans = [];
	ans1 !== undefined && ans.push(ans1);
	ans2 !== undefined && ans.push(ans2);

	return ans;
};

console.log(majorityElement([3, 2, 3]));
console.log(majorityElement([1, 1, 1, 2, 2, 3, 3, 3]));
