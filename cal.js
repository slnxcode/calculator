// function for summing numbers
const sum = (a, b) => {
    return a + b;
  };

// function for subtracting numbers
const subtract = (a, b) => {
    return a - b;
};

// function for multiplying numbers
const multiply = (a, b) => {
    return a * b;
};

// function for dividing numbers
const division = (a, b) => {
    return a / b;
};

// function for calculating percentage
const percentage = (a, b) => {
    return (a / 100) * b;
};

// function for exponential
const exponent = (a, b) => {
    return (a**b);
};


// create DOM for calculator screen
const screen = document.querySelector('.screen');
const screenParagraph = document.createElement('paragraph');
screen.appendChild(screenParagraph);
screenParagraph.style.cssText = 'margin-right: 20px;';
screenParagraph.textContent = '0';
let entry = '';

// DOM & function for AC key (All Clear)
const ac = document.querySelector('.ac');
ac.addEventListener('click', () => {
    //location.reload();
    entry = '0';
    screenParagraph.textContent = '0';
});

// DOM & function for C key (Clear)
const c = document.querySelector('.c');
c.addEventListener('click', () => {
    entry = entry.substring(0, entry.length-1);
    entry = entry.substring(0, 13);
    if (entry === '') {entry = '0'};
    screenParagraph.textContent = entry;
});

// DOM & function for number 7
const seven = document.querySelector('.seven');
seven.addEventListener('click', () => {
    if (entry === answer) {entry = ''};
    if (entry === '0') {entry = ''};
    entry += 7;
    entry = entry.substring(0, 13);
    screenParagraph.textContent = entry;
});

// DOM & function for number 8
const eight = document.querySelector('.eight');
eight.addEventListener('click', () => {
    if (entry === answer) {entry = ''};
    if (entry === '0') {entry = ''};
    entry += 8;
    entry = entry.substring(0, 13);
    screenParagraph.textContent = entry; 
});

// DOM & function for number 9
const nine = document.querySelector('.nine');
nine.addEventListener('click', () => {
    if (entry === answer) {entry = ''};
    if (entry === '0') {entry = ''};
    entry += 9;
    entry = entry.substring(0, 13);
    screenParagraph.textContent = entry; 
});

// DOM & function for number 4
const four = document.querySelector('.four');
four.addEventListener('click', () => {
    if (entry === answer) {entry = ''};
    if (entry === '0') {entry = ''};
    entry += 4;
    entry = entry.substring(0, 13);
    screenParagraph.textContent = entry; 
});

// DOM & function for number 5
const five = document.querySelector('.five');
five.addEventListener('click', () => {
    if (entry === answer) {entry = ''};
    if (entry === '0') {entry = ''};
    entry += 5;
    entry = entry.substring(0, 13);
    screenParagraph.textContent = entry; 
});

// DOM & function for number 6
const six = document.querySelector('.six');
six.addEventListener('click', () => {
    if (entry === answer) {entry = ''};
    if (entry === '0') {entry = ''};
    entry += 6;
    entry = entry.substring(0, 13);
    screenParagraph.textContent = entry; 
});

// DOM & function for number 1
const one = document.querySelector('.one');
one.addEventListener('click', () => {
    if (entry === answer) {entry = ''};
    if (entry === '0') {entry = ''};
    entry += 1;
    entry = entry.substring(0, 13);
    screenParagraph.textContent = entry; 
});

// DOM & function for number 2
const two = document.querySelector('.two');
two.addEventListener('click', () => {
    if (entry === answer) {entry = ''};
    if (entry === '0') {entry = ''};
    entry += 2;
    entry = entry.substring(0, 13);
    screenParagraph.textContent = entry; 
});

// DOM & function for number 3
const three = document.querySelector('.three');
three.addEventListener('click', () => {
    if (entry === answer) {entry = ''};
    if (entry === '0') {entry = ''};
    entry += 3;
    entry = entry.substring(0, 13);
    screenParagraph.textContent = entry; 
});

// DOM & function for number 0
const zero = document.querySelector('.zero');
zero.addEventListener('click', () => {
    if (entry === answer) {entry = ''};
    if (entry === '0') {entry = ''};
    entry += 0;
    entry = entry.substring(0, 13);
    screenParagraph.textContent = entry; 
});

// DOM & function for dot
const dot = document.querySelector('.dot');
dot.addEventListener('click', () => {
    if (entry === answer) {entry = ''};
    if (entry === '0') {entry = ''};
    const newDot = entry.split('');
    const dott = newDot.filter(num => num === '.')
    if(!entry.includes('.') || dott.length < 2 && operator) {entry += '.'};
    entry = entry.substring(0, 13);
    screenParagraph.textContent = entry; 
});

let operator;
// DOM & function for addition key
const plus = document.querySelector('.plus');
plus.addEventListener('click', () => {
    if (entry.length > 2 && operator) {equality()};
    operator = ' + ';
    if(entry[entry.length-1] !== operator) {entry += operator};
    entry = entry.substring(0, 13);
    if(entry[entry.length-1] === operator) {entry = entry.substring(0, 12)};
    screenParagraph.textContent = entry;
});

// DOM & function for subtraction key
const minus = document.querySelector('.minus');
minus.addEventListener('click', () => {
    if (entry.length > 2 && operator) {equality()};
    operator = ' - ';
    if(entry[entry.length-1] !== operator) {entry += operator};
    entry = entry.substring(0, 13);
    if(entry[entry.length-1] === operator) {entry = entry.substring(0, 12)};
    screenParagraph.textContent = entry;
});

// DOM & function for multiplication key
const times = document.querySelector('.times');
times.addEventListener('click', () => {
    if (entry.length > 2 && operator) {equality()};
    operator = ' x ';
    if(entry[entry.length-1] !== operator) {entry += operator};
    entry = entry.substring(0, 13);
    if(entry[entry.length-1] === operator) {entry = entry.substring(0, 12)};
    screenParagraph.textContent = entry;
});

// DOM & function for division key
const divide = document.querySelector('.divide');
divide.addEventListener('click', () => {
    if (entry.length > 2 && operator) {equality()};
    operator = ' ÷ ';
    if(entry[entry.length-1] !== operator) {entry += operator};
    entry = entry.substring(0, 13);
    if(entry[entry.length-1] === operator) {entry = entry.substring(0, 12)};
    screenParagraph.textContent = entry;
});

// DOM & function for exponent key
const exp = document.querySelector('.exp');
exp.addEventListener('click', () => {
    if (entry.length > 2 && operator) {equality()};
    operator = ' ^ ';
    if(entry[entry.length-1] !== operator) {entry += operator};
    entry = entry.substring(0, 13);
    if(entry[entry.length-1] === operator) {entry = entry.substring(0, 12)};
    screenParagraph.textContent = entry;
});

// DOM & function for percentage key
const percent = document.querySelector('.percent');
percent.addEventListener('click', () => {
    if (entry.length > 2 && operator) {equality()};
    operator = ' % ';
    if(entry[entry.length-1] !== operator) {entry += operator};
    entry = entry.substring(0, 13);
    if(entry[entry.length-1] === operator) {entry = entry.substring(0, 12)};
    screenParagraph.textContent = entry;
});

// DOM & function for equals key
let answer;
const equals = document.querySelector('.equals');
equals.addEventListener('click', equality = () => {
    let separate;
    if (operator === ' + ') {
        separate = entry.split(operator);
        operator = '';
        const newEntry = separate.map(fig => Number(fig));
        answer = sum(...newEntry);
        if (!Number.isInteger(answer)) {answer = answer.toFixed(3)};
        if(!Number.isInteger(answer) && answer[answer.length-1] === '0') {answer = answer.substring(0, answer.length-1)};
        if(!Number.isInteger(answer) && answer[answer.length-1] === '0') {answer = answer.substring(0, answer.length-1)};
        entry = answer;
        screenParagraph.textContent = answer;
        };

    if (operator === ' - ') {
        separate = entry.split(operator);
        operator = '';
        const newEntry = separate.map(fig => Number(fig));
        answer = subtract(...newEntry);
        if (!Number.isInteger(answer)) {answer = answer.toFixed(3)};
        if(!Number.isInteger(answer) && answer[answer.length-1] === '0') {answer = answer.substring(0, answer.length-1)};
        if(!Number.isInteger(answer) && answer[answer.length-1] === '0') {answer = answer.substring(0, answer.length-1)};
        entry = answer;
        screenParagraph.textContent = answer;
        };

    if (operator === ' x ') {
        separate = entry.split(operator);
        operator = '';
        const newEntry = separate.map(fig => Number(fig));
        answer = multiply(...newEntry);
        if (!Number.isInteger(answer)) {answer = answer.toFixed(3)};
        if(!Number.isInteger(answer) && answer[answer.length-1] === '0') {answer = answer.substring(0, answer.length-1)};
        if(!Number.isInteger(answer) && answer[answer.length-1] === '0') {answer = answer.substring(0, answer.length-1)};
        entry = answer;
        screenParagraph.textContent = answer;
        };

    if (operator === ' ÷ ') {
        separate = entry.split(operator);
        operator = '';
        const newEntry = separate.map(fig => Number(fig));
        answer = division(...newEntry);
        if (!Number.isInteger(answer)) {answer = answer.toFixed(3)};
        if(!Number.isInteger(answer) && answer[answer.length-1] === '0') {answer = answer.substring(0, answer.length-1)};
        if(!Number.isInteger(answer) && answer[answer.length-1] === '0') {answer = answer.substring(0, answer.length-1)};
        entry = answer;
        screenParagraph.textContent = answer;
        };

    if (operator === ' ^ ') {
        separate = entry.split(operator);
        operator = '';
        const newEntry = separate.map(fig => Number(fig));
        answer = exponent(...newEntry);
        if (!Number.isInteger(answer)) {answer = answer.toFixed(3)};
        if(!Number.isInteger(answer) && answer[answer.length-1] === '0') {answer = answer.substring(0, answer.length-1)};
        if(!Number.isInteger(answer) && answer[answer.length-1] === '0') {answer = answer.substring(0, answer.length-1)};
        entry = answer;
        screenParagraph.textContent = answer;
        };
    
    if (operator === ' % ') {
        separate = entry.split(operator);
        operator = '';
        const newEntry = separate.map(fig => Number(fig));
        answer = percentage(...newEntry);
        if (!Number.isInteger(answer)) {answer = answer.toFixed(3)};
        if(!Number.isInteger(answer) && answer[answer.length-1] === '0') {answer = answer.substring(0, answer.length-1)};
        if(!Number.isInteger(answer) && answer[answer.length-1] === '0') {answer = answer.substring(0, answer.length-1)};
        entry = answer;
        screenParagraph.textContent = answer;
        };
});


