export class Task {
    // sets a new task, while keeping knowldge of it's previous task.
    public static setTask(creep: Creep, taskKey: string) {
        creep.memory.prevTask = creep.memory.currTask;
        creep.memory.currTask = taskKey;
    }
}