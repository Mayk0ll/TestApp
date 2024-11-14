import axios from "axios";

interface Credentials {
    name?: string;
    email: string;
    password: string;
}

const URL = 'http://localhost:1234/api/users';

export const login = (credentials: Credentials) => {
    return axios.post(`${URL}/login`, { ...credentials });
};

export const signup = (credentials: Credentials) => {
    return axios.post(`${URL}/signup`, { ...credentials });
};