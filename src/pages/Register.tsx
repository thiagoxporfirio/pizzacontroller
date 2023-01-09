import React from "react";
import { Header } from "../components/Header/index";
import { GlobalStyles } from "../styles/GlobalStyles";
import { Container } from "../components/Header-Right/styles";
import { UserColaborador } from "../components/UserColaborador";
import { UserNotExists } from "../components/UserNotExists/inde";

export default function Register(){
    let identidadeUser = JSON.parse(localStorage.getItem('_DadosUser') || '{}')
    let usuarioid = identidadeUser?.dados?.UserId
    let username = identidadeUser?.dados?.username
    

    return(
        <>
        <GlobalStyles />
        <Header />
        <Container >
            {!usuarioid && <UserNotExists />}
            {usuarioid && <UserColaborador />}
        </Container>
        </>
    )
}