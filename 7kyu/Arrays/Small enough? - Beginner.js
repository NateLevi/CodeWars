function smallEnough(a, limit){
  return a.every(element=> element <= limit)
}
/*
P: a = array limit = value
R: return true or false if array are below or equal to limit
E: [50,150],250-> true
*/
