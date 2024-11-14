import { useAuth } from "../auth/AuthProvider";

interface DefaultLayoutProps {
  children: React.ReactNode;
}

const DefaultLayout = ({ children }: DefaultLayoutProps) => {
  
  const auth = useAuth();
  auth.getUserName();

  const logout = () => {
    auth.logout();
  }

  return (
    <>
      <header>
        <nav className="navbar navbar-expand-lg text-light bg-dark">
          <div className="container-fluid d-flex justify-content-between align-items-center">
            <h4>Dominar</h4>
            <h3>{`Bienvenido de vuelta ${auth.getUserName()}`}</h3> 
            <button className="btn btn-primary" onClick={logout}>Salir</button>
          </div>
        </nav>
      </header>
      <main className="container mt-4">
        {children}
      </main>
    </>
  );
};

export default DefaultLayout;
