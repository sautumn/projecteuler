// The prime factors of 13195 are 5, 7, 13 and 29.
//
// What is the largest prime factor of the number 600851475143 ?

const largestPrime = (n) => {
  // 0/1 are not prime numbers
  // No prime number greater than 5 ends in a 5.
  // Any number greater than 5 that ends in a 5 can be divided by 5.
  // To prove whether a number is a prime number,
  // first try dividing it by 2, and see if you get a whole number.
  // If you do, it can't be a prime number.
  // If you don't get a whole number, next try dividing it by
  // prime numbers: 3, 5, 7, 11 (9 is divisible by 3)
  // and so on, always dividing by a prime number (see table below).
  let primes = new Set();
  // To prove whether a number is a prime number,
  for (var i = 2; i <= n; i++) {
    console.log('begin:', i);
    let isPrime = false;
    let flag = true;
    // first try dividing it by 2, and see if you get a whole number.
    if (i % 2 !== 0 || i === 2) {
      console.log('not div by 2 or is 2: ',i);
      // If you don't get a whole number, next try dividing it by
      // prime numbers: 3, 5, 7, 11 (9 is divisible by 3)
      if (primes.size === 0 ) {
        primes.add(i);
      }
      for (let item of primes){
        console.log('check i against primes: ',i, 'prime being checked: ',item);

        if (i % item === 0 || primes.size === 0) {
          console.log('item', item)
          console.log('is divisible by primes, ended');
          flag = false;
        }
        // break;
      }
      if (!flag) {
        console.log('not divisible by primes, added to primes', i);
        primes.add(i);
      }
    }
  }
  return primes.keys();
};

console.log(largestPrime(10));
// console.log(largestPrime(600851475143));
