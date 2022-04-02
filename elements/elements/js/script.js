"use strict";

const box = document.getElementById('box'),
      btns = document.getElementsByTagName('button'),
      circles = document.getElementsByClassName('circle'),
      hearts = document.querySelectorAll('.heart');

    console.log(hearts);
    box.style.background = 'blue';
    box.style.cssText = "";
 
hearts.forEach(item => {
    console.log(item);
});

const oneHeart = document.querySelector('.heart');
    console.log(oneHeart);

const div = document.createElement('div');

div.classList.add('black');

document.body.append(div);

div.innerHTML = "Hello world";