import type { Task } from "./types";

let tasks: Task[] = [];

function saveTasks() {
    localStorage.setItem("tasks", JSON.stringify(tasks));
}

function loadTasks() {
    const tasksJSON = localStorage.getItem("tasks");
    if (tasksJSON) {
        tasks = JSON.parse(tasksJSON);
    }
}

export { tasks, saveTasks, loadTasks };

