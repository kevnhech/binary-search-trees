import { Tree } from "./bst.js";

// Create a binary search tree from an array of random numbers < 100. You can create a function that returns an array of random numbers every time you call it if you wish.
function randomArray(times, max) {
  let array = [];
  for (let i = 0; i < times; i++) {
    array.push(Math.floor(Math.random() * max));
  }
  return array;
}

let bst = new Tree(randomArray(10, 100));

// Confirm that the tree is balanced by calling isBalanced.
console.log("Is the tree balanced?", bst.isBalanced());

// Print out all elements in level, pre, post, and in order.
console.log("Level Order: ", bst.levelOrder(node => console.log(node.data)));
console.log("Preorder: ", bst.preOrder(node => console.log(node.data)));
console.log("Post Order: ", bst.postOrder(node => console.log(node.data)));
console.log("Inorder: ", bst.inOrder(node => console.log(node.data)));

// Unbalance the tree by adding several numbers > 100.
bst.insert(101);
bst.insert(102);
bst.insert(103);

// Confirm that the tree is unbalanced by calling isBalanced.
console.log("Is the tree balanced?", bst.isBalanced());

// Balance the tree by calling rebalance.
bst.rebalance();

// Confirm that the tree is balanced by calling isBalanced.
console.log("Is the tree balanced?", bst.isBalanced());

// Print out all elements in level, pre, post, and in order.
console.log("Level Order: ", bst.levelOrder(node => console.log(node.data)));
console.log("Preorder: ", bst.preOrder(node => console.log(node.data)));
console.log("Post Order: ", bst.postOrder(node => console.log(node.data)));
console.log("Inorder: ", bst.inOrder(node => console.log(node.data)));
