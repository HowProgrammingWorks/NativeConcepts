'use strict';

// Lexical Scope (environment)

const y = 'default';

const outer = () => {
  const x = 'outer';
  const f = (s) => s.length;

  console.log({ outter: { x, y: f(y) } });
  // x: 'outer', y: 7

  const middle = () => {
    const x = 'middle';
    const f = (s) => s.toUpperCase();
    {
      const y = 'block';
      console.log({ middle: { x, y: f(y) } });
      // x: 'middle', y: 'BLOCK'

      const inner = (x) => {
        const f = (s) => s;
        console.log({ inner: { x, y: f(y) } });
        // x: 'inner', y: 'block'
      };

      inner('inner');
    }
  };

  middle();
};

outer();
