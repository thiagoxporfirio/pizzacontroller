import React from "react";
import { GlobalStyles } from "../styles/GlobalStyles";
import { Header } from "../components/Header/index";
import { Right } from "../components/Header-Right/index";


export default function Home(){
    return(
        <>
            <GlobalStyles />
            <Header />
            <Right />

        </>
    )
}