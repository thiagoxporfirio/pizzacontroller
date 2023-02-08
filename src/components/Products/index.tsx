import { useState } from 'react'
import { Container } from "./styles"
import { CProducts } from '../CadastraProducts'
import { OrdersBoard } from '../OrdersBoard'

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
            <OrdersBoard
                title="⌚ Vence hoje"
             />
            <OrdersBoard
                title="⌚ Vence amanhã"
            />
            <OrdersBoard
                title="⌚ Vence em 7 dias"
            />

        </Container>
    )
}