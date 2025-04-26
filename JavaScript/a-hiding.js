'use strict';

// Procedural programming with hiding

const state = new Map();
const VALUE = Symbol('value');

const accumulator = (initial = 0) => {
  const acc = {};
  state.set(acc, { [VALUE]: initial });
  return acc;
};

const add = (acc, x) => {
  const data = state.get(acc);
  if (data) data[VALUE] += x;
};

const value = (acc) => {
  const data = state.get(acc);
  return data ? data[VALUE] : undefined;
};

const acc = accumulator(5);
add(acc, 10);
add(acc, 2);
add(acc, 4);
console.log({ value: value(acc) }); // 21
