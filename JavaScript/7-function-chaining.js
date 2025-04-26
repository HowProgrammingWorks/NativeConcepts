'use strict';

// Function chaining

const accumulator = (initial = 0) => {
  let sum = initial;
  const fn = (x) => {
    sum += x;
    return fn;
  };
  Object.defineProperty(fn, 'value', {
    get: () => sum,
  });
  return fn;
};

const acc = accumulator(5)(10)(2)(4);
console.log({ value: acc.value }); // 21
