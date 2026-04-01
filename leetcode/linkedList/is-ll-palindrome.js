var isPalindrome = function (head) {
  let arr = [];
  let curr = head;
  while (curr) {
    arr.push(curr.val);
    curr = curr.next;
  }

  let i = 0;
  let j = arr.length - 1;
  while (i < j) {
    if (arr[i] !== arr[j]) {
      return false;
    }
    i++;
    j--;
  }

  return true;
};

var isPalindrome2 = function (head) {
  // FIRST  FIND THE MIDDLE OF LINKED LIST
  // MAKE SECOND HALF REVERSE
  // START TRAVERSING FROM START AND END OF SECOND HALF
  // CHECK IF VAL SAME IN EVERY NODE COMPARED - RETURN PALINDROME LL

  let slow = head;
  let fast = head;
  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;
  }

  let prev = null;
  let curr = slow;
  while (curr) {
    let temp = curr.next;
    curr.next = prev;
    prev = curr;
    curr = temp;
  }

  let start = head;
  let end = prev;
  while (end) {
    if (end.val !== start.val) {
      return false;
    }
    end = end.next;
    start = start.next;
  }

  return true;
};
