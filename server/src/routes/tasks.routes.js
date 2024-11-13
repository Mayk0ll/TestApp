import { Router } from "express";
import { createTask, deleteTask, getAllTasks, getTaskById, updateTask } from "../controllers/tasks.controller.js";
import validateToken from "../middlewares/validateToken.js";

const router = Router();

router.get('/', validateToken, getAllTasks);

router.get('/:id', validateToken, getTaskById);

router.post('/', validateToken, createTask);

router.put('/:id', validateToken, updateTask);

router.delete('/:id', validateToken, deleteTask);

export default router;
