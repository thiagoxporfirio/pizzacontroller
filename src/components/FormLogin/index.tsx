import { Container } from "../Header-Right/styles"

export function Form() {
    return (
        <div className="content-Form">
                
                <form action="" className="contente-Form">
                    <h2>🍕 Faz login</h2>
                    <div className="input-group">
                        <input type="text" id="username" placeholder="User" name="username" required />
                    </div>
                    <div className="input-group">
                        <input type="password" id="senha" placeholder="Digite sua senha" name="senha" required />
                    </div>
                    <div className="input-group-btn">
                        <button type="submit" id="btnlogin" name="btnlogin">Entrar no App</button>
                    </div>
                </form>
            </div>
    )
}