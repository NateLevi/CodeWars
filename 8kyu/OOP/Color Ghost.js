class Ghost {
  constructor(){
    let num = Math.floor(Math.random() * 4) + 1
    if(num === 1){this.color = "white"}
    else if(num === 2){this.color = "yellow"}
    else if(num === 3){this.color = "purple"}
    else if(num === 4){this.color = "red"} 
  }
}

//Learned: I learned that constructors purpose is to assign properties to an object when an instance is created. You can have logic code in the constructor like conditional statements. 
