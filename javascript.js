function calcAdd(num1, num2){
    let sum = Number(num1) + Number(num2);
    return (sum);
}

function calcSubtract(num1, num2){
    return (num1 - num2);
}

function calcMultiply(num1, num2){
    return (num1 * num2);
}

function calcDivide(num1, num2){
    return (num1 / num2);
}

let x = prompt("Input first number: ");
let y = prompt("Input second number: ");

console.log("Add: " + x + " + " + y + " = " + calcAdd(x,y));
console.log("Subtract: " + x + " - " + y + " = " + calcSubtract(x,y));
console.log("Multiply: " + x + " * " + y + " = " + calcMultiply(x,y));
console.log("Divide: " + x + " / " + y + " = " + calcDivide(x,y));