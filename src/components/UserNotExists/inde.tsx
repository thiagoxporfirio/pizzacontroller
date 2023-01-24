import { GlobalStyleComponent } from "styled-components"
import { Content } from "../Header/styles"
import {Route, Link} from 'react-router-dom'

export function UserNotExists(){

    return(
        <div className="content-Form">
                
                <form action="" className="contente-Form" id="boxForm" >
                    <h2>☠️ OPS! Parece que voce nao tem permissao pra isso.</h2>
                    <div className="input-group">
                        <h2>Verifique seu Login/Registro</h2>
                    </div>
                    
                    <div className="input-group-btn">
                        <button type="submit" id="btnlogin" name="btnlogin"><Link to="/">Voltar</Link></button>
                    </div>
                </form>
        </div>
    )
}
