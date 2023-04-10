// Initialize
let numberDigitsOperation = 10;
let isFloatNumber = false;
let isNegativeNumber = false;
let operationArray = [];
let numberArray = [];

function initialize() {
    numberArray.length = 0;
    operationArray.length = 0;
    isFloatNumber = false;
    isNegativeNumber = false;
    display(numberArray);
}

// Display 
function display(array) {
    let display = document.querySelector(".calculatorDisplay");
    display.textContent = array;
    display.textContent = display.textContent.split(',').join('');
    return;
}

// Clear 

// Page consultée pour comprendre pourquoi quand j'utilisais "keypress", le script ne détectait pas l'utilisation du backspace ou delete button sur le keyboard, ce qui amena un changement à "keydown" dans le Event Listener pour que ça fonctionne : https://stackoverflow.com/questions/4843472/javascript-listener-keypress-doesnt-detect-backspace

let clear = document.querySelector('.clear');
clear.addEventListener("click", initialize);

document.addEventListener("keydown", function (event) {
    if (event.key === "Delete") {
        initialize();
    }
});

// Clear array 
function clearArray(array) {
    array.length = 0;
    isFloatNumber = false;
    isNegativeNumber = false;
}

// Erase last digit 
let erase = document.querySelector('.erase');
erase.addEventListener('click', removeLastDegitfromArray);

function removeLastDegitfromArray() {
    numberArray.pop();
    display(numberArray);
}

document.addEventListener("keydown", function (event) {
    if (event.key === "Backspace") {
        removeLastDegitfromArray();
    }
});

// Decimal Sign

// Site pour idée de solution afin d'enlever efficacement le decimal point quand le numéro est un Float Number : https://stackoverflow.com/questions/43108843/how-to-remove-character-from-last-array-element  

let decimalSign = document.querySelector('.decimal')
decimalSign.addEventListener("click", getDecimalSign);

document.addEventListener("keydown", function (event) {
    if (event.key === ".") {
        getDecimalSign();
    }
});

function getDecimalSign() {
    if (!isFloatNumber) {
        let isDecimalPointExists = false;
        for (let i = 0; i < numberArray.length; i++) {
            if (numberArray[i] === ".") {
                isDecimalPointExists = true;
                break;
            }
        }
        if (!isDecimalPointExists) {
            numberArray.push(".");
            isFloatNumber = true;
        }
    } else if (isFloatNumber) {
        let decimalPoint = numberArray[numberArray.length - 1];
        if (decimalPoint === ".") {
            numberArray.pop();
            isFloatNumber = false;
        }
    }
    formatingArrayNumbers(numberArray);
    display(numberArray);
}

// Negative Sign
let negativeSign = document.querySelector('.negative')
negativeSign.addEventListener("click", getNegativeSign);

function getNegativeSign() {
    let firstSignArray = numberArray[0];
    if (!isNegativeNumber && firstSignArray !== "-" || !isNegativeNumber && firstSignArray === " ") {
        numberArray.unshift("-");
        isNegativeNumber = true;
    } else if (isNegativeNumber && firstSignArray === "-") {
        numberArray.shift();
        isNegativeNumber = false;
    }
    formatingArrayNumbers(numberArray);
    display(numberArray);
}

// Formating Array 

function formatingArrayNumbers(array) {
    if (isFloatNumber === false) {
        let concatenatedArrayValues = array.join('');
        let formatedArray = parseInt(concatenatedArrayValues);
        return formatedArray;
    } else if (isFloatNumber === true) {
        let concatenatedArrayValues = array.join('');
        let formatedArray = parseFloat(concatenatedArrayValues);
        return formatedArray;
    }
};

// Operators 
// Plus Sign
let plusSign = document.querySelector('.plusSign')
plusSign.addEventListener("click", getPlusSign);

document.addEventListener("keydown", function (event) {
    if (event.key === "+") {
        getPlusSign();
    }
});

function getPlusSign() {
    let formatedNumbersArray = formatingArrayNumbers(numberArray);
    operationArray.push(formatedNumbersArray);
    operationArray.push("+");
    clearArray(numberArray);
}

// Minus Sign
let minusSign = document.querySelector('.minusSign')
minusSign.addEventListener("click", getMinusSign);

document.addEventListener("keydown", function (event) {
    if (event.key === "-") {
        getMinusSign();
    }
});

function getMinusSign() {
    let formatedNumbersArray = formatingArrayNumbers(numberArray);
    operationArray.push(formatedNumbersArray);
    operationArray.push("-");
    clearArray(numberArray);
}

// Multiply Sign 
let multiplySign = document.querySelector('.multiplySign')
multiplySign.addEventListener("click", getMultiplySign);

document.addEventListener("keydown", function (event) {
    if (event.key === "*") {
        getMultiplySign();
    }
});

function getMultiplySign() {
    let formatedNumbersArray = formatingArrayNumbers(numberArray);
    operationArray.push(formatedNumbersArray);
    operationArray.push("*");
    clearArray(numberArray);
}

// Divide Sign
let divideSign = document.querySelector('.divideSign')
divideSign.addEventListener("click", getDivideSign);

document.addEventListener("keydown", function (event) {
    if (event.key === "/") {
        getDivideSign();
    }
});

function getDivideSign() {
    let formatedNumbersArray = formatingArrayNumbers(numberArray);
    operationArray.push(formatedNumbersArray);
    operationArray.push("/");
    clearArray(numberArray);
}

// Equals - Order of operations? Peut-être utiliser Mapping Method pour les calculs faits dans un array? 

let equalsSign = document.querySelector('.equalsSign')
equalsSign.addEventListener("click", operate);

document.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
        operate();
    }
});

// À retravailler +++ 

function operate(firstNumber, operator, secondNumber) {
    let formatedNumbersArray = formatingArrayNumbers(numberArray);
    operationArray.push(formatedNumbersArray);
    clearArray(numberArray);
    firstNumber = operationArray[0];
    operator = operationArray[1];
    secondNumber = operationArray[2];
    if (operator === "+") {
        result = firstNumber + secondNumber;
        clearArray(operationArray);
        operationArray.push(result);
        display(operationArray);
        return result;
    } else if (operator === "-") {
        let result = firstNumber - secondNumber;
        clearArray(operationArray);
        operationArray.push(result);
        display(operationArray);
        return result;
    } else if (operator === "*") {
        let result = firstNumber * secondNumber;
        clearArray(operationArray);
        operationArray.push(result);
        display(operationArray);
        return result;
    } else if (operator === "/") {
        let result = firstNumber / secondNumber;
        clearArray(operationArray);
        operationArray.push(result);
        display(operationArray);
        return result;
    }
    initialize();
}

// Numbers Inputs 
// Page consultée pour apprendre comment ajouter des Event Listener sur les keyboard keys: https://stackoverflow.com/questions/13196945/keycode-values-for-numeric-keypad / https://www.toptal.com/developers/keycode 

let numberZero = document.querySelector('.zero');
numberZero.addEventListener("click", getNumberZero);

document.addEventListener("keypress", function (event) {
    if (event.key === "0") {
        getNumberZero();
    }
});

function getNumberZero() {
    if (numberArray.length < numberDigitsOperation) {
        numberArray.push(0);
    }
    display(numberArray);
}

let numberOne = document.querySelector('.one');
numberOne.addEventListener("click", getNumberOne);

document.addEventListener("keypress", function (event) {
    if (event.key === "1") {
        getNumberOne();
    }
});

function getNumberOne() {
    if (numberArray.length < numberDigitsOperation) {
        numberArray.push(1);
    }
    display(numberArray);
}

let numberTwo = document.querySelector('.two');
numberTwo.addEventListener("click", getNumberTwo);

document.addEventListener("keypress", function (event) {
    if (event.key === "2") {
        getNumberTwo();
    }
});

function getNumberTwo() {
    if (numberArray.length < numberDigitsOperation) {
        numberArray.push(2);
    }
    display(numberArray);
}

let numberThree = document.querySelector('.three');
numberThree.addEventListener("click", getNumberThree);

document.addEventListener("keypress", function (event) {
    if (event.key === "3") {
        getNumberThree();
    }
});

function getNumberThree() {
    if (numberArray.length < numberDigitsOperation) {
        numberArray.push(3);
    }
    display(numberArray);
}

let numberFour = document.querySelector('.four');
numberFour.addEventListener("click", getNumberFour);

document.addEventListener("keypress", function (event) {
    if (event.key === "4") {
        getNumberFour();
    }
});

function getNumberFour() {
    if (numberArray.length < numberDigitsOperation) {
        numberArray.push(4);
    }
    display(numberArray);
}

let numberFive = document.querySelector('.five');
numberFive.addEventListener("click", getNumberFive);

document.addEventListener("keypress", function (event) {
    if (event.key === "5") {
        getNumberFive();
    }
});

function getNumberFive() {
    if (numberArray.length < numberDigitsOperation) {
        numberArray.push(5);
    }
    display(numberArray);
}

let numberSix = document.querySelector('.six');
numberSix.addEventListener("click", getNumberSix);

document.addEventListener("keypress", function (event) {
    if (event.key === "6") {
        getNumberSix();
    }
});

function getNumberSix() {
    if (numberArray.length < numberDigitsOperation) {
        numberArray.push(6);
    }
    display(numberArray);
}

let numberSeven = document.querySelector('.seven');
numberSeven.addEventListener("click", getNumberSeven);

document.addEventListener("keypress", function (event) {
    if (event.key === "7") {
        getNumberSeven();
    }
});

function getNumberSeven() {
    if (numberArray.length < numberDigitsOperation) {
        numberArray.push(7);
    }
    display(numberArray);
}

let numberEight = document.querySelector('.eight');
numberEight.addEventListener("click", getNumberEight);

document.addEventListener("keypress", function (event) {
    if (event.key === "8") {
        getNumberEight();
    }
});

function getNumberEight() {
    if (numberArray.length < numberDigitsOperation) {
        numberArray.push(8);
    }
    display(numberArray);
}

let numberNine = document.querySelector('.nine');
numberNine.addEventListener("click", getNumberNine);

document.addEventListener("keypress", function (event) {
    if (event.key === "9") {
        getNumberNine();
    }
});

function getNumberNine() {
    if (numberArray.length < numberDigitsOperation) {
        numberArray.push(9);
    }
    display(numberArray);
}