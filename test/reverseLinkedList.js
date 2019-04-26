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

var reverseList = function (head) {
  if (!head) {
    return head;
  }

  let start;
  let rev = (h) => {
    if (!h) {
      return;
    }

    let temp = rev(h.next);

    if (!temp) {
      start = h;
    } else {
      temp.next = h;
    }

    h.next = null;
    return h;
  };

  rev(head);
  return start;
};

var s = {
  val: 1,
};

console.log(reverseList(s));