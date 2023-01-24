
import { Container } from "./styles"
import { Form } from "../FormLogin"
import React, { useContext } from "react"
import {Route, Link} from 'react-router-dom'
import { AuthContext } from "../../AuthContext/AuthContext"

export function Right() {
    let identidadeUser = JSON.parse(localStorage.getItem('_DadosUser') || '{}')
    let TOKEN = identidadeUser?.dados?.token
    let username = identidadeUser?.dados?.username

    const auth = useContext(AuthContext)

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
        
    }
    
    const handleLogout =  async() => {
        await auth.signout()
        window.location.href = window.location.href
    }

    return (
        <Container >
            <div className="content-btn">
                <Link to="/products"><button id="btnProducts" onClick={handleProducts}>Produtos</button></Link>
                <Link to="/registeruser"><button id="btncadastraUser" onClick={handlecadastreUser}>Cadastrar user</button></Link>
                {auth.user && <button onClick={handleLogout}>Sair</button>}
            </div>

            <Form />
        </Container>

    )
}