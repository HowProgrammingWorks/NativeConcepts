'use strict';

// Pure function
// - No side-effects:
//   Does not modify external state, global variables, DOM, etc.

const add = (a, b) => a + b; // pure
console.log(add(10, 20));

let count = 0;
const inc = () => ++count; // side-effects
console.log(`First call: ${inc()}`); // 1
console.log(`Second call: ${inc()}`); // 2

// - Deterministic:
//   Given the same inputs, always returns the same output

const square = (x) => x * x;
console.log(`square(3) = ${square(3)}`); // always 9

// - No incoming data mutation:
//   Does not mutate parameters and data structures

const addItem = (list, item) => list.push(item); // mutation
const extend = (list, item) => [...list, item]; // immutable

const list1 = [1, 2];
addItem(list1, 5);
console.log({ list1 });
// { list1: [ 1, 2, 5 ] }
const list3 = extend(list1, 7);
console.log({ list3 });
// { list3: [ 1, 2, 5, 7 ] }

// - Referential Transparency:
//   Expression can be replaced with its value without changing the program

const double = (x) => x * 2;
const f = () => double(5) === 10;
console.log(`${f} -> ${f()}`); // true

// - No Dependencies on External State
//   Result is not affected by external variables, time, randomness, I/O.
