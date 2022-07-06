class Person {
  contructor(name, quirkyFact) {
    this.name = name;
    this.quirkyFact = quirkyFact;
  }
  bio() {
    return `My name is ${this.name} and here's my quiky fact: ${this.quirkyFact}`;
  }
}

// Student and Mentor are subclasses of the Person => Person is the superclass in this relationship
class Student extends Person {
  enroll(cohort) {
    this.cohort = cohort;
  }

}

class Mentor extends Person {
  goOnShift() {
    this.onShift = true;
  }
  goOffShift() {
    this.onShift = false;
  }

}