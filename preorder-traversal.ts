type Tree = {
    val: number;
    left: Tree | null;
    right: Tree | null;
}

const preorderTraversal = (root: Tree | null, arr: Array<number> = []): Array<number> | undefined => {
    const obj: Tree = JSON.parse(JSON.stringify(root))
    if(!obj && arr.length === 0) {
        return []
    }
    if(!obj) {
        return
    }

    arr.push(obj.val);

    preorderTraversal(obj.left, arr);
    preorderTraversal(obj.right, arr);

    return arr
};
