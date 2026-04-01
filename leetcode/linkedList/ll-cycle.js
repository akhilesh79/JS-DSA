let hasCycle = (head) => {
  let seenNodes = new Set();
  let curr = head;
  while (curr) {
    if (seenNodes.has(curr)) {
      return true;
    }

    seenNodes.add(curr);
    curr = curr.next;
  }

  return false;
};

let hasCycle2 = (head) => {
  // floyd cycle finding algorithm
  let slow = head;
  let fast = head;

  while (fast && fast.next) {
    if (slow == fast) {
      return true;
    }

    slow = slow.next;
    fast = fast.next.next;
  }
  return false;
};
