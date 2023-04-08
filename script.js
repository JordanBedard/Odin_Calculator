// Initialize
let operationArray = [];
let numberArray = [];
function initialize() {
    numberArray.length = 0;
    operationArray.length = 0;
    display();
}

// Display
function display() {
    if (numberArray.length <= 12) {
        let display = document.querySelector(".calculatorDisplay");
        display.textContent = numberArray;
        display.textContent = display.textContent.split(',').join('');
        return;
    } else {
        return;
    }
}

// Clear
let clear = document.querySelector('.clear');
clear.addEventListener("click", initialize);

// Erase 
// À ajouter = Event Listener sur Return du keyboard
let erase = document.querySelector('.erase');
erase.addEventListener('click', removeLastDegitfromArray);

function removeLastDegitfromArray() {
    numberArray.pop();
    display();
}

// Operate
function operate(firstNumber, operator, secondNumber) {

}

// Regroup Digits
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
    console.log(operationArray);
}

// Numbers Inputs 

// Pages consultées pour apprendre comment ajouter des Event Listener sur les keyboards key du numeric keypad : https://stackoverflow.com/questions/13196945/keycode-values-for-numeric-keypad / https://www.toptal.com/developers/keycode 

// keypress

let numberZero = document.querySelector('.zero');
numberZero.addEventListener("click", function () {
    numberArray.push(0);
    display();
});

// let numberZeroPad = 
// numberZeroPad.addEventListener("keypress", function () {
//     numberArray.push(0);
//     display();
// });

let numberOne = document.querySelector('.one');
numberOne.addEventListener("click", function () {
    numberArray.push(1);
    display();
});

let numberTwo = document.querySelector('.two');
numberTwo.addEventListener("click", function () {
    numberArray.push(2);
    display();
});

let numberThree = document.querySelector('.three');
numberThree.addEventListener("click", function () {
    numberArray.push(3);
    display();
});

let numberFour = document.querySelector('.four');
numberFour.addEventListener("click", function () {
    numberArray.push(4);
    display();
});

let numberFive = document.querySelector('.five');
numberFive.addEventListener("click", function () {
    numberArray.push(5);
    display();
});

let numberSix = document.querySelector('.six');
numberSix.addEventListener("click", function () {
    numberArray.push(6);
    display();
});

let numberSeven = document.querySelector('.seven');
numberSeven.addEventListener("click", function () {
    numberArray.push(7);
    display();
});

let numberEight = document.querySelector('.eight');
numberEight.addEventListener("click", function () {
    numberArray.push(8);
    display();
});

let numberNine = document.querySelector('.nine');
numberNine.addEventListener("click", function () {
    numberArray.push(9);
    display();
});
