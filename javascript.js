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

const calcDisplay = document.querySelector("#display");
calcDisplay.textContent = displayText;

const buttons = document.querySelectorAll("button");
buttons.forEach((element) => {
    element.addEventListener("click", () => {
        buttonPressed = element.textContent;

        if(buttonPressed == "C"){
            firstNumber = 0;
            secondNumber = "";
            displayText = 0;
            mathOperator = "";
            calcDisplay.textContent = displayText;
            return;
        }else if(buttonPressed == "+/-"){
            if(mathOperator == ""){
                firstNumber = firstNumber * (-1);
                displayText = firstNumber;
                calcDisplay.textContent = displayText;
                return;
            }else{
                secondNumber = secondNumber * (-1);
                displayText = secondNumber;
                calcDisplay.textContent = displayText;
                return;
            }
        }else if(buttonPressed == "."){
            if(mathOperator == ""){
                if(firstNumber % 1 !== 0){
                    return;
                }else{
                    firstNumber += buttonPressed;
                    displayText += buttonPressed;
                    calcDisplay.textContent = displayText;
                    return;
                }
            }else{
                if(secondNumber % 1 !== 0){
                    return;
                }else{
                    secondNumber += buttonPressed;
                    displayText += buttonPressed;
                    calcDisplay.textContent = displayText;
                    return;
                }
            }
        }else if(buttonPressed == "/" || buttonPressed == "*" || buttonPressed == "-" || buttonPressed == "+"){
            mathOperator = buttonPressed;
            displayText = 0;
            return;
        }else if(buttonPressed == "="){
            if(mathOperator == ""){
                return;
            }else if(secondNumber == ""){
                displayText = operate(firstNumber,mathOperator,firstNumber);
                calcDisplay.textContent = displayText;
                firstNumber = displayText;
                mathOperator = "";
                secondNumber = "";
                return;
            }else{
                displayText = operate(firstNumber,mathOperator,secondNumber);
                calcDisplay.textContent = displayText;
                firstNumber = displayText;
                mathOperator = "";
                secondNumber = "";
                return;
            }
        }

        if(mathOperator == ""){
            if(displayText === 0){
                firstNumber = buttonPressed;
                displayText = buttonPressed;
            }else{
                firstNumber += buttonPressed;
                displayText += buttonPressed;
            }
            calcDisplay.textContent = displayText;
        }else{
            if(displayText === 0){
                secondNumber = buttonPressed;
                displayText = buttonPressed;
            }else{
                secondNumber += buttonPressed;
                displayText += buttonPressed;
            }
            calcDisplay.textContent = displayText;
        }
    })
})