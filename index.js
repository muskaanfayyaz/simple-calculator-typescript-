#! /usr/bin/env node
//SHABANG 
import inquirer from "inquirer";
const answers = await inquirer.prompt([
    { message: "enter first number?", type: "number", name: "first" },
    { message: "enter second number?", type: "number", name: "second" },
    {
        message: "enter operation?",
        type: "list",
        name: "operation",
        choices: ["add", "sub", "mul", "div"]
    }
]);
//conditional statement
if (answers.operation === "add") {
    console.log("your value after addition is", answers.first + answers.second);
}
else if (answers.operation === "sub") {
    console.log("your value after subtraction is", answers.first - answers.second);
}
else if (answers.operation === "mul") {
    console.log("your value after multiplication is", answers.first * answers.second);
}
else if (answers.operation === "div") {
    console.log(" your value after division is", answers.first / answers.second);
}
else {
    console.log("invalid operation");
}
