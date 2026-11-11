import type { Task } from "./types";

const newTask = document.getElementById("user-input") as HTMLInputElement;
const addButton = document.getElementById("add-button") as HTMLButtonElement;
const tasks: Task[] = [];

addButton.addEventListener("click", function() {
  let taskValue = newTask.value;
  if (taskValue.trim() === "") {
    alert("Please enter a task.");
    return;
  } 
  tasks.push({ id: crypto.randomUUID(), content: taskValue, completed: false });
  newTask.value = "";
  console.log(tasks);
});

