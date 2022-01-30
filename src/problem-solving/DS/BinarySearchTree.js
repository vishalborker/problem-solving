class Node {
    constructor(data, left = null, right = null) {
        this.data = data;
        this.left = left;
        this.right = right;
    }
}

class BinarySearchTree {
    constructor() {
        this.root = null;
    }

    // TODO: 
    checkIfBalanced() {

    }


    insert(data) {
        let node = this.root;

        // if root node empty
        if (node == null) {
            this.root = new Node(data);
            return;
        }

        // else
        const searchTree = (node) => {
            // cant insert same value
            if (data === node.data) {
                return;
            }
            if (data < node.data) {
                if (node.left == null) {
                    node.left = new Node(data);
                } else {
                    searchTree(node.left);
                }
            } else if(data > node.data) {
                if (node.right == null) {
                   node.right = new Node(data);
                } else {
                    searchTree(node.right);
                }
            }
        };
        return searchTree(node);
    }

    print() {
        let current = this.root;
        console.log(JSON.stringify(current));
        return;
    }

    findMax() {
        let current = this.root;
        while(current.right) {
            current = current.right;
        }
        return current.data;
    }

    findMin() {
        let current = this.root;
        while(current.left) {
            current = current.left;
        }
        return current.data;
    }

    isPresent(data) {
        let current = this.root;

        // bst is empty
        if(current == null) {
            return false;
        }

        while(current) {
            if (data === current.data) {
                return true;
            }

            if (data < current.data) {
                current = current.left;
            }

            if (data > current.data) {
                current = current.right;
            }
        }
        return false;
    }

    // yet to implement
    removeNode() {


    }
}

const bst = new BinarySearchTree();

bst.insert(50);

bst.insert(15);
bst.insert(56);

bst.insert(25);
bst.insert(9);

bst.print();

console.log('Min Value in BST => ', bst.findMin());
console.log('Min Value in BST => ', bst.findMax());



console.log(`IsPresent 9 ${bst.isPresent(9)}`);
console.log(`IsPresent 12 ${bst.isPresent(12)}`);
console.log(`IsPresent 15 ${bst.isPresent(15)}`);
