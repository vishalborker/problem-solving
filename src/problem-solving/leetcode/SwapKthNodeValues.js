/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
 var swapNodes = function(head, k) {
    var current = head;
    
    var kthNodeFromStart = null;
        
    for(i=1; i < k;i++) {
        current = current.next;
    }
    
    var kthNodeFromStart = current;
    
    var kthNode = kthNodeFromStart;
        
    current = head;

    while(kthNode.next) {
        kthNode = kthNode.next;
        current = current.next;
    }

    var temp = current.val;
    current.val = kthNodeFromStart.val;
    kthNodeFromStart.val = temp;
    
    return head;    
};