class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

class Tree {
  constructor(array) {
    this.array = array.sort((a, b) => a - b);
    array = [...new Set(array)];
    this.root = this.buildTree(array);
  }

  buildTree(array, start = 0, end = array.length - 1) {
    if (start > end) return null;
    let mid = Math.floor((start + end) / 2);
    let root = new Node(array[mid]);
    root.left = this.buildTree(array, start, mid - 1);
    root.right = this.buildTree(array, mid + 1, end);
    return root;
  }

  insert(value, currNode = this.root) {
    if (currNode == null) return new Node(value);
    if (value < currNode.data) {
      currNode.left = this.insert(value, currNode.left);
    } else if (value > currNode.data) {
      currNode.right = this.insert(value, currNode.right);
    }
    return currNode;
  }

  getSuccessor(curr) {
    curr = curr.right;
    while (curr != null && curr.left != null) {
      curr = curr.left;
    }
    return curr;
  }

  deleteItem(value, currNode = this.root) {
    if (currNode == null) {
      return currNode;
    }
    if (value < currNode.data) {
      currNode.left = this.deleteItem(value, currNode.left);
    } else if (value > currNode.data) {
      currNode.right = this.deleteItem(value, currNode.right);
    } else {
      if (currNode.left == null && currNode.right == null) {
        return null;
      }
      if (currNode.left == null) {
        return currNode.right;
      } else if (currNode.right == null) {
        return currNode.left;
      }
      let succ = this.getSuccessor(currNode);
      currNode.data = succ.data;
      currNode.right = this.deleteItem(succ.data, currNode.right);
    }
    return currNode;
  }

  find(value, currNode = this.root) {
    if (currNode == null) return null;
    if (value == currNode.data) console.log(currNode);
    if (value < currNode.data) {
      currNode.left = this.find(value, currNode.left);
    } else if (value > currNode.data) {
      currNode.right = this.find(value, currNode.right);
    }
    return currNode;
  }
}

let bst = new Tree([1, 7, 4, 23, 8, 9, 4, 3, 5, 7, 9, 67, 6345, 324]);
let node = bst.root;

const prettyPrint = (node, prefix = "", isLeft = true) => {
  if (node === null) {
    return;
  }
  if (node.right !== null) {
    prettyPrint(node.right, `${prefix}${isLeft ? "│   " : "    "}`, false);
  }
  console.log(`${prefix}${isLeft ? "└── " : "┌── "}${node.data}`);
  if (node.left !== null) {
    prettyPrint(node.left, `${prefix}${isLeft ? "    " : "│   "}`, true);
  }
};

prettyPrint(node);
