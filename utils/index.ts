interface QueueInterface<T> {
    enqueue(item: T): void;
    peek(): T | undefined;
    dequeue(): T | undefined;
    length: number;
}

export type Node<T> = {
    value: T;
    next?: Node<T> | null;
}

export class Queue<T> implements QueueInterface<T> {
    public length: number;
    private head?: Node<T> | null;
    private tail?: Node<T> | null;

    constructor(value: T) {
        this.head = {
            value,
            next: null
        }
        this.tail = this.head;
        this.length = 1;
    }

    enqueue(value: T): void {
        const node: Node<T> = {
            value,
            next: null 
        };
        if(!this.tail) {
            this.tail = this.head = node;
        } else if(this.tail) {
            this.tail.next = node;
            this.tail = node;
        }
        this.length ++;
    }

    dequeue(): T | undefined {
        const head = this.head;

        if(this.head) {
            this.head = (this.head.next as Node<T>);
            this.length--;
            if(this.length === 0){
                this.tail = null;
            }   
            return head?.value;
        }

        return head?.value;
    }

    peek(): T | undefined {
        return this.head?.value;
    }
}
