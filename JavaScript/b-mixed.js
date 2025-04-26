'use strict';

// Mixed concerns

class Accumulator {
  #value = 0;
  #listeners = new Set();

  constructor(initial = 0) {
    this.#value = initial;
  }

  add(x) {
    const value = (this.#value += x);
    for (const fn of this.#listeners) fn(value);
    return this;
  }

  get value() {
    return this.#value;
  }

  subscribe(callback) {
    this.#listeners.add(callback);
    const unsubscribe = () => this.#listeners.delete(callback);
    return unsubscribe;
  }
}

const acc = new Accumulator(5);
const unsubscribe = acc.subscribe((val) => {
  console.log('Value changed:', val);
});
acc.add(10);
acc.add(2);
acc.add(4);
console.log({ value: acc.value });
unsubscribe();
