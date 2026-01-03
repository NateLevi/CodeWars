class Animal {
  constructor(name,type){
    this.name = name
    this.type = type
  }
  toString(){
    return `${this.name} is a ${this.type}`
  }
  set(name){
    this.name = name
  }
}

//learned how to use a setter in a class, you use set function inside the class, this allows you to change the property to something else on an instance.
