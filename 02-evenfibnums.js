// Each new term in the Fibonacci sequence is generated by adding the previous
// two terms. By starting with 1 and 2, the first 10 terms will be:
//
// 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, ...
//
// By considering the terms in the Fibonacci sequence whose values
// do not exceed four million, find the sum of the even-valued terms.

// memoizing reduces the time complexity to O(n)
// basic recursive Fibonacci solution for n items

// const fibonacciSequence = (n, memo) => {
//   memo = memo || {};
//   if ( n < 0 ) {
//     return null;
//   }
//   if ( n <= 1 ) {
//     return 1;
//   }
//   return memo[n] = fibonacciSequence(n-1, memo) + fibonacciSequence(n-2, memo);
// };

// iterative solution
// const fibonacciIterative = (n) => {
//   let total = [];
//   let a = 0,
//       b = 1;
//   for (var i = 1; i <= n; i++) {
//     let c = a + b;
//     a = b;
//     b = c;
//     total.push(b)
//   }
//   return total;
// };

const fibonacciIterativeSum = (n) => {
  let total = 0;
  let a = 0,
      b = 1;
  for (var i = 1; i <= n; i++) {
    let c = a + b;
    a = b;
    b = c;
    if ( c % 2 === 0 ) {
      console.log(c)
      total += c;
    }
  }
  return total;
};

console.log(fibonacciIterativeSum(100));