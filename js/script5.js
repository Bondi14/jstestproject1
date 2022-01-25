"use strict";

function showFirstMessage (text) {
    console.log(text);
}

showFirstMessage("Andriy");

// function calc(a, b) {
//     return (a + b);
// }

// console.log(calc(2,3));

function ret() {
    let num = 50;
    return num;
}

const anotherNum = ret();
console.log(anotherNum);

const logger = function () {
    console.log("Hello");
};

logger();

