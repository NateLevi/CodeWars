class Ship {
  constructor(draft, crew) {
    this.draft = draft
    this.crew = crew
  }
  
  isWorthIt(){
    let total = this.crew * 1.5
    let numTotal = this.draft - total
    if(numTotal > 20){
      return true
    }
    else{
      return false
    }
  }
  
}

//Learned: I learned that you don't need the keyword function before the function name in a class. 

