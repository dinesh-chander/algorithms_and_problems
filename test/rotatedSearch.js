/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
  let i = 0,
    j = nums.length - 1;

  let mid;

  while (i <= j) {
    mid = Math.floor((i + j) / 2);

    if (nums[mid] === target) {
      return mid;
    }

    if (nums[mid] < nums[j]) {
      if (nums[mid] < target && target <= nums[j]) {
        i = mid + 1;
      } else {
        j = mid - 1;
      }
    } else {
      if (nums[i] <= target && target < nums[mid]) {
        j = mid - 1;
      } else {
        i = mid + 1;
      }
    }
  }

  return -1;
};

console.log(search([4, 5, 6, 7, 0, 1, 2], 0));
console.log(search([4, 5, 6, 7, 0, 1, 2], 3));
console.log(search([5, 1, 3], 5));
console.log(search([3, 1], 3));
console.log(search([4, 5, 6, 7, 8, 1, 2, 3], 8));
console.log(search([3, 4, 5, 6, 1, 2], 2));
console.log(search([3, 5, 1], 3));
console.log(search([], 5));
console.log(search([1, 3, 5], 5));