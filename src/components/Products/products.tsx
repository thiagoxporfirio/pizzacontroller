import { useState } from 'react'
import { Container } from "./styles"
import { Link } from 'react-router-dom'

export function ComponentProducts(){

    return(
        <Container>
            <div className='content'>
        
                <div className='card'>
                    <h2>⌚ Vence Hoje ({})</h2>
                    <div className='content-card'>
                        <h1>Titulo: {}</h1>
                        <h2>Conservacao: {}</h2>
                        <h2>Cadastrado: {}</h2>
                        <h2>Vence em: {}</h2>
                        <div className='btn'>
                            <h3 className='btnCadastraProducts'><Link to="/cadastrarproducts">+</Link></h3>
                        </div>
                    </div>
                </div>
                <div className='card'>
                    <h2>⌚ Vence amanha ({})</h2>
                    <div className='content-card'>
                        <h1>Titulo: {}</h1>
                        <h2>Conservacao: {}</h2>
                        <h2>Cadastrado: {}</h2>
                        <h2>Vence em: {}</h2>
                        <div className='btn'>
                            <h3 className='btnCadastraProducts'><Link to="/cadastrarproducts">+</Link></h3>
                        </div>
                    </div>
                </div>
                <div className='card'>
                    <h2>⌚ Vence em 7dias ({})</h2>
                    <div className='content-card'>
                        <h1>Titulo: {}</h1>
                        <h2>Conservacao: {}</h2>
                        <h2>Cadastrado: {}</h2>
                        <h2>Vence em: {}</h2>
                        <div className='btn'>
                            <h3 className='btnCadastraProducts'><Link to="/cadastrarproducts">+</Link></h3>
                        </div>
                    </div>
                </div>

            </div>
        </Container>
    )
}