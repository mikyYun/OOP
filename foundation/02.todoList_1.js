function newTask(title, description) {
  const task = {
    title: title,
    description: description,
    complete: false,
  };
  return task;
}

const task1 = newTask("Cleaning", "Washing Dishes");
const task2 = newTask("Laundry", "Do Laundry Colored Clothes");
const task3 = newTask("Study", "Start New Project");
const tasks = [task1, task2, task3]

console.log(tasks)
// [
  // { title: 'Cleaning', description: 'Washing Dishes', complete: false },
  // {
    // title: 'Laundry',
    // description: 'Do Laundry Colored Clothes',
    // complete: false
  // },
  // { title: 'Study', description: 'Start New Project', complete: false }
// ]