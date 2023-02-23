function eliminateNegativeAndCheckIfBiggerThanFour(numbers) {
    const positiveNumbers = [];
    for (const number of numbers) {
        if (number >= 0) {
            positiveNumbers.push(number);
        }
    }

    for (const number of positiveNumbers) {
        if (number > 4) {
            console.log("YES!");
            break;
        }
    }
}

function eliminateNegative(numbers) {
    const positiveNumbers = [];
    for (const number of numbers) {
        if (number >= 0) {
            positiveNumbers.push(number);
        }
    }
    return positiveNumbers;
}

function isAnyBiggerThanFour(positiveNumbers) {
    for (const number of positiveNumbers) {
        if (number > 4) {
            console.log("YES!");
            return;
        }
    }
    console.log("NO!");
}

const numbers = [-1, 0, 1, 2, 3, 4, 5];
const positiveNumbers = eliminateNegative(numbers);
isAnyBiggerThanFour(positiveNumbers);


function add(x, y) {
    return x + y;
}

function subtract(x, y) {
    return x - y;
}

function multiply(x, y) {
    return x * y;
}

function divide(x, y) {
    return x / y;
}