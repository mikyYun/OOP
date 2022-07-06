function newTask(title, description) {
  const task = {
    title: title,
    description: description,
    complete: false,
  };
  return task;
}

function logTaskState(task) {
  console.log(`${task.title} has ${task.complete ? "" : "not"} been completed`);
}

function completeTask(task) {
  task.complete = true;
}

const task1 = newTask("Cleaning", "Washing Dishes");
const task2 = newTask("Laundry", "Do Laundry Colored Clothes");
const task3 = newTask("Study", "Start New Project");
const tasks = [task1, task2, task3];

logTaskState(task1);
completeTask(task1);
logTaskState(task1);
logTaskState(task2);
completeTask(task2);
logTaskState(task2);

console.log(tasks);