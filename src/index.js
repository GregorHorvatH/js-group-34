'use strict';

// ========= class =========
function LegacyAnimal(name) {
  this.name = name;

  this.walk = function () {
    console.log(`${this.name} is walking`);
  };
}

// class Animal {
//   constructor({ name = 'Nemo' }) {
//     this.name = name;
//   }

//   walk() {
//     console.log(`${this.name} is walking`);
//   }
// }

// class Dog extends Animal {
//   constructor(props) {
//     const { name, age } = props;
//     super(props);

//     this.age = age;
//   }

//   bark() {
//     console.log('bark-bark!');
//   }
// }

// const someAnimal0 = new LegacyAnimal('Bobik');
// const someAnimal1 = new Animal('Tuzik');

// console.log(someAnimal0);
// console.log(someAnimal1);

// someAnimal0.walk();
// someAnimal1.walk();

// const strelka = new Dog({
//   name: 'Strelka',
//   age: 3,
// });
// strelka.walk();
// strelka.bark();

// console.log(strelka);

// ========= Car =========
class Car {
  #speed = 0;
  #isOn = false;

  static sum(a, b) {
    return a + b;
  }

  constructor({ maxSpeed = 0 }) {
    this.maxSpeed = maxSpeed;
    // this.speed = 0;
    // this.isOn = false;
  }

  turnOn() {
    this.isOn = true;
  }

  turnOff() {
    this.isOn = false;
  }

  setSpeed(value) {
    if (value <= this.maxSpeed) {
      this.#speed = value;
    } else {
      this.#speed = this.maxSpeed;
    }
  }

  get speed() {
    return this.#speed;
  }

  set speed(value) {
    if (value <= this.maxSpeed) {
      this.#speed = value;
    } else {
      this.#speed = this.maxSpeed;
    }
  }

  get isOn() {
    return this.#isOn;
  }

  set isOn(value) {
    if (typeof value === 'boolean') {
      this.#isOn = value;
    }
  }
}

const car1 = new Car({ maxSpeed: 100 });
console.log(car1);

car1.turnOn();
console.log(car1);

// // car1.setSpeed(88);
// // console.log(car1);

// car1.speed = 200;
// console.log(car1.speed);

// car1.isOn = 34567;
// console.log(car1);

class BMW extends Car {}

const bmw1 = new BMW({ maxSpeed: 300 });
bmw1.speed = 200;
console.log(bmw1);

console.log(Car.sum(1, 1));

// ========== Прототип ==========
// const animal = { eats: true };
// const dog = Object.create(animal);
// dog.barks = true;

// console.log('dog.barks:', dog.barks); // true
// console.log('dog.eats:', dog.eats); // true

// function LegacyAnimal(name) {
//   this.name = name;
// }
// LegacyAnimal.prototype.walk = function () {
//   console.log(`${this.name} is walking`);
// };

// const animal1 = new LegacyAnimal('Tuzik');
// console.log(animal1);

// function Dog({ name, age }) {
//   LegacyAnimal.call(this, name); // super

//   this.age = age;
// }

// Dog.prototype = Object.create(LegacyAnimal.prototype);
// Dog.prototype.constructor = Dog;

// Dog.prototype.walk = function () {
//   console.log(`${this.name} is walking on 4 legs`);
// };

// const strelka = new Dog({
//   name: 'Strelka',
//   age: 3,
// });
// console.log(strelka);

// strelka.walk();
// animal1.walk();
