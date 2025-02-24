/*
Task
You get an array of numbers, return the sum of all of the positives ones.

Example
[1, -4, 7, 12] => 
1
+
7
+
12
=
20
1+7+12=20
Note
If there is nothing to sum, the sum is default to 0.
*/
function positiveSum(arr) {
  const sum = arr.reduce((acc,cur)=> {
    if(cur > 0){
      return acc += cur
    }
    else{
      return acc
    }
    },0)
  return sum
  }
/*
P: array of numbers
R: return the sum of all the positive ones
E: [1,-3,2,4] -> 7
*/
