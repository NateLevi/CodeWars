function countSheeps(sheep) {
  let sum = 0;
  for(let i=0; i<sheep.length;i++){
    sheep[i] === true ? sum += 1 : null;
  }
  return sum
}
/*
P: array of boolean values
R: number representing the trues
E: [true,false,true]-> 2
*/
