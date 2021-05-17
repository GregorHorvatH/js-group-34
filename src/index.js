'use strict';

// const arr = [1, 1, 1, 1];
// // arr = [2, 2, 2, 2]; // Assignment to constant variable.

// arr.push(5);

// console.log(arr);

// ======= split =======
// const str = 'позволяет превратить строку в массив';
// const arr = str.split(' ');

// console.log(arr);

// // ======= join =======
// // берет массив и склеивает его в строку
// const newArr = arr.join(' - ');
// console.log(newArr);

// ====== push / pop =======
// const arr = [1, 2, 3, 4];
// console.log('arr:', arr);

// arr.push(5);
// console.log('arr:', arr);

// const x = arr.pop();
// console.log('arr:', arr);
// console.log('x:', x);

// ======= sum =======
// const arr = [1, 2, 3, 4, 5, 6]; // sum = 21
// let sum1 = 0;
// let sum2 = 0;

// for (let i = 0; i < arr.length; i++) {
//   sum1 += arr[i];
// }

// for (const value of arr) {
//   sum2 += value;
// }

// console.log('sum 1:', sum1);
// console.log('sum 2:', sum2);

// ========= max / min =========
// const arr = [3, 1, 4, 16, 2, -6, 5]; // max = 16
// // const arr = [-16, -1, -5]; // max = -1
// let max = arr[0]; // -1
// let min = arr[0]; // 3

// for (const value of arr) {
//   if (value > max) { // 2 > 16 = false
//     max = value;
//   }

//   if (value < min) {
//     min = value;
//   }
// }

// console.log('max:', max);
// console.log('min:', min);

// ========= reverse =========
// const str = 'структура данных для хранения';
// // const reversedArr = str.split('').reverse().join('');

// const letters = str.split('');
// const newArr = [];

// for (let i = letters.length - 1; i >= 0; i--) {
//   newArr.push(letters[i]);
// }

// const reversedArr = newArr.join('');

// console.log(str);
// console.log(reversedArr);

// ======== first letter uppercase =======
// const str = 'структура данных для хранения';
// const words = str.split(' ');

// for (let i = 0; i < words.length; i++) {
//   if (i > 0) {
//     const word = words[i];
//     const newWord = word[0].toUpperCase() + word.slice(1);

//     words[i] = newWord;
//   }
// }

// const newStr = words.join(' ');

// console.log(str);
// console.log(words);
// console.log(newStr);

// ========== polindrom ==========
// const str0 = 'Tenet'; // true
// const str1 = 'Лёша на полке клопа нашёл'; // true
// // const str2 = 'Искать такси'; // true
// // const str3 = 'Существуют разновидности'; // false

// const str = str1.toLowerCase().replaceAll(' ', '');
// const letters = str.split('');
// const newArr = [];

// for (let i = letters.length - 1; i >= 0; i--) {
//   newArr.push(letters[i]);
// }

// for (let i = 0; i < str1.length; i++) {
//   if (str1[i] === ' ') {
//     newArr.splice(i, 0, ' ');
//   }
// }

// let reversedStr = newArr.join('');
// const isPolindrome = str1.toLowerCase() === reversedStr;

// console.log(str1);
// console.log(reversedStr);
// console.log('isPolindrome:', isPolindrome);

// =========== concat ==========
// const oldClients = ['Mango', 'Ajax', 'Poly', 'Kiwi'];
// const newClients = ['Monkong', 'Singu'];

// const allClients = oldClients.concat(newClients);
// const allClients2 = [1, 2, 3, ...oldClients, 4, 5, 6, ...newClients];

// console.log(allClients);
// console.log(allClients2);

// ======== Переопределение ======
// const clients = ['Mango', 'Poly', 'Ajax'];
// console.log(clients);

// // Значение элемента можно заменить
// clients[2] = 'Kiwi';
// console.log(clients);

// for (let value of clients) {
//   value = 'tro-lo-lo';
// }
// console.log(clients);

// for (let i = 0; i < clients.length; i++) {
//   clients[i] = 'tro-lo-lo';
// }
// console.log(clients);

// ======== sort ======
// const arr = [3, 1, 4, 2, 0];

// for (let i = 0; i < arr.length; i++) {
//   for (let j = 0; j < arr.length; j++) {
//     if (arr[j] > arr[i]) {
//       const x = arr[i];

//       arr[i] = arr[j];
//       arr[j] = x;
//     }
//   }
// }

// console.log(arr);

// ======== split ======
const str = 'ertert dfgdg, sdfsfa!';
const arr = str.split(' ');

console.log(arr);
console.log(str.indexOf(' ')); // 6
console.log(str.indexOf(' ', 7)); // 13
console.log(str.indexOf(' ', 14)); // -1
