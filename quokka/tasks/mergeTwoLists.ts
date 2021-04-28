// https://leetcode.com/problems/merge-two-sorted-lists/

class ListNode {
  constructor(public val: number = 0, public next: ListNode | null = null) {}
}

function mergeTwoLists(
  l1: ListNode | null,
  l2: ListNode | null
): ListNode | null {
  if (l1 === null && l2 === null) {
    return null;
  }

  const l3 = new ListNode();
  if (l1 !== null && (l2 === null || l1.val < l2.val)) {
    l3.val = l1.val;
    l3.next = mergeTwoLists(l1.next, l2);
  } else {
    l3.val = l2.val;
    l3.next = mergeTwoLists(l1, l2.next);
  }
  return l3;
}
