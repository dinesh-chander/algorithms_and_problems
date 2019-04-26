/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNonDuplicate = function (nums) {
  let i = 0,
    j = nums.length;
  let mid;

  while (i <= j) {
    mid = Math.floor((i + j) / 2);
    console.log(nums[mid]);

    if (nums[mid - 1] !== nums[mid] && nums[mid] !== nums[mid + 1]) {
      return nums[mid];
    }

    if ((nums[mid - 1] === nums[mid] && (nums.length - mid + 1) % 2 !== 0) || (nums[mid] === nums[mid + 1] && (nums.length - mid + 1) % 2 === 0)) {
      i = mid + 1;
    } else {
      j = mid - 1;
    }
  }
};

console.log(singleNonDuplicate([1, 1, 2, 3, 3, 4, 4, 8, 8]));
console.log(singleNonDuplicate([1, 1, 3]));

console.log(singleNonDuplicate([1, 1, 2, 2, 4, 4, 5, 5, 9]));