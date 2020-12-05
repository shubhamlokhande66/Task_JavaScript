class Stack { 
    constructor() { 
        this.stack = []; 
    }
    push(element) { 
        this.stack.push(element); 
    }
    pop() { 
        if (this.stack.length == 0) 
            return "Underflow"; 
        return this.stack.pop(); 
    }
    printStack() { 
        let stackstr = ""; 
        for (let i = 0; i < this.stack.length; i++) 
            stackstr += this.stack[i] + " "; 
        return stackstr; 
    }  
}

module.exports = new Stack