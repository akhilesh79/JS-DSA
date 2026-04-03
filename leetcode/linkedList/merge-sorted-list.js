var mergeTwoLists = function (list1, list2) {
  let dummy = new ListNode(-1);
  let curr = dummy;

  while (list1 && list2) {
    if (list1.val < list2.val) {
      curr.next = list1;
      list1 = list1.next;
    } else {
      curr.next = list2;
      list2 = list2.next;
    }
    curr = curr.next;
  }

  curr.next = list1 || list2;

  return dummy.next;
};

// Input: ((list1 = [1, 2, 4]), (list2 = [1, 3, 4]));
// Output: [1, 1, 2, 3, 4, 4];
