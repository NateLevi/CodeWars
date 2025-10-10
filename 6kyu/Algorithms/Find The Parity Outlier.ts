// --- Codewars Link: 
// --- Title: Find The Parity Outlier
// --- Kyu: 6 kyu
// --- Date Solved: 10/10/25

/*
P: integers = array of at least 3 elements
R: if all integers are even find N, the outlier and vice versa
E: [2, 4, 0, 100, 4, 11, 2602, 36] -->  11 (the only odd number)
P: Loop through array, get the length of odd and even, if one of them is less, then filter out that one and return it
*/

// --- My Solution:
function findOutlier(integers){

  let evenCount = integers.filter(e => e % 2 === 0).length
  let oddCount = integers.filter(e => e % 2 !== 0).length
  
  if(evenCount > oddCount){
    return integers.filter(e => e % 2 !== 0)[0]
  }
  else{
    return integers.filter(e => e % 2 === 0)[0]
  }
  
}
/*
--- Reflection & Struggle ---

Primary Struggle Tag: filter
Specific Note: 
Key Learning/Reinforcement: using filter method
*/

//Alternative Solution Link: 
function findOutlier(int){
  var even = int.filter(a=>a%2==0);
  var odd = int.filter(a=>a%2!==0);
  return even.length==1? even[0] : odd[0];
}
