// --- Codewars Link: https://www.codewars.com/kata/561e9c843a2ef5a40c0000a4/train/javascript
// --- Title: Gap in Primes
// --- Kyu: 5 kyu
// --- Date Solved: 11/10/25

// --- My Solution:
function isPrime(num) {
  if (num < 2) return false;
  for (let i = 2; i * i <= num; i++) {
    if (num % i === 0) return false;
  }
  return true;
}

function gap(g, m, n) {
  let lastPrime = 0;

  for (let i = m; i <= n; i++) {
    if (isPrime(i)) {
      if (lastPrime && i - lastPrime === g) {
        return [lastPrime, i];
      }
      lastPrime = i;
    }
  }
  return null;
}
/*

// My Complexity:
O(n^2)
--- Reflection & Struggle ---

Primary Struggle Tag: algorithim efficiency, what to loop through, prime numbers
Specific Note: gpt gave me idea of checking if prime number by using a function
Key Learning/Reinforcement: prime numbers, helper functions, temp values, returning null
*/

//Alternative Solution Link: 
