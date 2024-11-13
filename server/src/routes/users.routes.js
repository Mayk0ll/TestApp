import { Router } from 'express';
import { loginUser, register } from '../controllers/users.controller.js';

const router = Router();

router.get('/login', loginUser)

router.post('/register', register)

export default router;
