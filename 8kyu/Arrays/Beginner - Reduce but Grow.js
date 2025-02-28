function grow(x){
  return x.reduce((acc,curr)=> acc *= curr, 1)
}
