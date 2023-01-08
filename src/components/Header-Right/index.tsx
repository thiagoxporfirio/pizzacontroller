import { useState } from 'react'

import { Container } from "./styles"
import { UserColaborador } from "../UserColaborador"
import { Form } from "../FormLogin"
import React from "react"
import { UserWellCome } from '../UserWellCome'


export function Right() {
    let identidadeUser = JSON.parse(localStorage.getItem('_DadosUser') || '{}')
    let usuarioid = identidadeUser?.dados?.UserId
    let username = identidadeUser?.dados?.username

    const [handleCadastro , setHandleCadastro] = useState()
    
    

    const handleProducts = () => {
        let btnProducts = document.querySelector('#btnProducts')
        btnProducts?.setAttribute('style', 'background-color: #ffffff;')

        setTimeout(() => {
            btnProducts?.setAttribute('style', 'background-color: grey;')
        }, 1000)

        
    }

    const handlecadastreUser = () => {
        
        let btncadastraUser = document.querySelector('#btncadastraUser')
        btncadastraUser?.setAttribute('style', 'background-color: #ffffff;')
        
        setTimeout(() => {
            btncadastraUser?.setAttribute('style', 'background-color: grey;')
        }, 1000)

        {!usuarioid && <UserColaborador />}
        console.log(usuarioid)
        
    }

    return (
        <Container >
            <div className="content-btn">
                <button id="btnProducts" onClick={handleProducts}>Produtos</button>
                <button id="btncadastraUser" onClick={handlecadastreUser}>Cadastrar user</button>
            </div>

            {!usuarioid && <Form />}
            {usuarioid && <UserWellCome />}
            
        </Container>

    )
}