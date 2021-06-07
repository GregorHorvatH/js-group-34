'use strict';

// ======= constructor =======
// const Human = function (name, age) {
//   this.name = name; // string
//   this.age = age; // number

//   this.sayHello = function () {
//     console.log(`Hello ${this.name}`);
//   };
// };

// const bobby = new Human('Bobby', 15);
// const peter = new Human('Peter', 20);

// console.log(bobby);
// console.log(peter);

// bobby.sayHello();
// peter.sayHello();

// =========== bank account ========
// function Account(number, amount = 0, currency) {
//   this.number = number;
//   this.amount = amount;
//   this.currency = currency;

//   // +
//   this.add = function (value) {
//     this.amount += value;
//   };

//   // -
//   this.withdrawal = function (value) {
//     this.amount -= value;
//   };
// }

// // instance
// const account1 = new Account(26001233455, 100, 'USD');
// const account2 = new Account(11111111111, 50, 'EUR');

// console.log('--- balance ---');
// console.log(account1);
// console.log(account2);

// console.log('--- add ---');
// account1.add(100);
// account2.add(1000);
// console.log(account1);
// console.log(account2);

// console.log('--- withdrawal ---');
// account1.withdrawal(200);
// account2.withdrawal(2000);
// console.log(account1);
// console.log(account2);

// ====== closure / incapsulation ======
// const counter = function (value = 0) {
//   return function () {
//     console.log(value++);
//   };
// };

// const counter1 = counter();
// counter1(); // 0
// counter1(); // 1
// counter1(); // 2
// counter1(); // 3
// counter1(); // 4

// console.log(counter1.value);
// counter1.value = 500;
// counter1(); // 5

// ===== kahoot question =====
const a = {};
const b = { key: 'b' };
const c = { key: 'c' };

// console.log(a);
// console.log(b);
// console.log(c);

// console.log(b.toString());

a[b] = 1; // a["[object Object]"] = 1
a[c] = 2; // a["[object Object]"] = 2
a['[object Object]'] = 3;

console.log(a);
console.log(a[b]); // a["[object Object]"]
