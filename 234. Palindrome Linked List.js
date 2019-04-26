/* https://leetcode.com/problems/palindrome-linked-list/ */

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */

var isPalindrome = function(head) {
	if (!head) {
		return head;
	}

	let check = secondHead => {
		if (secondHead.next) {
			if (!check(secondHead.next)) {
				return false;
			}
		}

		return secondHead.val === head.val ? (head = head.next) : false;
	};

	return check(head) === false ? false : true;
};

let s = {
	val: 3,
	next: {
		val: 1,
		next: {
			val: 1,
			next: {
				val: 3,
				next: null
			}
		}
	}
};

console.log(isPalindrome(s));
