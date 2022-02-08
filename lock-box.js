const prompt = require('prompt-sync')();

let pinCode = Number(prompt("Enter the correct pin code: "));

if (pinCode === 1234){
    console.log ("Success!");
}else{
    console.log("Failure!")
}