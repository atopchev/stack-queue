// ============================================================================
// Implementation Exercise: Queue
// ============================================================================

const { Node } = require('../lib/node.js');

class Queue {
    constructor() {
        this.front = null;
        this.back = null;
        this.length = 0;
    }

    enqueue(val) {
        const newNode = new Node(val);
 
        if (!this.back) {
            [ this.front, this.back ] = [ newNode, newNode ];
        } else {
            this.back.next = newNode;
            this.back = newNode;
        }

        return ++this.length;
    }

    dequeue(){
        if (!this.front) return null; 

        let oldFront = this.front; 
        if (this.front === this.back) {
            [this.front, this.back] = [ null, null ];
        } else {
            this.front = oldFront.next;
        }

        this.length--;
        return oldFront.value;
    }

    size(){
        return this.length;
    }
};

exports.Queue = Queue;
