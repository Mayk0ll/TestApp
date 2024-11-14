import axios from "axios";

const URL = 'http://localhost:1234/api/tasks';

interface Task {
    _id?: string;
    title?: string;
    description?: string;
    status?: string;
    user_id?: string;
}

export const createTask = async (task: Task) => {
    return await axios.post(`${URL}/`, task);
};

export const getTasks = async () => {
    return await axios.get(`${URL}/`);
};

export const getTask = async (id: string) => {
    return await axios.get(`${URL}/${id}`);
};

export const updateTask = async (id: string, task: Task) => {
    return await axios.put(`${URL}/${id}`, task);
};

export const completedTask = async (id: string) => {
    return await axios.put(`${URL}/completed/${id}`);
};

export const deleteTask = async (id: string) => {
    return await axios.delete(`${URL}/${id}`);
};

