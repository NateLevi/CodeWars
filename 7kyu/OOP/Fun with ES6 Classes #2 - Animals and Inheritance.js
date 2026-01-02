class Shark extends Animal {
  constructor(name,age,status) {
    super(name,age,0,"shark",status);
  }
}

class Cat extends Animal {
  constructor(name, age, status) {
    super(name, age, 4, "cat", status);
  }

  introduce() {
    return `${super.introduce()}  Meow meow!`;
  }
}


class Dog extends Animal {
  constructor(name, age, status, master) {
    super(name, age, 4, "dog", status);
    this.master = master;
  }

  greetMaster() {
    return `Hello ${this.master}`;
  }
}

//Learned: super allows you to paas parameters to the constructor of the parent class, you can add more properties an instance of the constructor by using this..., 
