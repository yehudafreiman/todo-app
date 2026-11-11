import type { Task } from "./types";

const userInput = document.getElementById("user-input") as HTMLInputElement; 
const addButton = document.getElementById("add-button") as HTMLButtonElement; 
const taskList = document.getElementById("task-list") as HTMLUListElement; 
const tasks: Task[] = []; 

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
  tasks.forEach((task) => {
    const li = document.createElement("li");
    li.textContent = task.content;
    taskList.appendChild(li);
  });
}




