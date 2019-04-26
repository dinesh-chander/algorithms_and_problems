/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
	let carry = 0;

	let start = l2,
		end;

	while (l1 || l2) {
		carry = l2.val + (l1 ? l1.val : 0) + carry;
		l2.val = carry % 10;
		carry = parseInt(carry / 10);
		end = l2;
		l1 = l1 ? l1.next : null;

		if (!l2.next && l1) {
			l2.next = l1;
			l2 = l2;
			l1 = null;
		}

		l2 = l2.next;

		console.log(l1, l2);
	}

	if (carry) {
		end.next = { val: carry, next: null };
	}

	return start;
};

let a = {
	val: 2,
	next: {
		val: 4,
		next: {
			val: 3
		}
	}
};

var b = {
	val: 5,
	next: {
		val: 6,
		next: {
			val: 4
		}
	}
};

console.log(addTwoNumbers(a, b));
// console.log(addTwoNumbers({ val: 5 }, { val: 5 }));
