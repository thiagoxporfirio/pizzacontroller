import React from "react";
import { GlobalStyles } from "./styles/GlobalStyles";
import { Header } from "./components/Header/index";
import { Right } from "./components/Header-Right/index";
import { Form } from "./components/FormLogin/index";

export function App() {
  return (
    <React.Fragment>
      <GlobalStyles />
      <Header />
      <Right />
      
    </React.Fragment>
    
  );

}

