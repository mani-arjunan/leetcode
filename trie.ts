class TrieNode {
    value: string | null;
    children: Array<TrieNode>;
    isWord: boolean;

    constructor(val: string | null = null) {
        this.value = val;
        this.isWord = false;
        this.children = new Array(26).fill(null)
    }
}

const getCharIndex = (str: string): number => {
    const zero = "a".charCodeAt(0);

    return str.charCodeAt(0) - zero;
}

class Trie {
    root: TrieNode

    constructor() {
        this.root = new TrieNode()
    }

    insert(str: string): void {
        let current = this.root;

        for(let i = 0;i < str.length;i++) {
            const children = current.children;
            const charIndex = getCharIndex(str[i]);
            if(!children[charIndex]) {
                children[charIndex] = new TrieNode(str[i])
            }
            current = children[charIndex]
        }
        current.isWord = true;
    }

    search(str: string): boolean {
        let current = this.root

        for(let i = 0;i < str.length;i++) {
            const children = current.children;
            const charIndex = getCharIndex(str[i])

            if(!children[charIndex]) {
                return false;
            }
            current = children[charIndex]
        }

        return current.isWord;
    }
    
    startsWith(str: string): boolean {
        let current = this.root;

        for(let i = 0;i< str.length;i++) {
            const children = current.children;
            const charIndex = getCharIndex(str[i])

            if(!children[charIndex]) {
                return false
            }
            current = children[charIndex];
        }

        return true
    }
}
