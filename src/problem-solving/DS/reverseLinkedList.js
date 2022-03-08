function reverseLinkedList(head) {
    let current = head;
    let prev = null;
    
    while(current) {
        let next = current.next;

        current.next = prev;
        prev = current;

        current = next;
    }
    return prev;
}

var createLinkedList = function (arr) {
    var ListNode = function (data, next = null) {
        this.data = data;
        this.next = next;
    }

    let head = new ListNode(0);
    let current = head;

    for(let i = 0; i < arr.length; i++) {
        current.next = new ListNode(arr[i]);
        current = current.next;
    }

    return head.next;
}

const arr = [1,2,3,4,5,6];

const head = createLinkedList(arr);

const result = reverseLinkedList(head);

console.log({result});