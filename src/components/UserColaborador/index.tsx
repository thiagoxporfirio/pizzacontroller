export function UserColaborador() {

    

    return(
        <div className="content-Form">
                <h1>👑Somente um admin pode cadastrar um colaborador</h1>
                <form action="" className="contente-Form">
                    <h2>Cadastrar um Colaborador</h2>
                    <div className="input-group">
                        <input type="text" id="username" placeholder="Nome do colaborador" name="username" required />
                    </div>
                    <div className="input-group">
                        <input type="password" id="password" placeholder="Digite a senha do Colaborador" name="senha" required />
                    </div>
                    <div className="input-group">
                        <input type="text" id="permision" placeholder="Permissao" name="senha" required />
                    </div>
                    <div className="input-group-btn">
                        <button type="submit" id="btnlogin" name="btnlogin">Cadastrar</button>
                    </div>
                </form>
            </div>
    )
}