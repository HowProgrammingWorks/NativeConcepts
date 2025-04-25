'use strict';

const compose = (f, g) => (x) => f(g(x));
const pipe = (f, g) => (x) => g(f(x));

const square = (x) => x * x;
const double = (x) => x * 2;

const fc = compose(square, double);
console.log(fc(5));

const fp = pipe(square, double);
console.log(fp(5));
