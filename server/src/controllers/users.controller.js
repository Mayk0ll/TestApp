import bcryptjs from 'bcryptjs';
import tokenGenerator from '../utils/tokenGenerator.js';
import { createUsersQuery, getUsersByEmailQuery } from '../repositories/users.repository.js';
import userModel from '../models/user.model.js';

const validateUser = async (email, password) => {
    try {
        const user = await getUsersByEmailQuery(email);
        if (!user) return { status: 401, message: "Credenciales invalidas" };

        const passwordValid = await bcryptjs.compare(password, user.password);
        if (!passwordValid) return { status: 401, message: "Credenciales invalidas" };
        
        const token = tokenGenerator(user);
        return { status: 200, token, user };

    } catch (error) {
        return { status: 500, message: error.message };
    }
}

export const register = async (req, res) => {
    try {
        const { name, email, password } = req.body;

        if (!name || !email || !password) return res.status(400).json({ message: "Por favor, Completa todos los campos" });

        const userExists = await userModel.emailExists(email);
        if (userExists) return res.status(400).json({ message: "El email ya esta registrado" });

        const passwordSalt = await bcryptjs.hash(password, 10);
        await createUsersQuery(name, email, passwordSalt);

        const { status, token, user, message } = await validateUser(email, password);

        if (status !== 200) return res.status(status).json({ message });

        return res.status(201).json({ token, user });
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: error.message });
    }
}

export const loginUser = async (req, res) => {
    try {
        const { email, password } = req.body;
        console.log(req.body);
        if (!email || !password) return res.status(400).json({ message: "Por favor, Completa todos los campos" });

        const { status, token, user, message } = await validateUser(email, password);

        if (status !== 200) return res.status(status).json({ message });

        return res.status(200).json({ token, user });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}
