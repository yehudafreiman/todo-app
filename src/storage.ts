import type { Task } from "./types";

function saveTasks(tasks: Task[]) {
    localStorage.setItem("tasks", JSON.stringify(tasks));
}

function loadTasks(): Task[] {
    const tasksJSON = localStorage.getItem("tasks");
    if (tasksJSON) {
        return JSON.parse(tasksJSON);
    }
    return [];
}

export { saveTasks, loadTasks };

