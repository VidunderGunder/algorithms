// https://leetcode.com/problems/delete-node-in-a-linked-list/

class ListNode {
  constructor(public val: number = 0, public next: ListNode | null = null) {}
}

function deleteNode(root: ListNode | null): void {
  if (root === null) return;
  if (root.next !== null) {
    root.val = root.next.val;
    root.next = root.next.next;
  }
}
