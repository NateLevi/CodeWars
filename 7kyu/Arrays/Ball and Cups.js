function cupAndBalls(b, arr){
  for(let i=0;i<arr.length;i++){
    const [first,second] = arr[i]
    
    if(second === b){
      b = first
    }
    else if(first === b){
      b = second
    }
  }
    return b

};
/*
P: b = cup with ball, 
R: number of cup with ball after swithcs
E: (2,[1,2],[1,3]) -> 3
*/
