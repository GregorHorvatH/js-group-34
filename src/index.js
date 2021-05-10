'use strict'; // must have

// const SKY_COLOR = 'blue';

// const a = 5;
// const b = 6;
// const x = a + b;

// console.log('x:', x);

// // alert('kjhgj "hkgh" k');

// function hello() {
//   console.log('Hello world!');
//   console.log(this);
// }

// hello();

// camel case
// const userName = 'Bobby'; // string
// const age = 15; // number
// const adult = false; // boolean
// const eyeColor = 'blue';

// console.log('userName:', userName);
// console.log(typeof userName);
// console.log(typeof age);
// console.log(typeof adult);
// console.log(typeof eyeColor);
// console.log(typeof null); // object
// console.log(typeof undefined);
// console.log(typeof { x: 234 }); // object
// console.log(typeof [1, 2, 3, 4, 5, 6]); // object

// =========================================
// let g = 1;
// console.log('g:', g);

// g = 2;
// console.log('g:', g);

// g = 3;
// console.log('g:', g);

// ========= Обращение к переменной ==========
// let y;
// console.log('y:', y);

// y = 6;
// console.log('y:', y);

// var qqq = 111;
// var qqq = 222;
// var qqq = 333;

// let www = 111;

// ========= Всплытие переменных ==========
// let t = 11;
// console.log('t:', t);

// console.log('u:', u);
// var u = 22;
// console.log('u:', u);

// const twoOrOne = 2 > 1; // true
// console.log(twoOrOne); // true
// console.log(2 < 1); // false

// ========= Получение данных - confirm =========
// const goToTheMovie = confirm('Please confirm go to the movie');
// console.log('goToTheMovie:', goToTheMovie);

// ========= Получение данных - prompt =========
const age = prompt('How old are you?');
console.log('age:', age);

if (age >= 18) {
  console.log('you can buy ticket to this movie');
} else {
  console.log('you CAN`T go to this movie');
}
