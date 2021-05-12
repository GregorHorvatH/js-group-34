'use strict';

// {
//   const a = 5;

//   console.log('a:', a);

//   {
//     console.log('a:', a);
//   }
// }

// ============ game ============
// const secretNumber = Math.round(Math.random() * 100 + 1);
// let userNumber;
// let answer;
// let str;

// do {
//   answer = prompt('Enter a number');
//   userNumber = Number.parseInt(answer);

//   if (secretNumber === userNumber) {
//     str = 'You won!';
//   } else if (secretNumber > userNumber) {
//     str = `x > ${userNumber}`;
//   } else if (secretNumber < userNumber) {
//     str = `x < ${userNumber}`;
//   } else {
//     str = 'exit';
//   }
// } while (secretNumber !== userNumber && !isNaN(userNumber));
// // } while (secretNumber !== userNumber && answer.toUpperCase() !== 'EXIT');
// console.log(str);

// ============ var vs let ============
// for (let i = 0; i < 10; i = i + 1) {
//   console.log(i);
// }

// console.log('i:', i);

// ============ Конкатенация строк ============
// const a = 'Hello';
// const b = 'world!';
// const c = a + ' ' + b;
// const d = `${a} ${b}`;

// console.log(c);
// console.log(d);

// ============ for ============
//           0123456789
// const str = 'JavaScript';
// console.log(str);

// for (let i = 0; i < str.length; i++) {
//   console.log(str[i]);
// }

// ============ for ============
// for (let i = 2; i < 10; i++) {
//   for (let j = 2; j < 10; j++) {
//     console.log(`${i} x ${j} = ${i * j}`);
//   }
//   console.log('===========================');
// }

// ============ break и continue ============
// for (let c = 0; c < 10; c++) {
//   if (c > 5) {
//     break;
//   }
//   console.log(c);
// }

// for (let c = 0; c < 10; c++) {
//   if (c === 5) continue;
//   console.log(c);
// }

// ===== do / while =====
// https://i.redd.it/6wksqjmmyw321.jpg

// ===== return =====
// function sum(a, b) {
//   return a + b;
// }

// const result1 = sum(2, 2);
// const result2 = sum(3, 3);
// const result3 = sum(result1, result2);

// console.log('result1:', result1);
// console.log('result2:', result2);
// console.log('result3:', result3);

// ===== includes =====
const str = 'один из наиболее часто используемых методов';
const result = str.toLowerCase().includes('чАстО'.toLocaleLowerCase());

console.log('result:', result);
