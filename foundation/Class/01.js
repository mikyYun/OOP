class Pizza {
  // contructor is a special kind of method that gets executed when an object instance is created from a class
  // inside the consturcor method will get run for the new instance of the class when we call new Plzza();
  constructor() {
    this.toppings = ["cheese"];
    this.dough = "regular";
    this.price = 15;
    this.pieces = 8;
  }
  addTopping(topping) {
    this.toppings.push(topping);
    this.price += 1;
  }
  updateDough(dough) {
    this.dough = dough;
  }
  updatePieces(pieces) {
    this.pieces = pieces;
  }
  removeTopping(topping) {
    this.toppings = this.toppings.filter(each => each !== topping);
    this.price -= 1;
  }
}
const pizza1 = new Pizza();
const pizza2 = new Pizza();
// console.log(pizza1 === pizza2); // false
pizza1.addTopping();
console.log(pizza1); // ['cheese', undefined]
pizza1.addTopping("mushroom");
console.log(pizza1); // ['cheese', undefined, 'mushroom']

const pizza3 = new Pizza();
pizza3.addTopping('cheda')
pizza3.addTopping('pepperoni')
pizza3.addTopping('olive')
console.log(pizza3)
pizza3.updateDough('thin')
pizza3.updatePieces(16)
pizza3.removeTopping('cheda')
console.log(pizza3)
