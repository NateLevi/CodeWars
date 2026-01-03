class Block{

  constructor(data){
    this.width = data[0]
    this.length = data[1]
    this.height = data[2]
  }
  
  getWidth(){
    return this.width
  }
  getLength(){
    return this.length
  }
  getHeight(){
    return this.height
  }
  getVolume(){
    let volume = this.length * this.width * this.height
    return volume
  }
  getSurfaceArea(){
    return 2 * (
    this.length * this.width +
    this.length * this.height +
    this.width * this.height
  )
  } 
}

//Learned: getters and functions in a class are actual different. You don't call getters with .getWidth(), that would mean its a funciton with the (), getters set how something called in the code on the instance is read. Getters don't store values, but rather define how a property
// is read
