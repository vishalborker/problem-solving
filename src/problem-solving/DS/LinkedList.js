class Node {
    constructor(data, next = null) {
        this.data = data;
        this.next = next;
    }
}


class LinkedList {
    constructor() {
        this.head = null;
        this.size = 0;
    }

    // insert at first position
    insertFirst(data) {
        this.head = new Node(data);
        this.size++;
    }

    insertLast(data) {
        let current = this.head;

        // if empty LinkedList, insertFirst

        if (this.size === 0) {
            this.insertFirst(data);
            return;
        }

        while(current.next) {
            current = current.next;
        }

        current.next = new Node(data);
        this.size++;
    }

    printList() {
        console.log('<---> \n');
        let current = this.head;

        while(current) {
            console.log(current.data);
            current = current.next;
        }
    }

    insertAt(index, data) {
        let current = this.head;
        let previous;
        let count = 0;
        
        // if index oout of range
        if (this.isIndexOutOfRange()) {
            return;
        }

        // if index is first
        const node = new Node(data);

        if (index === 0) {
            node.next = this.head;
            this.head = node;
            this.size++;
            return;
        }

        while(count < index) {
            previous = current; // node before index
            count++;
            current = current.next; //node after index
        }
        
        node.next = current;
        previous.next = node;

        this.size++;
    }

    getAt(index) {
        if (this.isIndexOutOfRange(index)) {
            return;
        }
        let current = this.head;
        let count = 0;
        while(current) {
            if (count === index) {
                // console.log(current.data);
                return current.data;
            }
            current = current.next;
            count++;
        }
    }

    removeFirst() {
        if (this.size > 0) {
            let current = this.head.next;
            this.head = current;
        }
        this.size--;
    }

    removeLast() {
        let current = this.head;
        let previous;
        let index = this.size;
        let count = 0;
        while(count < index) {
            previous = current;
            current = current.next;
            count++;
        }
        previous.next = null;
        this.size--;
    }

    isIndexOutOfRange(index) {
        return index > 0 && index > this.size;
    }

    // index 2 remove
   // 1 -> 2 -> (3) -> 4
    removeAt(index) {
        if (index === this.size) {
            this.removeLast();
            return;
        }

        if (index === 0) {
            this.removeFirst();
            return;
        }
        if (this.isIndexOutOfRange()) {
            return;
        }

        let current = this.head;
        let previous;
        let nextNode = null;
        let count = 0;

        while(count < index) {
            // 3
            previous = current;
            count++;
            if (current && current.next) {
                current = current.next;
                if (current && current.next) {
                    nextNode = current.next;
                }
            }
        }
        previous.next = nextNode;
        this.size--;
    }

    clearList() {
        this.head = null;
        this.size = 0;
    }

    reverse() {
        const arr = [];
        let current = this.head;
        while(current !=null) {
            arr.push(current.data);
            current = current.next;
        }

        console.log(arr);

        this.head = null;
        this.size = 0;

        for(let i=arr.length-1; i>=0; i--) {
            this.insertLast(arr[i]);
        }
        this.printList();

        console.log(JSON.stringify(this.head));
    }

    reverse2() {
        let prev = null, current = this.head;

        while(current) {
            const next = current.next;
            current.next = prev;
            prev = current;
            current = next

        }
        return prev;
    }
}

const linkedList = new LinkedList();
linkedList.insertFirst(100);

console.log(linkedList.head);

linkedList.insertLast(200);
linkedList.insertLast(300);

linkedList.insertAt(0, 700);

// 5
// 5 -> 1 -> 2 -> 3

// linkedList.insertLast(400);

// linkedList.insertLast(800);

// linkedList.insertAt(0, 700);
// linkedList.insertAt(0, 900);



linkedList.printList();

// linkedList.removeFirst();

// linkedList.printList();
// linkedList.removeLast();
// linkedList.printList();

// linkedList.removeAt(3);

// linkedList.printList();

console.log(linkedList.reverse2());