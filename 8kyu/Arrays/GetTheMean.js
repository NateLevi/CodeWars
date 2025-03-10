//1
function getAverage(marks){
  return Math.floor(marks.reduce((acc,cur) => acc + cur,0)/marks.length)
}
//2
const getAverage = marks => Math.floor(marks.reduce((acc,cur)=>acc += cur,0)/marks.length)
