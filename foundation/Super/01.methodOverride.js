class Person {
  constructor(name, quirkyFact) {
    this.name = name;
    this.quirkyFact = quirkyFact;
  }
  bio() {
    return `My name is ${this.name} and here's my quirky fact: ${this.quirkyFact}`;
  }
}
class Student extends Person {
  bio() {
    return `I'm a student at Lighthouse Labs. My name is ${this.name} and here's my quirky fact: ${this.quirkyFact}`;
  }
}
class Mentor extends Person {
  
}


const mike = new Student("Mike Yun", "I like nature");
const john = new Mentor("John Doe", "I like eating")
console.log(mike.bio());
console.log(john.bio());