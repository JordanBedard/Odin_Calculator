// Initialize 
const maxDigitNumbers = 10;
let inputNumber = "";
let firstNumberOperation = "";
let operator = "";
let secondNumberOperation = "";
let resultOperation = 0;
let isFloatNumber = false;
let isNegativeNumber = false;
displayMainCalculatorValues("0");

function initialize() {
    resultOperation = 0;
    inputNumber = "";
    firstNumberOperation = ""
    operator = "";
    secondNumberOperation = "";
    isFloatNumber = false;
    isNegativeNumber = false;
    displayUpperCalculatorValues("", "");
    displayMainCalculatorValues("0");
}

// Main display of values in the main area of the calculator 
function displayMainCalculatorValues(value) {
    const display = document.querySelector(".calculatorDisplay");
    display.textContent = value;
}

// Secondary display of values used in operation in the upper area of the calculator
function displayUpperCalculatorValues(value, operator) {
    const display = document.querySelector(".calculatorSecondDisplay");
    display.textContent = `${value}${operator}`;
}

// Clear Calculator
const clear = document.querySelector('.clear');
clear.addEventListener("click", initialize);

document.addEventListener("keydown", function (event) {
    if (event.key === "Delete") {
        initialize();
    }
});

function resetDecimalandNegativeSigns() {
    isFloatNumber = false;
    isNegativeNumber = false;
}

// Erase 
const erase = document.querySelector('.erase');
erase.addEventListener('click', removeLastDigitFromString);

document.addEventListener("keydown", function (event) {
    if (event.key === "Backspace") {
        removeLastDigitFromString();
    }
});

function removeLastDigitFromString() {
    inputNumber = inputNumber.slice(0, -1);
    displayMainCalculatorValues(inputNumber);
}

// Decimal Sign
const decimalSign = document.querySelector('.decimal')
decimalSign.addEventListener("click", handleDecimalSign);

document.addEventListener("keydown", function (event) {
    if (event.key === ".") {
        handleDecimalSign();
    }
});

function handleDecimalSign() {
    if (!isFloatNumber) {
        let isDecimalPointExists = false;
        if (inputNumber.includes(".") === true) {
            isDecimalPointExists = true;
        }   
        if (!isDecimalPointExists) {
            inputNumber = `${inputNumber}${"."}`;
            isFloatNumber = true;
        }
    } else if (isFloatNumber) {
        const decimalPoint = inputNumber.charAt(inputNumber.length - 1);
        if (decimalPoint === ".") {
            inputNumber = inputNumber.slice(0,-1);
            isFloatNumber = false; 
        }
    }
    displayMainCalculatorValues(inputNumber); 
}

// Negative Sign
const negativeSign = document.querySelector('.negative')
negativeSign.addEventListener("click", handleNegativeSign);

function handleNegativeSign() {
    const firstSignString = inputNumber.charAt(0);
    if (!isNegativeNumber && firstSignString !== "-" || !isNegativeNumber && firstSignString === " ") {
        inputNumber = `${"-"}${inputNumber}`;
        isNegativeNumber = true;
    } else if (isNegativeNumber && firstSignString === "-") {
        inputNumber = inputNumber.slice(1);
        isNegativeNumber = false;
    }
    displayMainCalculatorValues(inputNumber);
}

// Operators

// Plus Sign
const plusSign = document.querySelector('.plusSign')
plusSign.addEventListener("click", handlePlusSign);

document.addEventListener("keydown", function (event) {
    if (event.key === "+") {
        handlePlusSign();
    }
});

function handlePlusSign() {
    operator = "+";
    if (firstNumberOperation === "") {
        firstNumberOperation = formatingNumbers(inputNumber);
    } else if (firstNumberOperation !== "") {
        if (inputNumber !== "") {
            secondNumberOperation = formatingNumbers(inputNumber);
            operate(firstNumberOperation, operator, secondNumberOperation);
        }
    }
    inputNumber = "";
    resetDecimalandNegativeSigns();
    displayUpperCalculatorValues(firstNumberOperation, operator);
}

// Minus Sign
const minusSign = document.querySelector('.minusSign')
minusSign.addEventListener("click", handleMinusSign);

document.addEventListener("keydown", function (event) {
    if (event.key === "-") {
        handleMinusSign();
    }
});

function handleMinusSign() {
    operator = "-";
    if (firstNumberOperation === "") {
        firstNumberOperation = formatingNumbers(inputNumber);
    } else if (firstNumberOperation !== "") {
        if (inputNumber !== "") {
            secondNumberOperation = formatingNumbers(inputNumber);
            operate(firstNumberOperation, operator, secondNumberOperation);
        }
    }
    inputNumber = "";
    resetDecimalandNegativeSigns();
    displayUpperCalculatorValues(firstNumberOperation, operator);
}

// Multiply Sign
const multiplySign = document.querySelector('.multiplySign')
multiplySign.addEventListener("click", handleMultiplySign);

document.addEventListener("keydown", function (event) {
    if (event.key === "*") {
        handleMultiplySign();
    }
});

function handleMultiplySign() {
    operator = "*";
    if (firstNumberOperation === "") {
        firstNumberOperation = formatingNumbers(inputNumber);
    } else if (firstNumberOperation !== "") {
        if (inputNumber !== "") {
            secondNumberOperation = formatingNumbers(inputNumber);
            operate(firstNumberOperation, operator, secondNumberOperation);
        }
    }
    inputNumber = "";
    resetDecimalandNegativeSigns();
    displayUpperCalculatorValues(firstNumberOperation, operator);
}

// Divise Sign
const divideSign = document.querySelector('.divideSign')
divideSign.addEventListener("click", handleDivideSign);

document.addEventListener("keydown", function (event) {
    if (event.key === "/") {
        handleDivideSign();
    }
});

function handleDivideSign() {
    operator = "/";
    if (firstNumberOperation === "") {
        firstNumberOperation = formatingNumbers(inputNumber);
    } else if (firstNumberOperation !== "") {
        if (inputNumber !== "") {
            secondNumberOperation = formatingNumbers(inputNumber);
            operate(firstNumberOperation, operator, secondNumberOperation);
        }
    }
    inputNumber = "";
    resetDecimalandNegativeSigns();
    displayUpperCalculatorValues(firstNumberOperation, operator);
}

// Equals Sign
const equalsSign = document.querySelector('.equalsSign')
equalsSign.addEventListener("click", handleEqualsSign);
    
document.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
        handleEqualsSign();
    }
});

function handleEqualsSign() {
    if (firstNumberOperation !== "") {
        secondNumberOperation = formatingNumbers(inputNumber);
    }
    if ( secondNumberOperation !== "" && inputNumber !== "") {
        operate(firstNumberOperation, operator, secondNumberOperation);
        displayUpperCalculatorValues(firstNumberOperation, operator);
    }
}

// Formating variables 
function formatingNumbers(value) {
    if (value.includes(".") === true) {
        return value = parseFloat(value);
    } else {
        return value = parseInt(value);
    }
};

// Function to do mathematical operations
function operate(firstValue, operatorSign, secondValue) {
    let error;
    if (operatorSign === "+") {
        resultOperation = firstValue + secondValue;
    } else if (operatorSign === "-") {
        resultOperation = firstValue - secondValue;
    } else if (operatorSign === "*") {
        resultOperation = firstValue * secondValue;
    } else if (operatorSign === "/") {
        if (firstValue !== 0 && secondValue !== 0) {
            resultOperation = firstValue / secondValue;
        } else if (firstValue === 0 && secondValue === 0) {
            error = "Error. Please use Clear."
        }
    }
    clearOperationalNumbers();
    firstNumberOperation = resultOperation;
    displayMainCalculatorValues(error || resultOperation);
}

// Clear oprational numbers
function clearOperationalNumbers() {
    firstNumberOperation = "";
    inputNumber = "";
    secondNumberOperation = "";
    isFloatNumber = false;
    isNegativeNumber = false;
}

// Numbers Inputs 
const numberZero = document.querySelector('.zero');
numberZero.addEventListener("click", handleNumberZero);

document.addEventListener("keydown", function (event) {
    if (event.key === "0") {
        handleNumberZero();
    }
});

function handleNumberZero() {
    if (inputNumber.length < maxDigitNumbers) {
        inputNumber = `${inputNumber}${"0"}`;
    }
    displayMainCalculatorValues(inputNumber);
}

const numberOne = document.querySelector('.one');
numberOne.addEventListener("click", handleNumberOne);

document.addEventListener("keydown", function (event) {
    if (event.key === "1") {
        handleNumberOne();
    }
});

function handleNumberOne() {
    if (inputNumber.length < maxDigitNumbers) {
        inputNumber = `${inputNumber}${"1"}`;
    }
    displayMainCalculatorValues(inputNumber);
}

const numberTwo = document.querySelector('.two');
numberTwo.addEventListener("click", handleNumberTwo);

document.addEventListener("keydown", function (event) {
    if (event.key === "2") {
        handleNumberTwo();
    }
});

function handleNumberTwo() {
    if (inputNumber.length < maxDigitNumbers) {
        inputNumber = `${inputNumber}${"2"}`;
    }
    displayMainCalculatorValues(inputNumber);
}

const numberThree = document.querySelector('.three');
numberThree.addEventListener("click", handleNumberThree);

document.addEventListener("keydown", function (event) {
    if (event.key === "3") {
        handleNumberThree();
    }
});

function handleNumberThree() {
    if (inputNumber.length < maxDigitNumbers) {
        inputNumber = `${inputNumber}${"3"}`;
    }
    displayMainCalculatorValues(inputNumber);
}

const numberFour = document.querySelector('.four');
numberFour.addEventListener("click", handleNumbeFour);

document.addEventListener("keydown", function (event) {
    if (event.key === "4") {
        handleNumbeFour();
    }
});

function handleNumbeFour() {
    if (inputNumber.length < maxDigitNumbers) {
        inputNumber = `${inputNumber}${"4"}`;
    }
    displayMainCalculatorValues(inputNumber);
}

const numberFive = document.querySelector('.five');
numberFive.addEventListener("click", handleNumberFive);

document.addEventListener("keydown", function (event) {
    if (event.key === "5") {
        handleNumberFive();
    }
});

function handleNumberFive() {
    if (inputNumber.length < maxDigitNumbers) {
        inputNumber = `${inputNumber}${"5"}`;
    }
    displayMainCalculatorValues(inputNumber);
}

const numberSix = document.querySelector('.six');
numberSix.addEventListener("click", handleNumberSix);

document.addEventListener("keydown", function (event) {
    if (event.key === "6") {
        handleNumberSix();
    }
});

function handleNumberSix() {
    if (inputNumber.length < maxDigitNumbers) {
        inputNumber = `${inputNumber}${"6"}`;
    }
    displayMainCalculatorValues(inputNumber);
}

const numberSeven = document.querySelector('.seven');
numberSeven.addEventListener("click", handleNumberSeven);

document.addEventListener("keydown", function (event) {
    if (event.key === "7") {
        handleNumberSeven();
    }
});

function handleNumberSeven() {
    if (inputNumber.length < maxDigitNumbers) {
        inputNumber = `${inputNumber}${"7"}`;
    }
    displayMainCalculatorValues(inputNumber);
}

const numberEight = document.querySelector('.eight');
numberEight.addEventListener("click", handleNumberEight);

document.addEventListener("keydown", function (event) {
    if (event.key === "8") {
        handleNumberEight();
    }
});

function handleNumberEight() {
    if (inputNumber.length < maxDigitNumbers) {
        inputNumber = `${inputNumber}${"8"}`;
    }
    displayMainCalculatorValues(inputNumber);
}

const numberNine = document.querySelector('.nine');
numberNine.addEventListener("click", handleNumberNine);

document.addEventListener("keydown", function (event) {
    if (event.key === "9") {
        handleNumberNine();
    }
});

function handleNumberNine() {
    if (inputNumber.length < maxDigitNumbers) {
        inputNumber = `${inputNumber}${"9"}`;
    }
    displayMainCalculatorValues(inputNumber);
}