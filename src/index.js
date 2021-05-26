'use strict';

// function getHotelNameAndCapacity({
//   freeSpaces: capacity,
//   name = 'No Name Hotel',
// }) {
//   return capacity
//     ? `${name} has ${capacity} rooms free`
//     : `${name} has no free rooms`;
// }

// const getHotelNameAndCapacity = ({
//   freeSpaces: capacity,
//   name = 'No Name Hotel',
// }) =>
//   capacity ? `${name} has ${capacity} rooms free` : `${name} has no free rooms`;

// const hotel1 = {
//   name: 'Resort Hotel 1',
//   stars: 5,
// };
// const hotel2 = {
//   name: 'Resort Hotel 2',
//   stars: 5,
//   freeSpaces: 55,
// };
// const hotel3 = {
//   name: 'Resort Hotel 3',
//   stars: 5,
//   freeSpaces: 78,
// };

// console.log(getHotelNameAndCapacity(hotel1));
// console.log(getHotelNameAndCapacity(hotel2));
// console.log(getHotelNameAndCapacity(hotel3));

// ===== arrays =====
// const arr = ['Bobby', 'Peter', 'John'];
// const [firstPerson, secondPerson] = arr;

// console.log(firstPerson);
// console.log(secondPerson);

// ===== array react example =====
// let userName = '';
// const setUserName = (name) => {
//   userName = name;
// };

// console.log(userName);
// setUserName('Bobby');
// console.log(userName);

// const useState = [userName, setUserName];
// console.log(useState);

// const [value, setValue] = useState;
// console.log(value);
// console.log(setValue);

// ===== array swap =====
// let a = 5;
// let b = 10;

// console.log('-----------');
// console.log('a:', a);
// console.log('b:', b);

// // const temp = a;
// // a = b;
// // b = temp;

// [a, b] = [b, a];

// console.log('-----------');
// console.log('a:', a);
// console.log('b:', b);

// ======= object.key ========
// const obj = {
//   name: 'Bobby',
// };

// console.log(obj);
// console.log(obj.age); // undefined

// obj.age = 15;
// console.log(obj);

// ======== example ========
// function add(...args) {
//   return args.reduce((sum, value) => {
//     return sum + value;
//   });
// }

// console.log(add(1, 1, 1, 1, 1, 1));

// ====== https://medium.com/webbdev/js-2b0820b3788f ======

// ======== example 1 ========
// const p1 = 'racecar';
// const p2 = 'table';
// const p3 = 'Was it a cat I saw';
// const p4 = 'около миши молоко';

// function isPalindrome(str) {
//   const text = str.toLowerCase().replaceAll(' ', '');

//   // const arr = text.split('');
//   // const reversedArray = arr.reverse();
//   // const reversedText = reversedArray.join('');

//   const reversedText = text.split('').reverse().join('');

//   return reversedText === text;
// }

// console.log(isPalindrome(p1));
// console.log(isPalindrome(p2));
// console.log(isPalindrome(p3));
// console.log(isPalindrome(p4));

// ======== example 2 ========
// 1
// 2
// fizz
// 4
// buzz

// function fizzBuzz(number) {
//   for (let i = -15; i <= number; i++) {
//     if (i % 3 === 0 && i % 5 === 0) {
//       console.log('fizzBuzz');
//       continue;
//     }

//     if (i % 3 === 0) {
//       console.log('fizz');
//       continue;
//     }

//     if (i % 5 === 0) {
//       console.log('buzz');
//       continue;
//     }

//     console.log(i);
//   }
// }

// fizzBuzz(15);

// ======= Анаграмма =======
// const w1 = 'finder';
// const w2 = 'friend';

// function getLetters(word) {
//   const result = {};

//   for (let i = 0; i < word.length; i++) {
//     const letter = word[i];

//     result[letter] = result[letter] ? result[letter] + 1 : 1;
//   }

//   return result;
// }

// function isAnagram(str1, str2) {
//   const letters1 = getLetters(str1);
//   const letters2 = getLetters(str2);

//   const items1 = Object.entries(letters1);
//   const items2 = Object.entries(letters2);

//   const haveSameLength = items1.length === items2.length;
//   let containAllWords = true;

//   if (containAllWords) {
//     for (let i = 0; i < items1.length; i++) {
//       const [key, value] = items1[i];
//       const secondValue = letters2[key];

//       if (value !== secondValue) {
//         containAllWords = false;
//         break;
//       }
//     }
//   }

//   return haveSameLength && containAllWords; // false
// }

// console.log(isAnagram(w1, w2));

// ========= Анаграмма 2 =========
// const w1 = 'finder';
// const w2 = 'friend';

// const sortedStr1 = w1.split('').sort().join('');
// const sortedStr2 = w2.split('').sort().join('');

// console.log(sortedStr1 === sortedStr2);

// ======== sort ========
const arr = [3, 2, 5, 1, 4, 10, -3, 100];
arr.sort((a, b) => a - b);

console.log(arr);
