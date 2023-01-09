import React from "react";
import AppRoutes from "./Routes"
import { BrowserRouter, Link } from "react-router-dom"


export function App() {
  return (
    <React.Fragment>
      <BrowserRouter>
        <AppRoutes />
      </BrowserRouter>
      
    </React.Fragment>
    
  );

}

