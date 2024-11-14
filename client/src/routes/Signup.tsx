import { FormEvent, useState } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { useAuth } from "../auth/AuthProvider";
import { signup } from "../services/Auth.service";

const SignUp = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [password2, setPassword2] = useState("");

    const auth = useAuth();
    const goTo = useNavigate();

    if( auth.isAuthenticated ) return <Navigate to="/dashboard" />

    const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        const { data } = await signup({ name, email, password });
        auth.saveUser(data);
        goTo("/dashboard");
    }

  return (
    <div className="container d-flex justify-content-center align-items-center min-vh-100">
      <form className="row bg-white text-black border rounded g-3 p-4 shadow-sm" onSubmit={handleSubmit}>
        <h1 className="text-center mb-4">Registro</h1>

        <div className="col-12">
          <label htmlFor="name" className="form-label">
            Nombre:
          </label>
          <input
            type="name"
            className="form-control"
            name="name"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>

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
          <label htmlFor="password2" className="form-label">
            Confirmar contraseña
          </label>
          <input
            type="password"
            className="form-control"
            name="password2"
            id="password2"
            value={password2}
            onChange={(e) => setPassword2(e.target.value)}
            required
          />
        </div>

        <div className="col-12">
          <button type="submit" className="btn btn-primary w-100">
            Registrarse
          </button>
        </div>
        <div className="col-12 text-center">
          <a><Link to={'/'} className="text-decoration-none">Ya tengo cuenta</Link> </a>
        </div>
      </form>
    </div>
  );
};

export default SignUp;
