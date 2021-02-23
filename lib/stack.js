// ============================================================================
// Implementation Exercise: Stack
//
// Prompt: Implement a Stack and all of its methods below.
//
// ============================================================================



class Node {
    constructor(val) {
        this.value = val;
        this.next = null;
    }
}

class Stack {
    constructor() {
        this.stack = [];
        this.size = 0;
    }
    
    push(){

    }

    pop(){

    }

    size(){
        return this.size;
    }
}

exports.Node = Node;
exports.Stack = Stack;
