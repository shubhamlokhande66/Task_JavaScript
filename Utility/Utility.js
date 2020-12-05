const prompt = require('prompt-sync')();
const stack  = require('./FunctionalProgram/Stack');
let linkedList = require('./FunctionalProgram/Linked');
{
    while(true) {
        console.log("Data Structure List: ")
        console.log("1. Stack")
        console.log("2. Linked List")
        console.log("enter 0 to exit")
        let choice = prompt("Eenter choice: ")
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
                            let value = prompt("Eenter Value to Push: ")
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
        
            case "2":
                while(true) {
                    console.log("Select a Linked List Operation to perform")
                    console.log("1. Add Node at Front")
                    console.log("2. Add Mpde at Last")
                    console.log("3. DisplayList")
                    console.log("4. Serach Element")
                    console.log("enter 0 to exit")
                    let loperation = prompt("Eenter choice: ")
                    let counter = 1
                    switch(loperation){
                        case "1":
                            let lvalue = Number(prompt("Eenter Value to Add Node at Front: "))
                            linkedList.append(lvalue)
                            break;
                        case "2":
                            let lvalue1 = Number(prompt("Eenter Value to Add Mpde at Last: "))
                            linkedList.prepend(lvalue1)
                            break;
                        case "3":
                            linkedList.DisplayList()
                            break;
                        case "4":
                            let lvalue2 = Number(prompt("Eenter Value to Serach Element: "))
                            linkedList.Search(lvalue2)
                            break;
                        default:
                            break;
                    }
                    if(loperation == 0) break;
                }
                break;
        }
        if(choice ==0 ) break;
    }  
}