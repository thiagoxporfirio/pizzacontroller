import { useState } from 'react'
import { Container } from "./styles"
import { CProducts } from '../CadastraProducts'

export function ComponentProducts(){
    const [isModalVisible, SetIsModalVisible] = useState(false)

    function handleCadastraProducts() {
        SetIsModalVisible(true)
    }

    function hideModal(){
        SetIsModalVisible(false)
    }

    return(
        <Container>
            <CProducts visible={isModalVisible} onClose={hideModal} />
            <div className='content'>
        
                <div className='card'>
                    <h2>⌚ Vence Hoje ({})</h2>
                    <div className='content-card'>
                        <h1>Titulo: {}</h1>
                        <h2>Conservacao: {}</h2>
                        <h2>Cadastrado: {}</h2>
                        <h2>Vence em: {}</h2>
                        <div className='btn'>
                            <button className='btnCadastraProducts' onClick={handleCadastraProducts}>+</button>
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
                            <button className='btnCadastraProducts' onClick={handleCadastraProducts}>+</button>
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
                            <button className='btnCadastraProducts' onClick={handleCadastraProducts}>+</button>
                        </div>
                    </div>
                </div>

            </div>
        </Container>
    )
}