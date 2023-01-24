import { Link } from 'react-router-dom'

export function UserWellCome(){

    let identidadeUser = JSON.parse(localStorage.getItem('_DadosUser') || '{}')
    let usuarioid = identidadeUser?.dados?.UserId
    let username = identidadeUser?.dados?.username


    return(
        <div className="content-Form">
                
                <form action="" className="contente-Form" id="boxForm" >
                    <h2>🍕 Bem vindo ao App da cozinha.</h2>
                    <div className="input-group">
                        <h2>Ola, {username}</h2>
                    </div>
                    
                    <div className="input-group-btn">
                    <Link to="/products"><button type="submit" id="btnlogin" name="btnlogin">Ver produtos da cozinha</button></Link>
                    </div>
                </form>
            </div>
    )
}
