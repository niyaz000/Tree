class Node {
	constructor(public data: number, public left: Node = null, public right: Node = null) {
  	this.data = data;
    this.left = left;
    this.right = right;
  }
}

const levelOrderTraversal = (root: Node) => {
	if(root == null) {
  	return;
  }
  let currentLevel = [root];
  while(currentLevel.length != 0) {
    let nextLevel = [], str = "";
    currentLevel.forEach(item => {
      str += item.data.toString() + " ";
      if(item.left != null) {
        nextLevel.push(item.left);    
      }
      if(item.right != null) {
        nextLevel.push(item.right);    
      }
    });
    console.log(str);
    currentLevel = nextLevel;
  }
}

let root = new Node(1, new Node(2, new Node(4), new Node(5)), new Node(3, new Node(6), new Node(7)));
levelOrderTraversal(root);
