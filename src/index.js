'use strict';

// // ========= function declaration =========
// const sum1 = sumFn1(1, 3); // 4
// const sum2 = sumFn1(2, 4); // 6
// const sum3 = sumFn1(sum1, sum2); // 10

// console.log('========= function declaration =========');
// console.log('sum1:', sum1);
// console.log('sum2:', sum2);
// console.log('sum3:', sum3);

// function sumFn1(param1, param2) {
//   const result = param1 + param2;

//   return result;
// }

// // ========= function expression =========
// const sumFn2 = function (a, b) {
//   return a + b;
// };

// console.log('========= function expression =========');
// console.log('sum1:', sumFn2(1, 1));
// console.log('sum2:', sumFn2(10, 1));
// console.log('sum3:', sumFn2(12, 1));

// // ========= arrow function =========
// const sumFn3 = (a, b) => {
//   return a + b;
// };

// console.log('========= arrow function =========');
// console.log('sum1:', sumFn3(2, 1));
// console.log('sum2:', sumFn3(20, 1));
// console.log('sum3:', sumFn3(22, 1));

// // ========== polindrom ==========
// const isPolindrome = function (inputStr) {
//   const str = inputStr.toLowerCase().replaceAll(' ', '');
//   const letters = str.split('');
//   const newArr = [];

//   for (let i = letters.length - 1; i >= 0; i--) {
//     newArr.push(letters[i]);
//   }

//   for (let i = 0; i < inputStr.length; i++) {
//     if (inputStr[i] === ' ') {
//       newArr.splice(i, 0, ' ');
//     }
//   }

//   let reversedStr = newArr.join('');

//   return inputStr.toLowerCase() === reversedStr;
// };

// const strings = [
//   'Tenet', // true
//   'Лёша на полке клопа нашёл', // true
//   'Искать такси', // true
//   'Существуют разновидности', // false
// ];

// for (const str of strings) {
//   console.log('------------------');
//   console.log(str);
//   console.log('isPolindrome:', isPolindrome(str));
// }

// ====== function argument order ======
// const sayHello = function (name = 'Nemo', age = 1) {
//   console.log(`${name} is ${age} years old. Hello ${name}!`);
// };

// sayHello('Bobby', 15);

// ========== arguments ==========
// const sum = function () {
//   const numbers = Array.from(arguments);
//   let result = 0;

//   for (const value of numbers) {
//     result += value;
//   }

//   return result;
// };

// console.log(sum(1, 1, 1, 1));
// console.log(sum(1, 1));
// console.log(sum(1, 1, 5, 6, 7, 8, 9, 4, 3, 2));
// console.log(sum());

// ========= arrow function =========
// const sum2 = (a = 0, b = 0) => a + b;

// console.log(sum2(1, 1));
// console.log(sum2(1));
// console.log(sum2());

// ======== bank account =========
// let amount = 100;

// function withdrawal(value) {
//   if (amount - value < 0) {
//     return 'not enough money';
//   }

//   amount -= value;

//   return amount;
// }

// console.log(amount);
// console.log(withdrawal(10));
// console.log(withdrawal(70));
// console.log(withdrawal(50));

// ==== get even numbers ====
// 2, 4, 6, 8
const getEvenNumbers = (start = 0, end = 0) => {
  const result = [];

  for (let i = start; i <= end; i++) {
    if (i % 2 === 0) {
      result.push(i);
    }
  }

  return result;
};

// 1,3,5,7,9 ...
const getOddNumbers = (start = 0, end = 0) => {
  const result = [];

  for (let i = start; i <= end; i++) {
    if (i % 2 !== 0) {
      result.push(i);
    }
  }

  return result;
};

console.log(getEvenNumbers(1, 10)); // 2,4,6,8,10
console.log(getOddNumbers(1, 10)); // 2,4,6,8,10
