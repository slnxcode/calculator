const sum = (a, b) => {
    return a + b;
  };

const subtract = (a, b) => {
    return a - b;
};

const multiply = (a, b) => {
    return a * b;
};

const divide = (a, b) => {
    return a / b;
};

let firstNum = '';
let operator = '';
let secondNum = '';



const operate = (firstNum, operator, secondNum) => {

    if (operator === '+') {sum(firstNum, secondNum)};
    if (operator === '-') {subtract(firstNum, secondNum)};
    if (operator === 'x') {multiply(firstNum, secondNum)};
    if (operator === '÷') {divide(firstNum, secondNum)};


}




const screen = document.querySelector('.screen');
const screenParagraph = document.createElement('paragraph');
screen.appendChild(screenParagraph);
screenParagraph.style.cssText = 'margin-right: 20px;';
screenParagraph.textContent = '0';


const seven = document.querySelector('.seven');

let entry = '';
seven.addEventListener('click', () => {
    
    entry += '7';
    entry = entry.substring(0, 10);
    screenParagraph.textContent = entry;
    
});

const eight = document.querySelector('.eight');

eight.addEventListener('click', () => {
    
    entry += '8';
    entry = entry.substring(0, 10);
    screenParagraph.textContent = entry;
    
});

const ac = document.querySelector('.ac');
ac.addEventListener('click', () => {
    location.reload();
})

const c = document.querySelector('.c');
c.addEventListener('click', () => {
    entry = entry.substring(0, entry.length-1);
    entry = entry.substring(0, 10);
    screenParagraph.textContent = entry;
})