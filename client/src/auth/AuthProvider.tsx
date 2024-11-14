import { createContext, useContext, useEffect, useState } from "react"

interface AuthProps{
    children: React.ReactNode
}

const AuthContext = createContext({
    isAuthenticated: false,
    getToken: () => {},
    saveUser: (resp: any) => {},
    logout : () => {},
    getUserName: () => {}
})

export const AuthProvider = ({children}: AuthProps) => {

    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [token, setToken] = useState("");

    useEffect(() => {
        const token = localStorage.getItem("token");
        if( token ) {
            setToken(JSON.parse(token));
            setIsAuthenticated(true);
        }
    }, []);

    const getToken = () => localStorage.getItem("token") || "";

    const saveUser = (resp: any) => {
        setToken(resp.token);
        localStorage.setItem("token", JSON.stringify(resp.token));
        localStorage.setItem("user", JSON.stringify(resp.user));
        setIsAuthenticated(true);
    }

    const getUserName = () => {
        const user = localStorage.getItem("user");
        return user ? JSON.parse(user).name : "";
    }

    const logout = () => {
        localStorage.clear();
        setIsAuthenticated(false);
    }

    return (
        <AuthContext.Provider value={{ isAuthenticated, getToken, saveUser, logout, getUserName }}>
            {children}
        </AuthContext.Provider>
    )

}

export const useAuth = () => useContext(AuthContext);

