class Node {
  constructor(public data: number, public left: Node = null, public right: Node = null) {
    this.data = data;
    this.left = left;
    this.right = right;
  }
}

const insertInLevelOrder = (root: Node, data: number) => {
  if (root == null) {
    return;
  }
  let currentLevel = [root];
  while (currentLevel.length != 0) {
    let nextLevel = []
    for (let i = 0; i < currentLevel.length; ++i) {
      if (currentLevel[i].left == null) {
        currentLevel[i].left = new Node(data);
        return;
      } else {
        nextLevel.push(currentLevel[i].left);
      }
      if (currentLevel[i].right == null) {
        currentLevel[i].right = new Node(data);
        return;
      } else {
        nextLevel.push(currentLevel[i].right);
      }
    }
    currentLevel = nextLevel;
  }
}

let root = new Node(1, new Node(2, new Node(4), new Node(5)), new Node(3, new Node(6), new Node(7)));
insertInLevelOrder(root, 8);
insertInLevelOrder(root, 9);
insertInLevelOrder(root, 10);
insertInLevelOrder(root, 11);
insertInLevelOrder(root, 12);
insertInLevelOrder(root, 13);
insertInLevelOrder(root, 14);
insertInLevelOrder(root, 15);
