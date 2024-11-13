import { Router } from 'express';
import usersRoutes from './users.routes.js';
import tasksRoutes from './tasks.routes.js';

const router = Router();

router.use('/users', usersRoutes);
router.use('/tasks', tasksRoutes);


export default router;
