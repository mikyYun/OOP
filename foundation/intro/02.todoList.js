const taskTitles = [];
const taskComplete = [];
const taskDescriptions = [];

function newTask(title, description) {
  taskTitles.push(title);
  taskDescriptions.push(description);
  taskComplete.push(false);
}