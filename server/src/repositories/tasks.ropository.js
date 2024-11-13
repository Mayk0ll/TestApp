import TaskModel from "../models/task.model.js"

const createTaskQuery = (task) => {
    return TaskModel.create(task);
}

const getTasksQuery = () => {
    return TaskModel.find();
}

const getTaskByIdQuery = (id) => {
    return TaskModel.findById(id);
}

const updateTaskQuery = (_id, task) => {
    return TaskModel.findByIdAndUpdate(_id, task)
}

const deleteTaskQuery = (_id) => {
    return TaskModel.findByIdAndDelete(_id);
}

export { createTaskQuery, getTasksQuery, getTaskByIdQuery, updateTaskQuery, deleteTaskQuery }