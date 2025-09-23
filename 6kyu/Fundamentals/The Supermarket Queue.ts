// --- Codewars Link: 
// --- Title: The Supermarket Queue
// --- Kyu: 6 kyu
// --- Date Solved: 9/23/25

/*
P: customers = array of integers representing customers, value is time to check out, n = integer, number of checkout tills
R: return integer, total time required
E:
P: add elements together then divide by n
*/

// --- My Solution:
function queueTime(customers, n) {
  
  let queue = []
  for(let i=0; i < n;i++){
    queue.push(0)
  }
  
  for(let i = 0; i < customers.length;i++){
    
    let min = queue.indexOf(Math.min(...queue))
    
    if(i === min){
      
    }
    queue[min] += customers[i]
    
  }
  return Math.max(...queue)

}
/*
--- Reflection & Struggle ---

Primary Struggle Tag: understanding the question and how to create a queue.
Specific Note: Used gpt to help me
Key Learning/Reinforcement: Use for of loop for ease, use fill method and new Array. 
*/

//Alternative Solution Link: 
function queueTime(customers, registers) {
  let arr = [];

  for(let i = 0; i < registers; i++)
    arr[i] = 0;

  for(let i = 0; i < customers.length; i++) {
    arr[0] += customers[i];
    arr.sort((a, b) => a - b);
  }

  return arr[arr.length - 1];
}
