// 1171. Remove Zero Sum Consecutive Nodes from Linked List
// Medium

// 1337

// 67

// Add to List

// Share
// Given the head of a linked list, we repeatedly delete consecutive sequences of nodes that sum to 0 until there are no such sequences.

// After doing so, return the head of the final linked list.  You may return any such answer.

 

// (Note that in the examples below, all sequences are serializations of ListNode objects.)

// Example 1:

// Input: head = [1,2,-3,3,1]
// Output: [3,1]
// Note: The answer [1,2,1] would also be accepted.
// Example 2:

// Input: head = [1,2,3,-3,4]
// Output: [1,2,4]
// Example 3:

// Input: head = [1,2,3,-3,-2]
// Output: [1]
 

// Constraints:

// The given linked list will contain between 1 and 1000 nodes.
// Each node in the linked list has -1000 <= node.val <= 1000.


//  Definition for singly-linked list.
function ListNode(val, next) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
}
 
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
 var removeZeroSumSublists = function(head) {
    var arr = [];
    var current = head;
    var len = arr.length;
    var newList = new ListNode();
    
    while(current) {
        arr.push(current.val);
        current = current.next;
    }
    
    
    for (i = 0 ; i< len; i++) {
        var sum = arr[i];
        for (j = i+1; j<len; j++) {
            sum += arr[j];
            if (sum ===0) {
                arr.splice(i, j-i+1);
                break;
            }
        }
    }
    
    
    var newCurrent = newList;
    
    for(k=0; k< arr.length; k++) {
        newCurrent.next = new ListNode(arr[k]);
        newCurrent = newCurrent.next;
    }
    
    return newList.next;
};

var removeZeroSumSublists2 = function(head) {
    if (!head) {
        return head;
    }
    
	// Initialize
    let dummy = new ListNode(0);
    dummy.next = head;
    
    // Step1: build the prefix sum map
    let curr = dummy 
    let prefixSumMap = new Map(); 
    let runningSum = 0; 
    
    while (curr) {
        
        runningSum += curr.val;

        console.log({runningSum}, {curr});
        prefixSumMap.set(runningSum, curr);
        curr = curr.next;
    }

    console.log({prefixSumMap})
    
    // Step 2: build the output
    curr = dummy;
    runningSum = 0;
    
    while (curr) {
        runningSum += curr.val;
        // console.log({'whatisthis': prefixSumMap.get(runningSum).next});
        curr.next = prefixSumMap.get(runningSum).next;
        curr = curr.next; 
    }
    
    return dummy.next;
};

var arr = [1,4,-3,3,1];

var head = new ListNode(0);
var current = head;
for(let a of arr) {
    current.next = new ListNode(a);
    current = current.next;
}

// console.log(head.next);

var result = removeZeroSumSublists2(head.next);
console.log({result});