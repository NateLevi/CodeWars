// --- Codewars Link: https://www.codewars.com/kata/55d5434f269c0c3f1b000058/train/javascript
// --- Title: Triple trouble
// --- Kyu: 6 kyu
// --- Date Solved: 12/8/25 

/*
P: integers into num1 and num2
R: 1 if theres a straight triple of a digit in place in num1 and a double of the same digit in num2
E: num1 = 350999 num2 = 20499 --> 1
P: 
*/

// --- My Solution:
function tripledouble(num1, num2) {
  let nums1arr = String(num1).split('').map(Number)
  let nums2arr = String(num2).split('').map(Number)
  let num = []
  for(let i = 0; i < nums1arr.length;i++){
    if(nums1arr[i - 1] === nums1arr[i] && nums1arr[i + 1] === nums1arr[i]){
      num.push(nums1arr[i])
    }
  }
    for(let i = 0; i < nums2arr.length;i++){
    for(let j = 0; j < num.length;j++){
      if(nums2arr[i] === num[j] && nums2arr[i + 1] === num[j]){
      return 1
    }
  }
  }
  return 0
}
/*

// My Complexity:

--- Reflection & Struggle ---

Primary Struggle Tag: time complexity, brain fog
Specific Note: 
Key Learning/Reinforcement: 
*/

//Alternative Solution Link: 
function tripledouble(num1, num2) {
  let s1 = String(num1)
  let s2 = String(num2)

  // scan num1; for every triple found, check num2 immediately
  for (let i = 0; i < s1.length - 2; i++) {
    if (s1[i] === s1[i + 1] && s1[i] === s1[i + 2]) {
      let digit = s1[i]

      // look for a double of the same digit in num2
      for (let j = 0; j < s2.length - 1; j++) {
        if (s2[j] === digit && s2[j] === s2[j + 1]) {
          return 1
        }
      }
    }
  }

  return 0
}
