'use strict';

// No closure

const getValue = () => 5;

const f1 = (x) => {
  const result = { getValue, x };
  return result;
};

const res = f1(10);
console.log({ res, value: res.getValue() });

// Return closure

const f2 = (x) => {
  const getValue = () => 5 + x;
  return getValue;
};

const g = f2(10);
const value = g(5);
console.log({ value });

// Nested arrows

const add = (x) => (y) => {
  const z = x + y;
  console.log(`${x} + ${y} = ${z}`);
  return z;
};

const sum = add(3)(6);
console.log({ sum });
