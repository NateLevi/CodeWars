function catMouse(x){
  const count = x.split('').reduce((a,c)=> c === "." ? a + 1 : a + 0,0)
  
  return count > 3 ? "Escaped!" : "Caught!"
  
}
/*
P: string starting with c"."m
R: if there are more then three . then return Escaped! else Caught!
E: "C..m"-> "Caught!"
P: use reduce to count the amount of ., if more then 3 return escape else caught
*/
