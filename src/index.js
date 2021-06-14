'use strict';

// ========== Чистые функции ==========

// ========== Dirty ==========
// const dirtyMultiply = (array, value) => {
//   for (let i = 0; i < array.length; i += 1) {
//     array[i] = array[i] * value;
//   }
// };

// const numbers = [1, 2, 3, 4, 5];

// dirtyMultiply(numbers, 2);

// // Произошла мутация исходных данных
// console.log(numbers); // [2, 4, 6, 8, 10]

// dirtyMultiply(numbers, 10);
// console.log(numbers); // [20, 40, 60, 80, 100]

// ========== Pure ==========
// const pureMultiply = (array, value) => {
//   const result = [];

//   for (let i = 0; i < array.length; i += 1) {
//     result.push(array[i] * value);
//   }

//   return result;
// };

// const numbers = [1, 2, 3, 4, 5];
// const doubledNumbers = pureMultiply(numbers, 2);
// const doubledNumbers2 = pureMultiply(numbers, 2);
// const doubledNumbers3 = pureMultiply(numbers, 2);
// const doubledNumbers4 = pureMultiply(numbers, 2);
// const doubledNumbers5 = pureMultiply(numbers, 2);

// // Не произошло мутации исходных данных
// console.log(numbers); // [1, 2, 3, 4, 5]

// // Функция вернула новый массив с измененными данными
// console.log(doubledNumbers); // [2, 4, 6, 8, 10]
// console.log(doubledNumbers2); // [2, 4, 6, 8, 10]
// console.log(doubledNumbers3); // [2, 4, 6, 8, 10]
// console.log(doubledNumbers4); // [2, 4, 6, 8, 10]
// console.log(doubledNumbers5); // [2, 4, 6, 8, 10]

// ========== forEach ==========
// const numbers = [1, 2, 3];

// Классический for
// for (let i = 0; i < numbers.length; i += 1) {
//   console.log(i, numbers[i]);
// }

// let sum = 0;
// numbers.forEach((value) => (sum += value));

// console.log(sum);

// ========== map ==========
// const numbers = [1, 2, 3];

// const doubledNumbers = numbers.map((num) => num * 2);
// console.log(numbers);
// console.log(doubledNumbers); // [2, 4, 6]

// const urls = ['www.google.com', 'www.facebook.com'];
// <a href="www.google.com">www.google.com</a>

// const links = urls.map((value) => `<a href="${value}">${value}</a>`);
// console.log(links);

// const users = [
//   { name: 'Mango', isActive: true },
//   { name: 'Poly', isActive: false },
//   { name: 'Ajax', isActive: true },
// ];

// console.log(
//   users.map(({ name, isActive }) => ({
//     text: `${name} - ${isActive ? 'Active' : 'Not Active'}`,
//     name,
//     isActive,
//   })),
// );

// ========== filter ==========
// const users = [
//   { name: 'Mango', isActive: true },
//   { name: 'Poly', isActive: false },
//   { name: 'Ajax', isActive: true },
// ];

// const activeUsers = users.filter((user) => user.isActive);
// const notActiveUsers = users.filter(function (user) {
//   return !user.isActive;
// });
// console.log(activeUsers);
// console.log(notActiveUsers);

// ========== filter/delete ==========
// let users = [
//   { name: 'Mango', isActive: true },
//   { name: 'Poly', isActive: false },
//   { name: 'Ajax', isActive: true }, // delete
// ];

// users = users.filter((user) => user.name !== 'Ajax');
// console.log(users);
//               0        3     5        8  9
// const numbers = [1, 1, 1, 2, 2, 3, 3, 3, 4, 5, 5];
// const uniqueValues = numbers.filter(
//   (value, idx, arr) => arr.indexOf(value) === idx,
// );

// console.log(uniqueValues);

// ========== find ==========
// const users = [
//   { name: 'Mango', isActive: false },
//   { name: 'Poly', isActive: false },
//   { name: 'Ajax', isActive: true }, // delete
// ];

// const activeUser = users.find((user) => user.isActive);
// console.log(activeUser);

// console.log([1, 2, 3, 4, 5, 6].find((value) => value > 4));

// ========== flatMap ==========
// const arr = [1, 2, [3, 4]];
// console.log(arr.flat(3));

// const arr1 = ["it's Sunny in", '', 'California'];
// const arr2 = arr1.flatMap((x) => x.split(' '));
// console.log(arr2);

// ========== every ==========
// const numbers = [0, 2, 4, 6];
// const allEven = numbers.every((value) => value % 2 === 0);

// console.log(allEven);

// const users = [
//   { name: 'Mango', isActive: false },
//   { name: 'Poly', isActive: true },
//   { name: 'Ajax', isActive: false },
// ];

// const isAllActive = users.every((user) => user.isActive);
// console.log(isAllActive);

// const isSomeActive = users.some((user) => user.isActive);
// console.log(isSomeActive);

// ========== some ==========
// const numbers = [0, 1, 3, 5];
// const someEven = numbers.some((value) => value % 2 === 0);

// console.log(someEven);

// ========== reduce ==========
// const numbers = [1, 1, 1, 10, 20];
// // // let sum = 0; // sum += value

// const sum = numbers.reduce((acc, value) => {
//   return (acc += value);
// }, 0);

// console.log(sum);

// const cart = [
//   { name: 'printer', price: 100 },
//   { name: 'phone', price: 300 },
//   { name: 'notebook', price: 200 },
// ];

// const sum = cart.reduce((acc, obj) => acc + obj.price, 0);
// console.log(sum);

// ========== sort ==========
// const names = ['Peter', 'abby', 'Bobby', 'Abby'];
// names.sort();

// console.log(names);

// const numbers = [2, 1, 4, 3, 7, 6, 5, 10, -10, 0];
// numbers.sort();
// console.log(numbers); // [-10, 0, 1, 10, 2, 3, 4, 5, 6, 7]

// ========== Свой порядок сортировки ==========
// numbers.sort((a, b) => a - b);
// console.log(numbers); // [-10, 0, 1, 2, 3, 4, 5, 6, 7, 10]

// names.sort((a, b) => {
//   const v1 = a.toLowerCase();
//   const v2 = b.toLowerCase();

//   if (v1 < v2) return -1;
//   if (v1 > v2) return 1;

//   return 0;
// });
// console.log(names);

// ========== super custom sort ==========
// const numbers = [3, 1, 2];

// for (let i = 0; i < numbers.length; i++) {
//   let a = numbers[i];

//   for (let j = 0; j < numbers.length; j++) {
//     let b = numbers[j];

//     if (a < b) {
//       // swap
//       const temp = numbers[i];
//       numbers[i] = numbers[j];
//       numbers[j] = temp;

//       // swap 2
//       // [numbers[i], numbers[j]] = [numbers[j], numbers[i]];
//     }
//   }
// }

// console.log(numbers);

// ========== Цепочки методов массива ==========
// const text = 'abc'; // cba
// const reversedText = text.split('').reverse().join('');

// console.log(text);
// console.log(reversedText);

// const cart = [
//   { name: 'printer', price: 100 },
//   { name: 'phone', price: 300 },
//   { name: 'notebook', price: 100 },
// ];

// const names = cart.filter(({ price }) => price === 100).map(({ name }) => name);
// console.log(names);

// ===== example =====
// const arr = ['hello', [12, 34, ['some value', [777, ['finish']]]]];

// function getFlat(arr) {
//   const newArray = [];

//   for (let el of arr) {
//     if (!Array.isArray(el)) {
//       newArray.push(el);
//     } else {
//       return [...newArray, ...getFlat(el)];
//     }
//   }

//   return newArray;
// }

// console.log(getFlat(arr));
// console.log(arr.flat(4));
