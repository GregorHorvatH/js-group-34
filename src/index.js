'use strict';

// ======== example 1 ========
// const sayHello = () => {
//   console.log('Hello');
// };

// console.log('start');

// setTimeout(sayHello, 2000);

// console.log('end');

// ======== example 2 ========
// function fn1(callback) {
//   console.log('hello from fn1');

//   callback();
// }

// function fn2() {
//   console.log('hello from fn2');
// }

// fn1(fn2);

// ======== map =========
const names = ['Bobby', 'Peter', 'john'];
const numbers = [100, 200, 300]; // <li>1.00$</li>
const numbers2 = [100, 200, 300]; // 200, 400, 600

function map(arr, callback) {
  const result = [];

  for (const value of arr) {
    result.push(callback(value));
  }

  return result;
}

function namesToList(name) {
  return `<li>${name}</li>`;
}

function numbersToList(number) {
  return `<li>${number / 100}$</li>`;
}

console.log(map(names, namesToList));
console.log(map(numbers, numbersToList));
console.log(map(numbers2, (number) => number * 2));

// ========= filter =========
// const arr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9]; // <5 - 1,2,3,4
// const arr2 = [1, 2, 3, 4, 5, 6, 7, 8, 9]; // >5 - 6,7,8,9
// const arr3 = [1, 2, 3, 4, 5, 6, 7, 8, 9]; // even - 2,4,6,8
// const arr4 = [1, 2, 3, 4, 5, 6, 7, 8, 9]; // odd - 1,3,5,7,9

// function filter(arr, callback) {
//   const result = [];

//   for (const value of arr) {
//     // true
//     if (callback(value)) {
//       result.push(value);
//     }
//   }

//   return result;
// }

// console.log(filter(arr1, (x) => x < 5));
// console.log(filter(arr1, (x) => x > 5));
// console.log(filter(arr1, (x) => x % 2 === 0));
// console.log(filter(arr1, (x) => x % 2 !== 0));

// ======== find ========
// const arr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9]; // >7

// function find(arr, callback) {
//   for (const value of arr) {
//     if (callback(value)) {
//       return value;
//     }
//   }

//   return -1;
// }

// function findNine(x) {
//   return x === 9;
// }

// console.log(find(arr1, (x) => x > 7));
// console.log(find(arr1, (x) => x % 4 === 0));
// console.log(find(arr1, findNine));
// console.log(find(arr1, (x) => x === 99));

// ========== reduce ==========
// const arr1 = [1, 1, 1, 1, 6, 6];

// function reduce(arr, callback, initialValue) {
//   let result = initialValue;

//   for (const value of arr) {
//     result = callback(result, value);
//   }

//   return result;
// }

// function sum(a, b) {
//   return a + b;
// }

// console.log(reduce(arr1, sum, 0));
// console.log(reduce(arr1, (acc, value) => acc * value, 1));
