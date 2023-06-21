function addTask() {
  var taskInput = document.getElementById("taskInput");
  var taskList = document.getElementById("taskList");

  if (taskInput.value !== "") {
    var taskItem = document.createElement("li");
    taskItem.className = "task-item";

    var checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.onclick = completeTask;

    var taskTitle = document.createElement("span");
    taskTitle.className = "task-title";
    taskTitle.textContent = taskInput.value;

    var deleteButton = document.createElement("button");
    deleteButton.className = "delete-button";
    deleteButton.textContent = "Delete";
    deleteButton.onclick = deleteTask;

    taskItem.appendChild(checkbox);
    taskItem.appendChild(taskTitle);
    taskItem.appendChild(deleteButton);

    taskList.appendChild(taskItem);

    taskInput.value = "";
  }
}

function completeTask() {
  var taskTitle = this.nextSibling;
  if (this.checked) {
    taskTitle.style.textDecoration = "line-through";
  } else {
    taskTitle.style.textDecoration = "none";
  }
}

function deleteTask() {
  var taskItem = this.parentNode;
  var taskList = taskItem.parentNode;
  taskList.removeChild(taskItem);
}
