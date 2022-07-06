function newTask(title, description) {
  const task = {
    title: title,
    description: description,
    complete: false,
    logTaskState: function () {
      console.log(`${this.title} has ${this.complete ? "" : "not"} been completed`);
    },
    completeTask: function () {
      this.complete = true;
    }
  };
  return task;
}

const task1 = newTask("Cleaning", "Washing Dishes");
const task2 = newTask("Laundry", "Do Laundry Colored Clothes");
const task3 = newTask("Study", "Start New Project");
const tasks = [task1, task2, task3];

task1.logTaskState();
task1.completeTask();
task1.logTaskState();
task2.logTaskState();
task2.completeTask();
task2.logTaskState();

console.log(tasks);