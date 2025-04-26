'use strict';

// Object chaining

class Accumulator {
  #value = 0;

  constructor(initial = 0) {
    this.#value = initial;
  }

  add(x) {
    this.#value += x;
    return this; // chaining
  }

  get value() {
    return this.#value;
  }
}

const acc = new Accumulator(5).add(10).add(2).add(4);
console.log({ value: acc.value }); // 21
