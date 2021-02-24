# Stack Implementation
This project includes 100% test coverage. Tests belongs to App Academy.

Contains three classes, Node, Stack, and Queue. 

  ```js
  class Node {
    constructor(val) {
        this.value = val;
        this.next = null;
    }
}
```
   
```js
  class Stack {
    constructor() {
        this.top = null;
        this.bottom = null;
        this.length = 0;
    }
    
    push(val){
        let newNode = new Node(val);
        if (!this.top) {
            [ this.top, this.bottom ] = [ newNode, newNode ];
        } else {
            const oldTop = this.top;
            this.top = newNode;
            this.top.next = oldTop;
        }
        
        return ++this.length;
    }

    pop(){
        if (!this.top) return null;

        const oldTop = this.top;
        if (this.top === this.bottom) {
            [ this.top, this.bottom ] = [ null, null ];
        } else {
            this.top = oldTop.next;
        }
        this.length--;
        return oldTop.value;
    }

    size(){
        return this.length;
    }
  ```
