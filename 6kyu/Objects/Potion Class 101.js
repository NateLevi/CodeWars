class Potion {
  constructor(color, volume) {
    this.color = color
    this.volume = volume
  }

  mix(other) {
    let arr = []
    let totalVolume = this.volume + other.volume

    for (let i = 0; i < this.color.length; i++) {
      arr.push(
        Math.ceil(
          (this.color[i] * this.volume + other.color[i] * other.volume) / totalVolume
        )
      )
    }

    return new Potion(arr, totalVolume)
  }
}

//Learned: returning new instances of a class inside a method of a class, passing in data into a constructor, using a parameter to compare to a previously created instance of a class. 
