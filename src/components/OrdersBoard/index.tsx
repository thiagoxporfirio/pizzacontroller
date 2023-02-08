import { Board, OrdersContainer } from "./style"
import { useState } from "react";
import { CProducts } from '../CadastraProducts'
//Props

interface OrdersBoardProps {
    title: string;
    
}

export function OrdersBoard(props: OrdersBoardProps){

    const [isModalVisible, SetIsModalVisible] = useState(false)

    function handleCadastraProducts() {
        SetIsModalVisible(true)
    }

    function hideModal(){
        SetIsModalVisible(false)
    }


    return(
        

        <Board>
            <CProducts visible={isModalVisible} onClose={hideModal}/>
        <header>
            <span>{props.title}</span>
            <small>(1)</small>
        </header>

        <OrdersContainer>
            <div className='DataContainer'>
                <small className='titulo'>Titulo: </small>
                <small>Responsavel: </small>
                <small>Conservação: </small>
                <small>Cadastrado: </small>
                <small>Vence em: </small>
                <span onClick={handleCadastraProducts}>+</span>
            </div>
            <div className='DataContainer'>

            </div>
            
            
        </OrdersContainer>
    </Board>
    )
}