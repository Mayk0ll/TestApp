import TaskModel from "../models/task.model.js"

const createTaskQuery = async (task) => {
    await TaskModel.create(task);
    return getTasksQuery();
}

const getTasksQuery = async () => {
    return TaskModel.find();
}

const getTaskByIdQuery = async (id) => {
    return TaskModel.findById(id);
}

const updateTaskQuery = async (_id, task) => {
    await TaskModel.findByIdAndUpdate(_id, task);
    return getTasksQuery();
}

const completedTaskQuery = async (_id) => {
    await TaskModel.findByIdAndUpdate(_id, {status: 'Completado'});
    return getTasksQuery();
}

const deleteTaskQuery = async (_id) => {
    await TaskModel.findByIdAndDelete(_id);
    return getTasksQuery();
}

export { createTaskQuery, getTasksQuery, getTaskByIdQuery, completedTaskQuery, updateTaskQuery, deleteTaskQuery }