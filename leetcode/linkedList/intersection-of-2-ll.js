var getIntersectionNode = function (headA, headB) {
  const headBNodes = new Set();
  let currB = headB;
  let currA = headA;
  while (currB) {
    headBNodes.add(currB);
    currB = currB.next;
  }

  while (currA) {
    if (headBNodes.has(currA)) {
      return currA;
    }
    currA = currA.next;
  }

  return null;
};
