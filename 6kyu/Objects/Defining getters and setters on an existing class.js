Object.defineProperty(Person.prototype, "name", {
  get() {
    return `${this.firstName} ${this.lastName}`;
  },
  set(value) {
    const [firstName, lastName] = value.split(" ");
    this.firstName = firstName;
    this.lastName = lastName;
  }
});


/*
Learned: I learned that you can add a property to a class’s prototype using Object.defineProperty, which allows you to define a getter or setter. 
A getter controls what happens when a property is read, and a setter controls what happens when a value is assigned, 
letting you update the instance’s existing properties.
*/
