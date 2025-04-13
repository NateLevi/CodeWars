function solve(s){
  const arr = s.match(/\d+/g)
  return Math.max(...arr)
}
/*
P: string of lowercase letters and numbers
R: compare number grooupings and return largest number
E: solve("gh1234cdrea32444")-> 32444
P: 
*/
