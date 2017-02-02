// The prime factors of 13195 are 5, 7, 13 and 29.
//
// What is the largest prime factor of the number 600851475143 ?

const findLargestPrimeLessThanN = (n) => {
  let primes = new Set();
  // 0/1 are not prime numbers
  if (n === 0 || n === 1) {
    return null;
  }
  for (var i = 2; i <= n; i++) {
    let isPrime = true;
    // To prove whether a number is a prime number,
    // first try dividing it by 2, and see if you get a whole number.
    if (i % 2 !== 0) {
      // If you don't get a whole number, next try dividing it by
      // prime numbers: 3, 5, 7, 11 (9 is divisible by 3)
      if (primes.size > 0) {
        for (let item of primes) {
          if (i % item === 0) {
            isPrime = false;
            break;
          }
        }
      }
      if (isPrime) {
        primes.add(i);
      }
    }
  }
  return Math.max(...primes.keys());
};

const findLargestPrimeofN = (n) => {
  let primes = new Set(),
      isPrime = true;
  if (n <= 1) {
    return 'No primes numbers below 2';
  }
  for (var i = 2; i <= n; i++) {
    if (n % i === 0) {
      if (primes.size > 0) {
        for (let item of primes) {
          if (i % item === 0) {
            isPrime = false;
            break;
          }
        }
      }
      if (isPrime) {
        primes.add(i);
      }
    }
  }
  return Math.max(...primes.keys());
};

const assert = (test, expected, errorMessage) => {
  if (test === expected) {
    console.log(`Test passed. ${test} = ${expected}.`);
    return 'Test passed';
  }
  console.log(`ERROR: ${errorMessage}`);
  return;
};

assert(findLargestPrimeofN(13195), 29, 'Largest prime should = 29');
// inefficient for large numbers
// console.log(findLargestPrimeofN(600851475143));
