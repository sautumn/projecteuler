const _ = require ('lodash');
// If we list all the natural numbers below 10 that are multiples of 3 or 5,
// we get 3, 5, 6 and 9. The sum of these multiples is 23.
//
// Find the sum of all the multiples of 3 or 5 below 1000.

const multiples3and5 = () => {
  let sum = 0;
  for (let i = 0; i < 1000; i++) {
    (i % 3 === 0 || i % 5 === 0) ? sum += i : null;
  }
  return sum;
};

const x = _.sum(_.filter(_.range(1000), (x) => (x % 3 === 0 || x % 5 === 0)));

console.log(multiples3and5());
console.log(x);
