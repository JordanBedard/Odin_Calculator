// Initialize
let numberDigitsOperation = 10;
let operationArray = [];
let numberArray = [];
function initialize() {
    numberArray.length = 0;
    operationArray.length = 0;
    display();
}
// Display

function display() {
    if (numberArray.length <= numberDigitsOperation) {
        let display = document.querySelector(".calculatorDisplay");
        display.textContent = numberArray;
        display.textContent = display.textContent.split(',').join('');
        return;
    } else {
        return;
    }
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

// Erase 
let erase = document.querySelector('.erase');
erase.addEventListener('click', removeLastDegitfromArray);

function removeLastDegitfromArray() {
    numberArray.pop();
    display();
}

document.addEventListener("keydown", function (event) {
    if (event.key === "Backspace") {
        removeLastDegitfromArray();
    }
});

// Operate
// Order of operations - X / + - // For Loop pour les différentes opérations?

function operate(firstNumber, operator, secondNumber) {

}

// Format Data in Number Array to join integers. 
function formatedArrayNumbers() {
    let concatenatedArrayValues = numberArray.join('');
    let formatedArray = parseInt(concatenatedArrayValues);
    console.log(formatedArray)
    return formatedArray;
};

// Equals - Display Results different

// Operators 
let plusSign = document.querySelector('.plusSign')
plusSign.addEventListener("click", getPlusSign);

function getPlusSign() {
    let formatedArray = formatedArrayNumbers();
    operationArray.push(formatedArray);
    operationArray.push("+");
    numberArray.length = 0;
    console.log(operationArray);
    console.log(numberArray);
}

// Numbers Inputs 

// Page consultée pour apprendre comment ajouter des Event Listener sur les keyboard keys: https://stackoverflow.com/questions/13196945/keycode-values-for-numeric-keypad / https://www.toptal.com/developers/keycode 

let numberZero = document.querySelector('.zero');
numberZero.addEventListener("click", function () {
    if (numberArray.length < numberDigitsOperation) {
        numberArray.push(0);
    }
    display();
});

document.addEventListener("keypress", function (event) {
    if (event.key === "0") {
        if (numberArray.length < numberDigitsOperation) {
            numberArray.push(0);
        }
        display();
    }
});

let numberOne = document.querySelector('.one');
numberOne.addEventListener("click", function () {
    if (numberArray.length < numberDigitsOperation) {
        numberArray.push(1);
    }
    display();
});

document.addEventListener("keypress", function (event) {
    if (event.key === "1") {
        if (numberArray.length < numberDigitsOperation) {
            numberArray.push(1);
        }
        display();
    }
});

let numberTwo = document.querySelector('.two');
numberTwo.addEventListener("click", function () {
    if (numberArray.length < numberDigitsOperation) {
        numberArray.push(2);
    }
    display();
});

document.addEventListener("keypress", function (event) {
    if (event.key === "2") {
        if (numberArray.length < numberDigitsOperation) {
            numberArray.push(2);
        }
        display();
    }
});

let numberThree = document.querySelector('.three');
numberThree.addEventListener("click", function () {
    if (numberArray.length < numberDigitsOperation) {
        numberArray.push(3);
    }
    display();
});

document.addEventListener("keypress", function (event) {
    if (event.key === "3") {
        if (numberArray.length < numberDigitsOperation) {
            numberArray.push(3);
        }
        display();
    }
});

let numberFour = document.querySelector('.four');
numberFour.addEventListener("click", function () {
    if (numberArray.length < numberDigitsOperation) {
        numberArray.push(4);
    }
    display();
});

document.addEventListener("keypress", function (event) {
    if (event.key === "4") {
        if (numberArray.length < numberDigitsOperation) {
            numberArray.push(4);
        }
        display();
    }
});

let numberFive = document.querySelector('.five');
numberFive.addEventListener("click", function () {
    if (numberArray.length < numberDigitsOperation) {
        numberArray.push(5);
    }
    display();
});

document.addEventListener("keypress", function (event) {
    if (event.key === "5") {
        if (numberArray.length < numberDigitsOperation) {
            numberArray.push(5);
        }
        display();
    }
});

let numberSix = document.querySelector('.six');
numberSix.addEventListener("click", function () {
    if (numberArray.length < numberDigitsOperation) {
        numberArray.push(6);
    }
    display();
});

document.addEventListener("keypress", function (event) {
    if (event.key === "6") {
        if (numberArray.length < numberDigitsOperation) {
            numberArray.push(6);
        }
        display();
    }
});

let numberSeven = document.querySelector('.seven');
numberSeven.addEventListener("click", function () {
    if (numberArray.length < numberDigitsOperation) {
        numberArray.push(7);
    }
    display();
});

document.addEventListener("keypress", function (event) {
    if (event.key === "7") {
        if (numberArray.length < numberDigitsOperation) {
            numberArray.push(7);
        }
        display();
    }
});

let numberEight = document.querySelector('.eight');
numberEight.addEventListener("click", function () {
    if (numberArray.length < numberDigitsOperation) {
        numberArray.push(8);
    }
    display();
});

document.addEventListener("keypress", function (event) {
    if (event.key === "8") {
        if (numberArray.length < numberDigitsOperation) {
            numberArray.push(8);
        }
        display();
    }
});

let numberNine = document.querySelector('.nine');
numberNine.addEventListener("click", function () {
    if (numberArray.length < numberDigitsOperation) {
        numberArray.push(9);
    }
    display();
});

document.addEventListener("keypress", function (event) {
    if (event.key === "9") {
        if (numberArray.length < numberDigitsOperation) {
            numberArray.push(9);
        } 12
        display();
    }
});