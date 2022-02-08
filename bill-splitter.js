const prompt = require('prompt-sync')();

let total = Number(prompt("Enter the bill total: $"));

if ((total / 2) >= 0){
    console.log( "Person 1 will pay $" + total/2 + " of the bill.");
}else ((total / 2) >= 0);{
    console.log( "Person 2 will pay $" + total/2 + " of the bill.");
}