/* https://leetcode.com/problems/top-k-frequent-elements/ */

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */

// function ListNode(val) {
// 	this.val = val;
// 	this.next = this.prev = null;
// }

// var topKFrequent = function(nums, k) {
// 	if (k === 0) {
// 		return [];
// 	}

// 	let dict = {};
// 	let tempDict = {};
// 	let start, root;
// 	let temp, tempNode;
// 	let i;

// 	for (i = 0; i < nums.length; i++) {
// 		temp = nums[i];
// 		tempDict[temp] = tempDict[temp] + 1 || 1;
// 	}

// 	let keys = Object.keys(tempDict);

// 	while (keys.length) {
// 		for (i = 0; i < keys.length; i++) {
// 			temp = keys[i];
// 			tempDict[temp]--;

// 			if (dict[temp]) {
// 				if (dict[temp].prev) {
// 					dict[temp].prev.next = dict[temp].next;

// 					if (dict[temp].next) {
// 						dict[temp].next.prev = dict[temp].prev;
// 					}

// 					if (dict[temp] === root) {
// 						root = dict[temp].next ? dict[temp].next : dict[temp].prev;
// 					}

// 					dict[temp].prev = null;
// 					dict[temp].next = start;
// 					start.prev = dict[temp];
// 					start = start.prev;
// 				}
// 			} else {
// 				tempNode = new ListNode(temp);

// 				if (!start) {
// 					start = root = tempNode;
// 				} else {
// 					tempNode.prev = root;
// 					root.next = tempNode;
// 					root = root.next;
// 				}

// 				dict[temp] = tempNode;
// 			}

// 			if (tempDict[temp] <= 0) {
// 				delete tempDict[temp];
// 			}
// 		}

// 		keys = Object.keys(tempDict);
// 	}

// 	// console.log(dict);

// 	let ans = [];

// 	while (k-- && start) {
// 		ans.push(parseInt(start.val));
// 		start = start.next;
// 	}

// 	return ans;
// };

var topKFrequent = function(nums, k) {
	let dict = {};
	let i;

	for (i = 0; i < nums.length; i++) {
		dict[nums[i]] = dict[nums[i]] + 1 || 1;
	}

	let tempList = Object.keys(dict).map(key => {
		return {
			key,
			val: dict[key]
		};
	});

	tempList.sort((a, b) => {
		return a.val < b.val ? 1 : -1;
	});

	let ans = [];

	for (i = 0; i < k; i++) {
		ans.push(parseInt(tempList[i].key));
	}

	return ans;
};

console.log(topKFrequent([1, 1, 1, 2, 2, 3], 2));
console.log(topKFrequent([1, 1], 1));
