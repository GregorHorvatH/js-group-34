// 'use strict';

// =========== closure ===========
// function count(x = 1) {
//   return function innerCount() {
//     console.log(x++);
//   };
// }

// console.log('------------ count1 ------------');
// const count1 = count(10);
// count1();
// count1();
// count1();
// count1();

// console.log('------------ count2 ------------');
// const count2 = count();
// count2();

// ======== this ========
const person1 = {
  name: 'Bobby',
  age: 15,
};

const person2 = {
  name: 'Peter',
  age: 20,

  sayBye() {
    console.log(this);

    const innerFn = () => {
      console.log('inner:', this);
    };

    innerFn();
  },
};

function sayHello() {
  console.log(this);
}

// sayHello.call(person1, 1, 2, 3, 4);
// sayHello.apply(person2, [1, 2, 3, 4, 5]);

// setTimeout(sayHello.bind(person1), 1000);
// setTimeout(sayHello.bind(person2), 2000);

person2.sayBye();
