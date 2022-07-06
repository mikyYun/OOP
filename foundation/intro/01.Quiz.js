const thing = {
  doodoo: "Boo",
  daadaa: function () {
    console.log(this);
  }
};
// What does 'this' evaluate to when we run thing.daadaa() ?
// The 'thing' object

const dog = {
  sound: "woof",
  speak: function () {
    console.log(this.sound);
  }
};

dog.sound = "nop";
dog.speak();
// What will the output of the piece of code be?
// "nop"

/**
 * An object contains key value pairs. The keys are known as properties
 * An object can be used to group together state and behaviour
 * When a property's value is a function, it is called a method
 * A method can reference the object that it's inside of using 'this'
 */