function bubble(arr) { 
  let snapShot = []
  
  let swapped;
do {
  swapped = false;
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] > arr[i + 1]) {
      [arr[i], arr[i+1]] = [arr[i+1], arr[i]];
      snapShot.push([...arr]);
      swapped = true;
    }
  }
} while (swapped);

  return snapShot
}
/*
P: array of randomized numbers
R: using bubble sort, return array of ordered numbers with snapshots of each order
E: [1,2,3,4]-> [[1,2,3,4]]
P: Loop through if the element + 1 is less then the previous element move it
*/
