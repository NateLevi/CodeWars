function points(games) { 
  let sum = 0;
  for(let i=0; i < games.length; i++){
    const firstElement = games[i]
    const firstNum = parseInt(firstElement.split(':')[0])
    const secNum = parseInt(firstElement.split(':')[1])
    if(firstNum > secNum){
      sum += 3
    }
    else if(firstNum < secNum){
      sum += 0
    }
    else if(firstNum === secNum){
      sum += 1
    }
  }
  return sum
}
/*
P: array of strings with a "x:y" format
R: return number of points x got 
E: ["3:1"]
*/
