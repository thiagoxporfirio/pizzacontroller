import { useEffect } from "react";
import { Overlay, ModalBody } from "./styles"

interface CProductsProps {
    visible: boolean;
    onClose(): void;

}

export function CProducts({ visible, onClose }: CProductsProps){

    useEffect(() => {
        document.addEventListener('keydown', (event) => {
            if(event.key === 'Escape'){
                onClose()
            } 
        })
        
    }, [])
    

    if(!visible){
        return null
    }

    return(
        <Overlay >
            <ModalBody>
                <div className="closemodal">
                    <span onClick={onClose}>❌</span>
                </div>
                <form action="" className="contente-Form">
                    <h2>🍕 Cadastre um Produto</h2>
                    <div className="input-group">
                        <input type="text" id="nameproduto" placeholder="Titulo:" name="name" required />
                    </div>
                    <div className="input-group">
                        <input type="text" id="conservacao" placeholder="Conservacao:" name="conservacao" required />
                    </div>

                    <div className="datecontainer">
                        <div className="input-group">
                            <span>Data de hoje:  </span>
                            <input type="date" id="datenow" placeholder="Data de hoje" name="date" required />
                        </div>
                        <div className="input-group">
                            <span>Data de vencimento:  </span>
                            <input type="date" id="dateother" placeholder="Data de vencimento:" name="date" required />
                        </div>
                    </div>
                    <div className="input-group-btn">
                            <button type="submit" id="btnlogin" name="btnlogin">Cadastrar</button>
                    </div>
                    
                </form>
            </ModalBody>
        </Overlay>
    )
}