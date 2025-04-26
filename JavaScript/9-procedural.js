'use strict';

// Procedural programming

const accumulator = (initial = 0) => ({ value: initial });
const add = (acc, x) => void (acc.value += x);
const value = (acc) => acc.value;

const acc = accumulator(5);
add(acc, 10);
add(acc, 2);
add(acc, 4);
console.log({ value: value(acc) }); // 21
