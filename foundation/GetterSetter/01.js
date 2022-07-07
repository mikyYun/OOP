class Pizza {
  // contructor is a special kind of method that gets executed when an object instance is created from a class
  // inside the consturcor method will get run for the new instance of the class when we call new Plzza();
  constructor() {
    this.toppings = ["cheese"];
    this.dough = "regular";
    this.price = 15;
    this.pieces = 8;
  }
  addTopping(topping) { // setter
    this.toppings.push(topping);
    this.price += 1;
  }
  updateDough(dough) { // setter
    this.dough = dough;
  }
  updatePieces(pieces) { // setter
    this.pieces = pieces;
  }
  removeTopping(topping) { // setter
    this.toppings = this.toppings.filter(each => each !== topping);
    this.price -= 1;
  }
  setSize(size) { // setter
    if (size === "s" || size === "m" || size === "l") this.size = size;
  }
  getSize() { // getter
    return `Size is ${this.size}.`
  }
}
const pizza1 = new Pizza();
const pizza2 = new Pizza();
pizza1.setSize("m")
pizza2.setSize("l")
console.log(pizza1.getSize())
console.log(pizza2.getSize())