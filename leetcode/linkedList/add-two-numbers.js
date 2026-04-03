var addTwoNumbers = function (l1, l2) {
  let l1p = l1;
  let l2p = l2;
  let head;
  let curr;
  let sum = (carry = 0);
  while (l1p || l2p || carry) {
    sum = (l1p?.val || 0) + (l2p?.val || 0) + carry;
    carry = Math.floor(sum / 10);
    digit = sum % 10;
    let newNode = new ListNode(digit);
    if (!head) {
      head = newNode;
      curr = head;
    } else {
      curr.next = newNode;
      curr = curr.next;
    }

    sum = 0;
    l1p = l1p ? l1p.next : null;
    l2p = l2p ? l2p.next : null;
  }

  return head;
};

// Input: l1 = [2,4,3], l2 = [5,6,4]
// Output: [7,0,8]
// Explanation: 342 + 465 = 807.
