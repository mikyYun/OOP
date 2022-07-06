class Cook {
  constructor(name) {
    this.name = name;
  }
  notice() {
    return `Cooking in progress...`;
  }
}

class StageOne extends Cook {
  notice() {
    return `${super.notice()}, ${this.name}'s first stage passed`;
  }
}

class StageTwo extends Cook {
  notice() {
    return `${super.notice()}, ${this.name}'s second stage passed`;
  }
}

const fillWater = new StageOne("ramen");
const putNoodle = new StageTwo("ramen");
console.log(fillWater.notice(), ". NEXT:",putNoodle.notice())

class Project {
  constructor(title, timeline) {
    this.title = title;
    this.timeline = timeline;
  }

  announce() {
    return `Project ${this.title} is set up. Timeline is ${this.timeline} week(s)`
  }
}

class midProject extends Project {
  announce() {
    return `${super.announce()}. Building schema must be finished in two days `
  }
}

class finalProject extends Project {
  announce() {
    return `${super.announce()}. Drawing design structures should be finished in two days`
  }
}

const project = new Project("projects", 10)
const quizApp = new midProject("QuizApp", 1)
const lighthouseTown = new finalProject("Lighthouse Town", 2)
console.log(project.announce())
console.log(quizApp.announce())
console.log(lighthouseTown.announce())