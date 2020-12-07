const prompt = require('prompt-sync')();
const stack  = require('../FunctionalProgram/Stack');
{
    let choice = prompt("Enter choice: ")
        switch(choice) {
    case "1":
        while(true) {
            console.log("Select a Stack Operation to perform")
            console.log("1. Push")
            console.log("2. POP")
            console.log("3. PrintStack")
            console.log("enter 0 to exit")
            let operation = prompt("Eenter choice: ")
            switch(operation){
                case "1":
                    let value = prompt("Enter Value to Push: ")
                    stack.push(value)
                    break;
                case "2":
                    console.log(stack.pop())
                    break;
                case "3":
                    console.log(stack.printStack())
                    break;
                default:
                    break;
            }
            if(operation == 0) break;
        }
        break;
        
    }
}
    