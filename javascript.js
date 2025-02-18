let firstNumber = 0;
let mathOperator = "";
let secondNumber = 0;
let displayText = 11037;

function operate(num1, operation, num2){
    if(operation == "+"){
        return calcAdd(num1,num2);
    }else if(operation == "-"){
        return calcSubtract(num1,num2);
    }else if(operation == "*"){
        return calcMultiply(num1,num2);
    }else if(operation == "/"){
        return calcDivide(num1,num2);
    }else{
        return "Uh oh, that's not supposed to happen..."
    }
}

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

firstNumber = prompt("Input first number: ");
secondNumber = prompt("Input second number: ");

console.log("Add: " + firstNumber + " + " + secondNumber + " = " + operate(firstNumber,"+",secondNumber));
console.log("Subtract: " + firstNumber + " - " + secondNumber + " = " + operate(firstNumber,"-",secondNumber));
console.log("Multiply: " + firstNumber + " * " + secondNumber + " = " + operate(firstNumber,"*",secondNumber));
console.log("Divide: " + firstNumber + " / " + secondNumber + " = " + operate(firstNumber,"/",secondNumber));

const calcDisplay = document.querySelector("#display");
calcDisplay.textContent = displayText;