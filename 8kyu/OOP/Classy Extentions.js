class Cat extends Animal {
  speak() {
    return `${this.name} meows.`;
  }
}

//Learned: extending from a class just allows you to inherit the properties and methods of the previous class. So cat would be able to use this.name from the Animal class. 
