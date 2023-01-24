import React from "react";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import AppRoutes from "./Routes";
import { BrowserRouter, Link } from "react-router-dom";
import { AuthProvider } from "./AuthContext/AuthProvider";

export function App() {
  return (
    <React.Fragment>
      <AuthProvider>
        <BrowserRouter>
          <AppRoutes />
          <ToastContainer position="bottom-center" />
        </BrowserRouter>
      </AuthProvider>
      
    </React.Fragment>
    
  );

}

