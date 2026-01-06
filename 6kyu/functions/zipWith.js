function zipWith(fn,a0,a1) {
  let arr = []
  if(a0.length < a1.length){
    for(let i = 0; i < a0.length;i++){
      arr.push([a0[i],a1[i]])
    }
  }
  else if(a1.length < a0.length){
    for(let i = 0; i < a1.length;i++){
      arr.push([a0[i],a1[i]])
    }
  }
  else{
    for(let i = 0; i < a1.length;i++){
      arr.push([a0[i],a1[i]])
    }
  }
  return arr.map(e => fn(e[0],e[1]))
  
}

// combines a0 and a1, applying fn to every pair of values

// if a0.length !== a1.length, output.length will be the shortest length

//Learned: I learned what a zip in programming is. It's used in languages like python. it takes in arguments, and pairing elements with the same index into tuples or groups values.  
