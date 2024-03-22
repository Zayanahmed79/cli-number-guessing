#! /usr/bin/env node 
import inquirer from "inquirer";
//Steps for making a Program:-
//1. Computer will generate a random number.
//2. User input for guessing number.
//3. Compare User input with Computer generated number.
const randomnumber = Math.floor(Math.random() * 6 + 1);
const answer = await inquirer.prompt([
    {
        type: "number",
        name: "userguessnumber",
        message: "Please guess a number between 1-10:",
    },
]);
if (answer.userguessnumber === randomnumber) {
    console.log("Congratulations you guessed Right number");
}
else {
    console.log("You gessed wrong number");
}
