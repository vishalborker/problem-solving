function ListNode(val, next) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
}

/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
*/


var reverseKElements = function (head, k, loop) {
    if (head === null) {
        return null;
    }
    // k=2 [1,2];
    var temp = head;
    for(i = 1; i < k; i++) {

        temp = temp.next;
        if(!temp) {
            return head;
        }
    }

    var prev = null;
    current = head;
    var i = k;
    
    while(current &&  i > 0) {
        var next = current.next;
        // reverse
        current.next = prev;
        
        prev = current;
        current = next;
        
        i--;
    }

    nextCurrent = prev;
    while(nextCurrent.next) {
        nextCurrent = nextCurrent.next;
    }
    if (current) {
        nextCurrent.next = reverseKElements(current, k, loop);
    }
    return prev;
}

function createLinkedList(arr) {
    var head = new ListNode(0);
    var current = head;
    for(let a of arr) {
        current.next = new ListNode(a);
        current = current.next;
    }
    return head.next;
}


var reverseKGroup = function(head, k) {
    if(k < 2) {
      return head;
    }
    var current = head;
    var result = reverseKElements(current, k);
    console.log({result});
    return result;
};

var arr = [1], k = 2;
var current = head;

var head = createLinkedList(arr);
console.log(JSON.stringify(head, null, '\t'));

var result = reverseKGroup(head, k);
console.log(JSON.stringify(result, null, '\t'));

// 3 2 1 6 5 4 7