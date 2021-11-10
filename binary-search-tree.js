class Node {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

class BinarySearchTree {
  constructor(root = null) {
    this.root = root;
  }

  /** insert(val): insert a new node into the BST with value val.
   * Returns the tree. Uses iteration. */

  insert(val) {
    let newNode = new Node(val);

    if (!this.root) {
      this.root = newNode;
      return this;
    }
    let toVisit = [this.root];

    while (toVisit.length) {
      let alreadyInTreeNode = toVisit.pop();

      if (val < alreadyInTreeNode.val) {
        if (!alreadyInTreeNode.left) {
          alreadyInTreeNode.left = newNode;
          return this;
        } else {
          toVisit.push(alreadyInTreeNode.left);
        }
      } else {
          if (!alreadyInTreeNode.right) {
            alreadyInTreeNode.right = newNode;
            return this;
          } else {
            toVisit.push(alreadyInTreeNode.right);
          }
      }
    };
  }

  /** insertRecursively(val): insert a new node into the BST with value val.
   * Returns the tree. Uses recursion. */

  insertRecursively(val) {
    let newNode = new Node(val);
    if (!this.root) {
      this.root = newNode;
      return this;
    };

    const recursiveInsert = (node, val) => {
      if (val < node.val) {
        if (!node.left) {
          node.left = newNode;
          return this;
        } else {
          recursiveInsert(node.left, val);
        };
      } else {
        if (!node.right) {
          node.right = newNode;
          return this;
        } else {
          recursiveInsert(node.right, val);
        }
      }
    };
    return recursiveInsert(this.root, val);
  }

  /** find(val): search the tree for a node with value val.
   * return the node, if found; else undefined. Uses iteration. */

  find(val) {
    if (!this.root) return undefined;
    let toVisit = [this.root];

    while (toVisit.length) {
      let currentNode = toVisit.shift();
      if (!currentNode) return undefined;
      if (currentNode.val === val) return currentNode;
      if (currentNode.val > val) toVisit.push(currentNode.left);
      else toVisit.push(currentNode.right);
    }
  }

  /** findRecursively(val): search the tree for a node with value val.
   * return the node, if found; else undefined. Uses recursion. */

  findRecursively(val) {
    if (!this.root) return undefined;
    const recursiveFind = (node, val) => {
      if (!node) return undefined;
      if (node.val === val) return node;
      if (node.val > val) return recursiveFind(node.left, val);
      else return recursiveFind(node.right, val);
    };
    return recursiveFind(this.root, val);
  }

  /** dfsPreOrder(): Traverse the array using pre-order DFS.
   * Return an array of visited nodes. */

  dfsPreOrder() {
    let data = [];
    const traverse = (node, data) => {
      data.push(node.val);
      if (node.left) traverse(node.left, data);
      if (node.right) traverse(node.right, data);
    };
    traverse(this.root, data);
    return data;
  }

  /** dfsInOrder(): Traverse the array using in-order DFS.
   * Return an array of visited nodes. */

  dfsInOrder() {
    let data = [];
    const traverse = (node, data) => {
      if (node.left) traverse(node.left, data);
      data.push(node.val);
      if (node.right) traverse(node.right, data);
    };
    traverse(this.root, data);
    return data;
  }

  /** dfsPostOrder(): Traverse the array using post-order DFS.
   * Return an array of visited nodes. */

  dfsPostOrder() {
    let data = [];
    const traverse = (node, data) => {
      if (node.left) traverse(node.left, data);
      if (node.right) traverse(node.right, data);
      data.push(node.val);
    };
    traverse(this.root, data);
    return data;
  }

  /** bfs(): Traverse the array using BFS.
   * Return an array of visited nodes. */

  bfs() {
    let queue = [this.root];
    let visited = [];

    while (queue.length) {
      let currentNode = queue.shift();
      visited.push(currentNode.val);
      if (currentNode.left) queue.push(currentNode.left);
      if (currentNode.right) queue.push(currentNode.right);
    };
    return visited;
  }

  /** Further Study!
   * remove(val): Removes a node in the BST with the value val.
   * Returns the removed node. */

  remove(val) {

  }

  /** Further Study!
   * isBalanced(): Returns true if the BST is balanced, false otherwise. */

  isBalanced() {

  }

  /** Further Study!
   * findSecondHighest(): Find the second highest value in the BST, if it exists.
   * Otherwise return undefined. */

  findSecondHighest() {
    
  }
}

module.exports = BinarySearchTree;
