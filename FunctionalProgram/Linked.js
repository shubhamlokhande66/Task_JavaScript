class LinkedList {
    constructor() {
        this.head = {
            value: 0,
            next: null
        };
        this.tail = this.head;
        this.length = 1;
    }

    append(value) {
        const newNode = {
          value: value,
          next: null
        }
        this.tail.next = newNode;
        this.tail = newNode;
        this.length++;
        console.log(JSON.stringify(newNode))
        return this;
    }

    prepend(value) {
        const newNode = {
          value: value,
          next: null
        }
        newNode.next = this.head;
        this.head = newNode;
        this.length++;
        console.log(JSON.stringify(newNode))
        return this;
    }

    printList() {
        const array = [];
        let currentNode = this.head;
        while(currentNode !== null){
            array.push(currentNode.value)
            currentNode = currentNode.next
        }
        console.log(JSON.stringify(array))
        return array;
      }
      Search(value) {
        let curr = head;
        let found = undefined;
        while (curr) {
          if (curr.value === value) {
            found = curr;
            break;
          }
          curr = curr.next;
       }
       return found;
  }
  
}

module.exports = new Linked