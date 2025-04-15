function cleanedCounts(data) {
  let arr = [data[0]];

  for (let i = 1; i < data.length; i++) {
    if (data[i] < arr[i - 1]) {
      arr.push(arr[i - 1]);
    } else {
      arr.push(data[i]);
    }
  }

  return arr;
}

/*
P: array of numbers
R: Create non-decreasing array
E: [1,1,2,2,3,3,1,2] -> [1,1,2,2,3,3,3,3]
P: Loop through the array if current element is > the next element then replace the next one with current one
    splice
    loop and push?
*/
