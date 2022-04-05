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
    isSymmetric() {
        let head = this.root;
        if (head == null) {
            return true;
        }
        return this.checkSymmetric(head.left, head.right);
    }

    checkSymmetric(root1, root2) {
        if (root1 == null && root2 == null) {
            return true;
        } else if (root1 == null || root2 == null) {
            return false;
        } else if (root1.data != root2.data) {
            return false;
        }
    
        return this.checkSymmetric(root1.left, root2.right) && this.checkSymmetric(root1.right, root2.left);
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
        if (current == null) {
            return null;
        }
        while(current.right) {
            current = current.right;
        }
        return current.data;
    }

    findMin() {
        let current = this.root;
        if (current == null) {
            return null;
        }
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

        while(current != null) {
            if (data === current.data) {
                return true;
            }

            if (data < current.data) {
                current = current.left;
            } else if (data > current.data) {
                current = current.right;
            }
        }
        return false;
    }

    // yet to implement
    removeNode() {


    }

    preOrder(current) {
        if( current == null) {
            return;
        }
        console.log(current.data);
        this.preOrder(current.left);
        this.preOrder(current.right);
    }

    postOrder(current) {
        if( current == null) {
            return;
        }
        this.postOrder(current.left);
        this.postOrder(current.right);
        console.log(current.data);
    }

    inOrder(current) {
        if( current == null) {
            return;
        }
        this.inOrder(current.left);
        console.log(current.data);
        this.inOrder(current.right);
    }
}

const bst = new BinarySearchTree();

// bst.insert(50);

// bst.insert(15);
// bst.insert(56);

// bst.insert(25);
// bst.insert(9);
// bst.insert(45);

// bst.insert(33);
// bst.insert(91);

bst.insert(5);
bst.insert(1);
bst.insert(2);
bst.insert(4);
bst.insert(3);
bst.insert(12);
bst.insert(31);

result = bst.isSymmetric();
bst.print();

console.log(JSON.stringify(bst.root,null, "\t"))

console.log('\n Printing InOrder \n');
bst.inOrder(bst.root);

console.log('\n Printing PreOrder \n');
bst.preOrder(bst.root);

console.log('\n Printing PostOrder \n');
bst.postOrder(bst.root);

/*
            5
       /         \
      1           12
         2         \
                    31
            \
             4
           /
          3  

 */

// console.log('Min Value in BST => ', bst.findMin());
// console.log('Min Value in BST => ', bst.findMax());
// console.log(`IsPresent 9 ${bst.isPresent(9)}`);
// console.log(`IsPresent 12 ${bst.isPresent(12)}`);
// console.log(`IsPresent 15 ${bst.isPresent(15)}`);
