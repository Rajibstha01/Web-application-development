import localforage from "localforage";

const taskListKey = "taskList";

export async function createTask(title, deadline, isUrgent){
    const taskObj = {
        title,
        deadline,
        isUrgent,
    };
    let taskList = await localforage.getItem(taskListKey);

    taskList = taskList ?? [];
    taskList=[taskObj, ...taskList];
    await localforage.setItem(taskListKey, taskList);

}