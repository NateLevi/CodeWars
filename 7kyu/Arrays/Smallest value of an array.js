function min(arr, toReturn) { 
    const min = Math.min(...arr)
    const num = arr.indexOf(min)
    for (let i=0; i<arr.length;i++){
      if(toReturn === 'value'){
        return min
      }
      else{
        return num
      }
    }
}
/*
P: array and value or index
R: return smallest value of an array or the index of that value dependent on toReturn
E: 
*/
