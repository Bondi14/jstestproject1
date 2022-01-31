"use strict"; 

// To string

// 1)

console.log(typeof(String(4)));

// 2)

console.log(typeof(null + ''));

const num = 5;

console.log("fb.com/" + num);

const fontSize = 26 + 'px';

// To Number

// 1)
console.log(typeof(Number('4')));

// 2)
console.log(typeof(+'5'));

//3)
console.log(typeof(parseInt("15px", 10)));

console.log(parseInt("15px", 10));

let answ = +prompt("Hello", "");

// To boolean

// 0, '', null, undefined, NaN; - false !!!!!!!!!