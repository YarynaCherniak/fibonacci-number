'use strict';

let correctInput = false;
let someNum;
do {
    someNum = parseInt(prompt('Введіть n-не число Фібоначчі'), 10);
    if (isNaN(someNum) || someNum <= 0) {
        alert('Потрібно ввести натуральне число :)');
        continue;
    }
    correctInput = true;
} while (!correctInput);

//______________________________________________________________________________
// 1-й метод

function getFibonacciNumber(number) {
    let x = 1;
    let y = 0;
    for (let i = 1; i <= number / 2; i++) {
        x = x + y;
        y = x + y;
    }
    if (number & 1) {
        return (x + y);
    }
    return (y);
}

//______________________________________________________________________________
// 2-й метод
/*
function getFibonacciNumber(number) {
    let x = 1;
    let y = 1;
    for (let i = 3; i <= number; i++) {
        let sum = x + y;
        x = y;
        y = sum;
    }
    return (y);
}
*/
//______________________________________________________________________________
// 3-й метод
/*
function getFibonacciNumber(number) {
    let fibNums = [1, 1];
    for (let i = 1; i <= number; i++) {
        fibNums.push(fibNums[fibNums.length - 1] + fibNums[fibNums.length - 2]);
    }
    return (fibNums[number - 1]);
}
*/
//______________________________________________________________________________
// 4-й метод
/*
function getFibonacciNumber(number) {
    return number <= 1 ? number : getFibonacciNumber(number - 1) + getFibonacciNumber(number - 2);
}
*/
//______________________________________________________________________________

let answer = getFibonacciNumber(someNum);
document.getElementById('print').innerHTML = (`${someNum}-е число Фібоначчі становить ${answer}`);
