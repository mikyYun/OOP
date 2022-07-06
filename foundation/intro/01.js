const Dog = {
  sound: "woof",
  breed: "shih tzu",
  speak: function () {
    console.log(`${this.breed} says ${this.sound}`);
  }
};
console.log(Dog.sound);
console.log(Dog.breed);
console.log(Dog.speak());