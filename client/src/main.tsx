import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { AuthProvider } from './auth/AuthProvider.tsx';
import Login from './routes/Login.tsx';
import ProtectedRoute from './routes/ProtectedRoute.tsx';
import Signup from './routes/Signup.tsx';
import Dashboard from './routes/Dashboard.tsx';
import AxiosInterceptor from './interceptors/Axios.interceptor.tsx';

AxiosInterceptor();

const router = createBrowserRouter([
  {
    path: '/',
    element: <Login />,
  },
  {
    path: '/signup',
    element: <Signup />,
  },
  {
    path: '/',
    element: <ProtectedRoute />,
    children: [
      {
        path: '/dashboard',
        element: <Dashboard />,
      },
    ],
  },
  {
    path: '*',
    element: <div>404</div>,
  },
])

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <AuthProvider>
      <div className="bg-dark text-light min-vh-100">
        <RouterProvider router={router} />
      </div>
    </AuthProvider>
  </StrictMode>,
)
