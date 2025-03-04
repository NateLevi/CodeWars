function stairsIn20(s){
  const allSteps = s.flat()
  const sum = allSteps.reduce((acc,cur) => acc += cur, 0)
  const twentyYearTotal = sum * 20
  return twentyYearTotal
  }

/*
P: array of days of the week which contain arrays of numbers which represents the sum of stairs in a year
R: The amount of stairs he climbs in 20years
E: number
*/
