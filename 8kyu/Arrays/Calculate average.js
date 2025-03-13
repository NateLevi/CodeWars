//1
function findAverage(array) {
  return array.reduce((acc,cur)=> acc += cur / array.length,0)
}
