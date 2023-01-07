import { Container } from "./styles"
import { UserColaborador } from "../UserColaborador"
import { Form } from "../FormLogin"
import React from "react"


export function Right() {
    
    let identidadeUser = JSON.parse(localStorage.getItem('_DadosUser') || '{}')
    let usuarioid = identidadeUser?.dados?.UserId

    return (
        <Container >
            <div className="content-btn">
                <button id="btnlogin">Produtos</button>
                <button id="btncadastraUser" >Cadastrar user</button>
            </div>

            {!usuarioid && <Form />}
            {}<UserColaborador />
            
        </Container>

    )
}