"use strict";

const options = {
    name: 'test',
    width: 1024,
    height: 1024,
    colors: {
        border: 'black',
        bg: 'red'
    }
};

console.log(Object.keys(options).length);

const {border, bg} = options.colors;
console.log(border);

//console.log(options["colors"]["border"]);

delete options.name;

for (let key in options) {
    if (typeof(options[key]) === 'object'){
        for (let i in options[key]) {
            console.log(`Свойство ${i} має значення ${options[key][i]}`);
        }
        } else {
            console.log(`Свойство ${key} має значення ${options[key]} `);
        }
    }