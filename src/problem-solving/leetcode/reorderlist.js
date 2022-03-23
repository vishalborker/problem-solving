/*
143. Reorder List
Medium

5496

204

Add to List

Share
You are given the head of a singly linked-list. The list can be represented as:

L0 → L1 → … → Ln - 1 → Ln
Reorder the list to be on the following form:

L0 → Ln → L1 → Ln - 1 → L2 → Ln - 2 → …
You may not modify the values in the list's nodes. Only nodes themselves may be changed.

 

Example 1:


Input: head = [1,2,3,4]
Output: [1,4,2,3]
Example 2:


Input: head = [1,2,3,4,5]
Output: [1,5,2,4,3]
 

Constraints:

The number of nodes in the list is in the range [1, 5 * 104].
1 <= Node.val <= 1000
*/

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {void} Do not return anything, modify head in-place instead.
 */
 var reorderList = function(head) {
    var current = head;
    var list = [];
    
    while(current) {
        list.push(current.val);
        current = current.next;
    }
    
    var listLen = list.length;
    var j = listLen - 1;
        
    var current = head;
    
    for(i = 1, j = listLen - 1; i < listLen, j>=i; i++,j--) {
        if( i !== j) {
            current.next = new ListNode(list[j]);
            current = current.next;
            current.next = new ListNode(list[i]);
            current = current.next;
        } else if (i==j){
            current.next = new ListNode(list[j]);
            current = current.next;
        }
    }
};