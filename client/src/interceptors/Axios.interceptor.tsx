import axios, { InternalAxiosRequestConfig } from "axios";
import Swal from "sweetalert2";

const AxiosInterceptor = () => {
  
    const updateHeaders = (request: InternalAxiosRequestConfig) => {
        const token = JSON.parse(localStorage.getItem("token") || "null");
        request.headers?.set("Content-Type", "application/json");
        if (token) request.headers?.set("Authorization", `Bearer ${token}`);
        return request;
    }

    axios.interceptors.request.use((request) => {
        return updateHeaders(request);
    });

    axios.interceptors.response.use(
        (response) => response,
        (error) => {
            Swal.fire({
                title: "Error",
                text: error.response?.data.message || "Error",
                icon: "error",
                allowEscapeKey: false,
                allowOutsideClick: false,
                animation: true,
            });
        }
    );

};

export default AxiosInterceptor;
