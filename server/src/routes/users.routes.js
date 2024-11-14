import { Router } from 'express';
import { loginUser, register } from '../controllers/users.controller.js';

const router = Router();

router.post('/login', loginUser)

router.post('/signup', register)

export default router;
