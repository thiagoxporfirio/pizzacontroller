import { Board, OrdersContainer } from "./style"
import { CProducts } from '../CadastraProducts'
//Props

interface OrdersBoardProps {
    title: string;
    
}

export function OrdersBoard(props: OrdersBoardProps){
    return(
        <Board> 
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
                <span>+</span>
            </div>
            <div className='DataContainer'>

            </div>
            
            
        </OrdersContainer>
    </Board>
    )
}