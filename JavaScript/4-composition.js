'use strict';

const { EventEmitter } = require('node:events');

class AddOnlySet {
  #set = null;
  #emitter = new EventEmitter();

  constructor(elements) {
    this.#set = new Set(elements);
  }

  get size() {
    return this.#set.size;
  }

  add(value) {
    this.#set.add(value);
    this.#emitter.emit('add', value);
  }

  on(name, listener) {
    this.#emitter.on(name, listener);
  }
}

// Usage

const set = new AddOnlySet(['uno', 'due']);
set.on('add', (value) => {
  console.log(`Added "${value}"`);
});
set.add('tre');
console.dir({ size: set.size });
