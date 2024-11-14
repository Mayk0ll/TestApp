import { completedTaskQuery, createTaskQuery, deleteTaskQuery, getTaskByIdQuery, getTasksQuery, updateTaskQuery } from "../repositories/tasks.ropository.js";

const getAllTasks = async (req, res) => {
    try {
        const tasks = await getTasksQuery();
        return res.status(200).json(tasks);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

const getTaskById = async (req, res) => {
    try {
        const task = await getTaskByIdQuery(req.params.id);
        if (!task) return res.status(404).json({ message: "Task not found" });
        return res.status(200).json(task);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

const createTask = async (req, res) => {
    const { title, description, status } = req.body;
    try {
        if (!title || !description ) return res.status(400).json({ message: "Please fill in all fields" });
        const task = await createTaskQuery({ title, description, status, user_id: req.user.uid });

        return res.status(201).json(task);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}

const updateTask = async (req, res) => {
    try {
        const id = req.params.id;
        const { title, description, status } = req.body;
        const task = await updateTaskQuery(id, { title, description, status });
        if (!task) return res.status(404).json({ message: "Task not found" });
        return res.status(200).json(task);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

const completedTask = async (req, res) => {
    try {
        const id = req.params.id;
        console.log(id);
        const task = await completedTaskQuery(id);
        if (!task) return res.status(404).json({ message: "Task not found" });
        return res.status(200).json(task);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

const deleteTask = async (req, res) => {
    try {
        const tid = req.params.id;
        const task = await deleteTaskQuery( tid );
        if (!task) return res.status(404).json({ message: "Task not found" });
        return res.status(200).json(task);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

export { createTask, getAllTasks, getTaskById, completedTask, updateTask, deleteTask };