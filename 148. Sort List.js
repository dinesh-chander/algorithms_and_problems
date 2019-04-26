/* https://leetcode.com/problems/sort-list/ */
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */

var mergeList = (firstList, secondList) => {
	let newHead, start;

	while (firstList || secondList) {
		if (!firstList) {
			if (!newHead) {
				return secondList;
			}

			newHead = newHead.next = secondList;
			break;
		}

		if (!secondList) {
			if (!newHead) {
				return firstList;
			}

			newHead = newHead.next = firstList;
			break;
		}

		if (!newHead) {
			if (firstList.val < secondList.val) {
				newHead = firstList;
				firstList = firstList.next;
			} else {
				newHead = secondList;
				secondList = secondList.next;
			}

			start = newHead;
		} else {
			if (firstList.val < secondList.val) {
				newHead = newHead.next = firstList;
				firstList = firstList.next;
			} else {
				newHead = newHead.next = secondList;
				secondList = secondList.next;
			}
		}
	}

	return start;
};

var splitList = head => {
	let length = 0;
	let temp = head;

	while (temp) {
		temp = temp.next;
		length++;
	}

	temp = head;
	let halfLength = Math.floor(length / 2);
	let i = 0,
		temp2 = head;

	while (i !== halfLength) {
		temp2 = temp;
		temp = temp.next;
		i++;
	}

	temp2.next = null;

	if (temp && head !== temp) {
		return mergeList(sortList(head), sortList(temp));
	} else {
		return head;
	}
};

var sortList = function(head) {
	if (!head) {
		return head;
	}

	return splitList(head);
};

let s = {
	val: 1,
	next: {
		val: 2,
		next: {
			val: 3,
			next: {
				val: 4,
				next: null
			}
		}
	}
};

console.log(sortList(s));
