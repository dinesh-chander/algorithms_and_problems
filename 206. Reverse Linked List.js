/* https://leetcode.com/problems/reverse-linked-list/ */

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
// var reverseList = function(head) {
// 	if (!head) {
// 		return head;
// 	}

// 	let start;
// 	var op = head => {
// 		if (head.next) {
// 			let temp = op(head.next);
// 			temp.next = head;
// 			head.next = null;
// 			return head;
// 		} else {
// 			start = head;
// 		}

// 		return head;
// 	};

// 	op(head);
// 	return start;
// };

let reverseList = function(head) {
	if (!head) {
		return head;
	}

	let temp,
		a = head,
		b = head.next;

	a.next = null;

	while (a && b) {
		temp = b.next;
		b.next = a;
		a = b;
		b = temp;
	}

	return a;
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

console.log(reverseList(s));
