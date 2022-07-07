class Character {
  constructor(config) {
    this.state = {
      username: config.username,
      x: config.x,
      y: config.y,
    };
    this.avatar = config.avatar;
  }
  move() {
    console.log("Walk")
    this.walk = true;
  }
  stop() {
    this.walk = false;
  }
}

const userOne = new Character({
  username: "mike",
  x: 150,
  y: 150,
  avatar: 5
});
console.log(userOne);

document.addEventListener("keydown", e => {
  if (e === 'w' || e === 'a' || e === 's' || e === 'd') {
    console.log("key pressed");
    userOne.move();
  }
});

document.addEventListener("keyup", e => {
  if (e === 'w' || e === 'a' || e === 's' || e === 'd') {
    console.log("key unpressed");
    userOne.stop();
  }
})