interface TreeNode {
    val: number;
    left: TreeNode | null;
    right: TreeNode | null;
}

const zigZagBinaryTree = (tree: TreeNode | null): number[][] => {
    if(!tree) {
        return [];
    }
    let parents = [tree];
    let directed = false;
    const finalResult: number[][] = []

    while(parents.length !== 0) {
        const children: any =  [];

        for(let i = 0;i < parents.length; i++) {
            if(parents[i]?.left) {
                if(!directed){
                    children.push(parents[i].left)
                } else {
                    children.unshift(parents[i].left)
                }
            }
            if(parents[i]?.right) {
                if(!directed) {
                    children.push(parents[i].right)
                } else {
                    children.unshift(parents[i].right)
                }
            }
        }
        finalResult.push(parents.map(parent => parent.val))
        parents = children;
        directed = !directed;
    }
    return finalResult 
}
