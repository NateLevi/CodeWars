class Person {
  constructor(name,age) {
    this.name = name
    this.age = age
  }
  get info(){
    return `${this.name}s age is ${this.age}`
  }
}

//learned: got better with get method. Get creates a method that when read in code it runs whatevers inside. It acts as a property to the new instance of Person in this example. 
