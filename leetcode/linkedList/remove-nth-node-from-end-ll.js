var removeNthFromEnd = function (head, n) {
  let sentinelNode = new ListNode();
  sentinelNode.next = head;
  let firstP = (secondP = sentinelNode);

  while (n > 0) {
    secondP = secondP.next;
    n--;
  }

  while (secondP && secondP.next) {
    secondP = secondP.next;
    firstP = firstP.next;
  }

  firstP.next = firstP.next.next;

  return sentinelNode.next;
};

// Input: head = [1,2,3,4,5], n = 2
// Output: [1,2,3,5]
// Example 2:

// Input: head = [1], n = 1
// Output: []
// Example 3:

// Input: head = [1,2], n = 1
// Output: [1]
