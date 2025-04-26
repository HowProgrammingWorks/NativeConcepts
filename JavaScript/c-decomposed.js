'use strict';

// Decompose and use class composition

const { EventEmitter } = require('events');

class Accumulator {
  #value = 0;
  #events = new EventEmitter();

  constructor(initial = 0) {
    this.#value = initial;
  }

  add(x) {
    this.#value += x;
    this.#events.emit('change', this.#value);
    return this;
  }

  get value() {
    return this.#value;
  }

  subscribe(listener) {
    this.#events.on('change', listener);
    return () => this.#events.off('change', listener);
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
