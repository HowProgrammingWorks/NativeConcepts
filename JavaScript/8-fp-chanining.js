'use strict';

// Functional programming chaining

const accumulator = (sum = 0) => {
  const fn = (x) => accumulator(sum + x);
  Object.defineProperty(fn, 'value', {
    get: () => sum,
  });
  return fn;
};

const acc = accumulator(5)(10)(2)(4);
console.log({ value: acc.value }); // 21
