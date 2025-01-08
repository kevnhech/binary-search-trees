class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

class Tree {
  constructor(array) {
    this.array = array;
    this.root = this.buildTree(array);
  }

  buildTree(array) {
    // Write a buildTree(array) function that takes an array of data (e.g., [1, 7, 4, 23, 8, 9, 4, 3, 5, 7, 9, 67, 6345, 324]) and turns it into a balanced binary tree full of Node objects appropriately placed (don’t forget to sort and remove duplicates!). The buildTree function should return the level-0 root node.

    // Initialize start = 0, end = length of the array - 1
    // mid = (start+end)/2
    // Create a tree node with mid as root (lets call it A)
    // Recursively do the following steps:
    // Calculate mid of left subarray and make it root of left subtree of A
    // Calculate mid of right subarray and make it root of right subtree of A

    // array.sort((a, b) => a - b);
    // array = [...new Set(array)];

    let start = 0;
    let end = array.length - 1;

    if (start > end) return null;
    let mid = (start + end) / 2;

    let root = new Node(array[mid]);

    root.left = buildTree()

    return root;
  }
}
