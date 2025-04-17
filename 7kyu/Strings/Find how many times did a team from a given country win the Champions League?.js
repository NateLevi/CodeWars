function countWins(winnerList, country) {
  
  return winnerList.reduce((a,c)=> c.country === country ? a += 1 : a,0)
  
}
/*
P: winner list = array of objects country = a string
R: number of times a team from the given country has won, return 0 if no wins
E: countWins(winnerList1, 'Spain') => should return 2
P: Use reduce to grab the amount of times the country appears and return that number?
*/
