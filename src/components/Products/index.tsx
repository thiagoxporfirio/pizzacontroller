import { useState } from 'react'
import { Container } from "./styles"
import { CProducts } from '../CadastraProducts'
import { OrdersBoard } from '../OrdersBoard'

export function ComponentProducts(){

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