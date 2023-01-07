import { Container } from "./styles"


export function Right() {
    return (
        <Container >
            <div className="content-btn">
                <button>Produtos</button>
                <button>Cadastrar user</button>
            </div>
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
                        <button id="btnlogin" name="btnlogin">Entrar no App</button>
                    </div>
                </form>
            </div>
        </Container>

    )
}