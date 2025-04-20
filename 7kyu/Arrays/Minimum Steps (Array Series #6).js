function minimumSteps(numbers, value){
  let nums = numbers.sort((a,b)=> a - b)
  
  let loopAmount = 0
  
  let numAmount = 0 
    
  for(let i = 0 ; i < nums.length; i++) {
    numAmount += nums[i]
    if(numAmount >= value){
      return loopAmount
    }
    loopAmount++
}

  
}
/*
P: numbers = array of integers, 
R: return 
E: 
P: sort array, add up smallest numbers until the sum becomes >= value, count how many loops it takes and return that value
*/
