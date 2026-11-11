import type { Task } from "./types";

const userInput = document.getElementById("user-input") as HTMLInputElement; 
const addButton = document.getElementById("add-button") as HTMLButtonElement; 
const tasks: Task[] = []; 
const taskList = document.getElementById("task-list") as HTMLUListElement; 

addButton.addEventListener("click", function() {
  const taskValue = userInput.value;
  if (taskValue.trim() === "") {
    alert("Please enter a task.");
    return;
  }
  tasks.push({ id: crypto.randomUUID(), content: taskValue, completed: false });
  userInput.value = "";
  renderTasks(); 
});

function renderTasks() {
  taskList.innerHTML = ""; 
  tasks.forEach((task) => {
    const li = document.createElement("li");
    li.textContent = task.content;
    taskList.appendChild(li);
  });
}


