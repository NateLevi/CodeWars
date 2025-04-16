function findMissingNumbers(arr) { 
  let newArr = [];
  
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i + 1] - arr[i] > 1) {
      for (let j = arr[i] + 1; j < arr[i + 1]; j++) {
        newArr.push(j);
      }
    }
  }

  return newArr;
}

/*
P: array of numbers every preceding num is smaller than one following
R: return missing numbers of arr
E: [-3,-1,2,4]-> [-2,0,1,3]
P: Loop through array, find the num between the number and push to a new array?
*/
