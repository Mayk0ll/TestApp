import { FormEvent, useState } from "react";
import { useAuth } from "../auth/AuthProvider";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { login } from "../services/Auth.service";


const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const auth = useAuth();
  const goTo = useNavigate();

  if (auth.isAuthenticated) return <Navigate to="/dashboard" />;

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const { data } = await login({ email, password });
    auth.saveUser(data);
    goTo("/dashboard");
  };

  return (
    <div className="container d-flex justify-content-center align-items-center min-vh-100">
      <form className="row bg-white text-black border rounded shadow-sm g-3 p-4 mt-3" onSubmit={handleSubmit}>
        <h1 className="text-center mb-4">Ingresar</h1>

        <div className="col-12">
          <label htmlFor="email" className="form-label">
            Email
          </label>
          <input
            type="email"
            className="form-control"
            name="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        <div className="col-12">
          <label htmlFor="password" className="form-label">
            Contraseña
          </label>
          <input
            type="password"
            className="form-control"
            name="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>

        <div className="col-12">
          <button type="submit" className="btn btn-primary w-100">
            Login
          </button>
        </div>

        <div className="col-12 text-center">
          <a><Link to={'/signup'} className="text-decoration-none">No tengo cuenta?</Link> </a>
        </div>
      </form>
    </div>
  );
};

export default Login;
