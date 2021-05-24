'use strict';

// const users = [
//   {
//     email: 'user1@mail.com',
//     password: '12345678',
//     name: 'User One',
//     phone: '555-666-7777',
//   },
//   {
//     email: 'user2@mail.com',
//     password: '87654321',
//     name: 'User Two',
//     phone: '555-888-9999',
//   },
//   {
//     email: 'user3@mail.com',
//     password: '87654321',
//     name: 'User Three',
//     phone: '555-888-9999',
//   },
// ];

// function sayHello(user) {
//   console.log(`Hello ${user.name}`);
// }

// const email = prompt('Please enter email');
// const password = prompt('Please enter password');

// for (let user of users) {
//   if (user.email === email && user.password === password) {
//     sayHello(user);
//     console.log('Enter accepted!');
//   }
// }

// ============ CAR object ============
// const car = {
//   isOn: false,
//   speed: 0,
//   maxSpeed: 200,

//   startEngine() {
//     this.isOn = true;
//   },

//   stopEngine() {
//     this.isOn = false;
//   },

//   setSpeed(value) {
//     if (!this.isOn) return;

//     this.speed = value > this.maxSpeed ? this.maxSpeed : value;
//   },
// };
// console.log(car);

// car.startEngine();
// console.log(car);

// car.setSpeed(1500);
// console.log(car);

// // car.speed = 500;
// // console.log(car);

// ======== Доступ к свойствам ========
// const obj2 = {};
// const obj3 = {};

// const obj = {
//   werg: 1,
//   sdf: 1,
//   mnbv: 1,
//   33: 1,
// };

// obj.qwertyuiopiuy = 1;
// obj[obj2] = 1;
// obj[obj3] = 5;

// console.log(obj);
// console.log(obj['werg']);
// console.log(obj['mnbv']);
// console.log(obj['33']);

// === hard ===
// const keys = Object.keys(obj);
// console.log(keys);

// let sum1 = 0;
// for (const key of keys) {
//   console.log(key, obj[key]);
//   sum1 += obj[key];
// }

// console.log('sum 1:', sum1);

// === easy ===
// const values = Object.values(obj);
// let sum2 = 0;

// for (const value of values) {
//   sum2 += value;
// }

// console.log('sum 2:', sum2);

// === mixed mode ===
// console.log(Object.keys(obj));
// console.log(Object.values(obj));
// console.log(Object.entries(obj));

// ==== delete ====
// console.log(obj);

// delete obj.werg;
// console.log(obj);

// delete obj['[object Object]'];
// console.log(obj);

// ===== reference =====
// const obj1 = { name: 'Bobby' };
// console.log('obj1:', obj1);

// // const obj2 = { ...obj1 };
// const obj2 = obj1;
// console.log('obj2:', obj2);

// obj1.name = 'Peter';
// console.log('obj1:', obj1);
// console.log('obj2:', obj2);

// const email = 'user@mail.com';
// const password = '12345678';

// const user = {
//   email, // email: email
//   password, // password: password

//   sayHello() {
//     console.log('this:', this);
//   },
// };

// user.sayHello();

// ====== for ... in ========
// const hotel = {
//   name: 'Resort Hotel',
//   stars: 5,
//   capacity: 100,
// };

// // Перебор ключей объекта hotel
// for (const key in hotel) {
//   console.log('Key: ', key);
// }

// const keys = Object.keys(hotel);
// for (const key of keys) {
//   console.log('Key: ', key);
// }

// ==== spread =====
// const numbers = [1, 2, 3, 4, 5, 6, 7, 8];
// console.log(Math.min(...numbers)); // 1, 2, 3, 4, 5, 6, 7, 8
// console.log(Math.max(...numbers));

// ==== copy array ====
// const arr1 = [1, 1, 1];
// const arr2 = [...arr1];

// arr1.push(2);

// console.log(arr1);
// console.log(arr2);

// ==== copy object ====
// const obj1 = { name: 'Bobby' };
// const obj2 = { ...obj1 };

// obj1.name = 'Peter';

// console.log(obj1);
// console.log(obj2);

// ===== rest ======
// function sum(a, b, ...rest) {
//   console.log(a + b);

//   console.log('rest:', rest);
// }

// sum(1, 1, 2, 2, 2, 2, 2, 6, 7, 8, 9);

// ========= example ======
const cart = {
  items: [],

  getItems() {
    return this.items;
  },

  add(product) {
    this.items.push({
      ...product,
      count: 1,
    });
  },

  remove(productName) {
    const newItems = [];

    for (const item of this.items) {
      if (item.name !== productName) {
        newItems.push(item);
      }
    }

    this.items = newItems;
  },

  clear() {
    this.items = [];
  },

  countTotalPrice() {
    let sum = 0;

    for (const item of this.items) {
      sum += item.price;
    }

    return sum;
  },

  increaseQuantity(productName) {
    const newItems = [];

    for (const item of this.items) {
      newItems.push(
        item.name === productName
          ? {
              ...item,
              count: item.count + 1,
            }
          : item,
      );
    }

    this.items = newItems;
  },

  decreaseQuantity(productName) {
    const newItems = [];

    for (const item of this.items) {
      newItems.push(
        item.name === productName
          ? {
              ...item,
              count: item.count - 1 < 1 ? 1 : item.count - 1,
            }
          : item,
      );
    }

    this.items = newItems;
  },
};

console.table(cart.getItems());
cart.add({ name: '🍎', price: 50 });
cart.add({ name: '🍋', price: 60 });
cart.add({ name: '🍓', price: 110 });
console.table(cart.getItems());

cart.remove('🍎');
console.table(cart.getItems());

console.log('total price:', cart.countTotalPrice());

cart.increaseQuantity('🍓');
cart.increaseQuantity('🍓');
cart.increaseQuantity('🍓');
cart.increaseQuantity('🍓');
cart.increaseQuantity('🍋');
console.table(cart.getItems());

cart.decreaseQuantity('🍋');
cart.decreaseQuantity('🍋');
cart.decreaseQuantity('🍋');
console.table(cart.getItems());

cart.clear();
console.table(cart.getItems());
