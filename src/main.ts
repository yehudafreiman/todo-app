import type { Task } from "./types";
import { tasks, saveTasks, loadTasks } from "./storage.js";

const userInput = document.getElementById("user-input") as HTMLInputElement; 
const addButton = document.getElementById("add-button") as HTMLButtonElement; 
const taskList = document.getElementById("task-list") as HTMLUListElement; 
const deleteDoneButton = document.getElementById("delete-done-button") as HTMLButtonElement;
const deleteAllButton = document.getElementById("delete-all-button") as HTMLButtonElement;
let tasks: Task[] = []; 

userInput.addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        addTask();
    }
});

addButton.addEventListener("click", function() {
    addTask();
});

function addTask() {
    const taskValue = userInput.value.trim();
    if (taskValue === "") {
        alert("Please enter a task.");
        return;
    }
    tasks.push({ id: crypto.randomUUID(), content: taskValue, completed: false });
    userInput.value = "";
    renderTasks();
}

function renderTasks() {
  taskList.innerHTML = ""; 
  const completedTasks = tasks.filter((task) => task.completed);
  const noneCompletedTasks = tasks.filter((task) => !task.completed);
  const sortedTasks = [...noneCompletedTasks, ...completedTasks];
  sortedTasks.forEach((task) => {
    const li = document.createElement("li");
    const checkbox = document.createElement("input");
    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.addEventListener("click", () => {
      tasks.splice(tasks.indexOf(task), 1);
      renderTasks();
    });
    checkbox.type = "checkbox";
    checkbox.checked = task.completed;
    checkbox.addEventListener("change", () => {
      task.completed = checkbox.checked;
        renderTasks();
        if (task.completed) {
            li.style.textDecoration = "line-through";
        } else {
            li.style.textDecoration = "none";
        }   
    });
    li.appendChild(checkbox);
    li.appendChild(document.createTextNode(task.content));
    taskList.appendChild(li);
  });

  deleteDoneButton.addEventListener("click", () => {
    tasks = tasks.filter((task) => !task.completed);
    renderTasks();
  });

  deleteAllButton.addEventListener("click", () => {
    tasks = [];
    renderTasks();
  });
}




