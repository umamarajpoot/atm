#! /usr/bin/env node

import inquirer from "inquirer";

let mybalance =50000;
let myPin = 22334455;


console.log("Wellcome to Al Habib Bank ATM!");

let pinAnswer = await inquirer.prompt(
    [
        {
            name:"pin",
            message:"enter your pin",
            type:"number",
        }
    ]
)
if (pinAnswer.pin === myPin){
    
    console.log("Corresct pin code!!!");

    let operationAns = await inquirer.prompt(
        [{
            name: "operation",
            message: "please select option",
            type: "list",
            choices: ["withdraw","check balance"]
        }]
    );
    if(operationAns.operation === "withdrraw"){
        let amountAns = await inquirer.prompt(
            [{
                name: "amount",
                message: "enter your amount",
                type: "number",
            }]
        );
        mybalance -= amountAns.amount
        console.log("your remaing balance is: "+ mybalance)
       
    }
else if (operationAns.operation === "check balance"){
    console.log("yourbalance is:" + mybalance)
}
    else {
        console.log("Incorrect pin number");
    }
}
 

   