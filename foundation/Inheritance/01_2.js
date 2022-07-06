// Exercise
// shops
class Hobby {
  constructor(name, popularity) {
    this.name = name;
    this.popularity = popularity;
  }
}

class Cooking extends Hobby {
  addIngredient(ingredient) {
    this.name = this.name + " with " + ingredient;
    this.popularity++;
  }
}
class Coding extends Hobby {
  setProficiency(proficiency) {
    this.proficiency = proficiency;
  }
  upgradeProficientcy() {
    this.proficiency++;
  }
}
class Biking extends Hobby {
  setFrame(frame) {
    this.frame = frame;
  }
}
console.log(Hobby);

const firstHobby = new Hobby();
console.log(firstHobby);

const secondHobby = new Hobby("walking", 10);
console.log(secondHobby);

const firstCooking = new Cooking("ramen", 10);
firstCooking.addIngredient("green onion");
console.log(firstCooking);

const firstCoding = new Coding("HTML", "10");
firstCoding.setProficiency(1);
firstCoding.upgradeProficientcy();
console.log(firstCoding);
