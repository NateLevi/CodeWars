function solution(text, markers) {
  return text.split('\n').map(line => {
    let cutIndex = line.length
    
    for(const marker of markers){
      const idx = line.indexOf(marker)
      
      if(idx !== -1 && idx < cutIndex){
        cutIndex = idx
      }
    }
    return line.slice(0, cutIndex).trimEnd()
    
  }).join("\n")
}

//Learned: splitting by lines using split and then maping through each array. I understand the code I just couldn't put it together, I was overthinking the time complexity and the line part of the problem messed me up a bit. 
