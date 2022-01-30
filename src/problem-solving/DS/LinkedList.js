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
        if (this.isIndexOutOfRange()) {
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
}

const linkedList = new LinkedList();
linkedList.insertFirst(100);

linkedList.insertLast(200);
linkedList.insertLast(300);
linkedList.insertLast(400);

linkedList.insertLast(800);

linkedList.insertAt(0, 700);
linkedList.insertAt(0, 900);



linkedList.printList();

linkedList.removeFirst();

linkedList.printList();
linkedList.removeLast();
linkedList.printList();

linkedList.removeAt(3);

linkedList.printList();