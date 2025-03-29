function sumOfMinimums(arr) {
  return [...arr.map(e=> e.sort((a,b) => a - b)[0] )].reduce((a,c)=> c += a, 0)
}
