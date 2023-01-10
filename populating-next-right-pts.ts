import { Queue } from './utils';

type TreeNode<T> = {
    value: T;
    left: TreeNode<T> | null;
    right: TreeNode<T> | null;
    next?: TreeNode<T> | null;
} 

export const populate = <T>(node: TreeNode<T> | null): TreeNode<T> | null => {
    const queue = new Queue<TreeNode<T> | null>(node)
    const parentQueue = new Queue<TreeNode<T> | null>(node)
    let isLeft = true;

    while(queue.length) {
        const current = queue.dequeue() as TreeNode<T>;
        const currentParent = parentQueue.dequeue() as TreeNode<T>;

        if(!currentParent) {
            current.next = null;
        } else if(currentParent) {
            if(currentParent.next) {
                if(isLeft) {
                    current.next = currentParent.right;
                    isLeft = false
                } else {
                    current.next = currentParent.next.left;
                    isLeft = true;
                }
            } else {
                if(isLeft) {
                    current.next = currentParent.right;
                    isLeft = false;
                } else {
                    current.next = null;
                    isLeft = true
                }
            }
        }
        if(current.left) {
            queue.enqueue(current.left);
            parentQueue.enqueue(current);
        } else {
            queue.enqueue(current.right);
            parentQueue.enqueue(current);
        }
    }

    return node;
}


const node: TreeNode<number> = {
    value: 1,
    left: {
        value: -4,
        left: {
            value: 5,
            left: null,
            right: null
        },
        right: {
            value: -2,
            left: null,
            right: null
        }
    },
    right: {
        value: -3,
        left: {
            value: -2,
            left: null,
            right: null
        },
        right: {
            value: -5,
            left: null,
            right: null
        }
    }
}

populate(node)
