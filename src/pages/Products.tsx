import React from "react";
import { Header } from "../components/Header/index";
import { GlobalStyles } from "../styles/GlobalStyles";
import { Container } from "../components/Header-Right/styles";
import { UserNotExists } from "../components/UserNotExists/inde";
import { ComponentProducts } from "../components/Products/products";

export function Products(){

    let identidadeUser = JSON.parse(localStorage.getItem('_DadosUser') || '{}')
    let usuarioid = identidadeUser?.dados?.UserId
    let username = identidadeUser?.dados?.username

    return(
        <>
        <GlobalStyles />
        <Header />
        <Container >
            {/* {!usuarioid && <UserNotExists />} */}
            {<ComponentProducts />}
        </Container>
        </>
    )
}