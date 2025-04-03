function rowWeights(array){
  const team1 = array.reduce((a,c,i) => i === 0 || i % 2 === 0 ? a += c : a,0)
  const team2 = array.reduce((a,c,i) => i % 2 !== 0 ? a += c : a,0)
  return [team1,team2]
}
/*
P: Array of positive integers(weights of people) 
R: New array where arr[0] = team 1 total, arr[1] = team 2
E: [13, 27, 49]-> [62, 27]
P: .reduce if index if odd or even 
*/
