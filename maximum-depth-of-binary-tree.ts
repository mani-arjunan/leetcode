interface TreeNode {
    val: number;
    left: TreeNode | null;
    right: TreeNode | null;
}

const maxDepthOfBinaryTree = (root: TreeNode | null): number => {
    if(!root) {
        return 0;
    }
    //I Performed Postorder traversal
    const left = maxDepthOfBinaryTree(root.left);
    const right = maxDepthOfBinaryTree(root.right);

    // Adding +1 to include root node count;
    return left > right ? left + 1 : right + 1;
}
