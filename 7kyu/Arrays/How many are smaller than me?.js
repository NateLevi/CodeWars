function smaller(nums) {
  let arr = []
  
for (let i = 0; i < nums.length; i++) {
    let count = 0;
  
for (let j = i + 1; j < nums.length; j++) {
    if (nums[j] < nums[i]) {
      count++;
    }
  
  }
  arr.push(count)
  }
  return arr
}

/*
P: array
R: new array of the amount of numbers smaller than arr[i] to the right
E: [4,5,2,1]->[2,2,1,0]
P: loop through array, store how many are smaller than it save that number
*/
