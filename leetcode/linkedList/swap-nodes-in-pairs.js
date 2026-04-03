// iterative
// var swapPairs = function (head) {
//     if (!head || !head.next) return head;
//     let prev = new ListNode();
//     let curr = head;
//     let nextN = newHead = head.next;

//     while (curr && curr.next) {
//         prev.next = nextN;
//         curr.next = nextN.next;
//         nextN.next = curr;

//         prev = curr;
//         curr = prev.next;
//         nextN = curr && curr.next;
//     }

//     return newHead;
// };

//  recursive
var swapPairs = function (head) {
  if (!head || !head.next) return head;

  let l = head;
  let r = head.next;

  l.next = swapPairs(r.next);
  r.next = l;
  return r;
};

// Example 1:

// Input: head = [1,2,3,4]

// Output: [2,1,4,3]

// Example 2:

// Input: head = []

// Output: []

// Example 3:

// Input: head = [1]

// Output: [1]

// Example 4:

// Input: head = [1,2,3]

// Output: [2,1,3]
