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

  insert(value, node = this.root) {
    if (node == null) return new Node(value);
    if (value < node.data) {
      node.left = this.insert(value, node.left);
    } else if (value > node.data) {
      node.right = this.insert(value, node.right);
    }
    return node;
  }

  getSuccessor(curr) {
    curr = curr.right;
    while (curr != null && curr.left != null) {
      curr = curr.left;
    }
    return curr;
  }

  deleteItem(value, node = this.root) {
    if (node == null) {
      return node;
    }
    if (value < node.data) {
      node.left = this.deleteItem(value, node.left);
    } else if (value > node.data) {
      node.right = this.deleteItem(value, node.right);
    } else {
      if (node.left == null && node.right == null) {
        return null;
      }
      if (node.left == null) {
        return node.right;
      } else if (node.right == null) {
        return node.left;
      }
      let succ = this.getSuccessor(node);
      node.data = succ.data;
      node.right = this.deleteItem(succ.data, node.right);
    }
    return node;
  }

  find(value, node = this.root) {
    if (node == null) return null;
    if (value == node.data) console.log(node);
    if (value < node.data) {
      node.left = this.find(value, node.left);
    } else if (value > node.data) {
      node.right = this.find(value, node.right);
    }
    return node;
  }

  levelOrder(callback) {
    if (callback == null) throw new Error("Callback is required!");
    
    let node = this.root;
    let queue = [node];
    let array = [];

    while (queue.length > 0) {
      let current = queue[0];
      callback(current);
      array.push(current.data);
      if (current.left) queue.push(current.left);
      if (current.right) queue.push(current.right);
      queue.shift();
    }

    return array;
  }

  inOrder(callback, node = this.root) {
    if (callback == null) throw new Error("Callback is required!");

    if (node) {
      this.inOrder(callback, node.left);
      callback(node);
      this.inOrder(callback, node.right);
    }
  }

  preOrder(callback, node = this.root) {
    if (callback == null) throw new Error("Callback is required!");

    if (node) {
      callback(node);
      this.preOrder(callback, node.left);
      this.preOrder(callback, node.right);
    }
  }

  postOrder(callback, node = this.root) {
    if (callback == null) throw new Error("Callback is required!");

    if (node) {
      this.postOrder(callback, node.left);
      this.postOrder(callback, node.right);
      callback(node);
    }
  }

  height(node) {
    if (node == null) {
      return -1;
    }

    if (this.height(node.left) > this.height(node.right)) {
      return this.height(node.left) + 1;
    } else {
      return this.height(node.right) + 1;
    }
  }

  depth(node, root = this.root, dist = 0) {
    if (node == null) {
      return -1;
    }

    if (root == node) {
      return dist;
    }

    if (node.data < root.data) {
      dist = this.depth(node, root.left, dist + 1)
    } else {
      dist = this.depth(node, root.right, dist + 1);
    }

    return dist;
  }

  isBalanced(node = this.root) {
    let left = this.height(node.left) + 1;
    let right = this.height(node.right) + 1;

    if (left >= right) {
      var dif = left - right;
    } else {
      var dif = right - left;
    }

    return dif <= 1;
  }

  rebalance(node = this.root) {
    let array = [];

    this.inOrder((node) => {
      array.push(node.data);
    });

    this.root = this.buildTree(array);
    return this.root;
  }
}

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

export { Tree };
