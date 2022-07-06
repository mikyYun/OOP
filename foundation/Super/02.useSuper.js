class Person {
  constructor(name, quirkyFact) {
    this.name = name;
    this.quirkyFact = quirkyFact;
  }
  bio() {
    return `My name is ${this.name} and here's my quirky fact: ${this.quirkyFact}`;
  }
}

class Mentor extends Person {
  bio() {
    return `I'm a mentor at LHL. ${super.bio()}`; // Mentor.bio + Person.bio
  }
}
const bob = new Mentor("Bob Ross", "I like mountains")
console.log(bob.bio())