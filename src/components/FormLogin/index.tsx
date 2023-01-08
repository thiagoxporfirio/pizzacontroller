import { FormEvent, useState } from "react"
import { Container } from "../Header-Right/styles"

export function Form() {
    const [username, SetUsername] = useState('')
    const [password, SetPassword] = useState('')
    const [btnlogin, setBtnLogin] = useState('')

    let dados = {
        username: {username},
        password: {password},
    }

    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        {btnlogin? 'Fazendo login...' : 'Login'}

        fetch('', {
            method: 'POST',
            headers: {'Contente-type': 'application/json'},
            body: JSON.stringify(dados)
        }).then( async (res) => {
            let response = await res.text()
            console.log(response)

            let identidadeUser = JSON.parse(localStorage.getItem('_DadosUser') || '{}')
            identidadeUser = {... identidadeUser, dados: JSON.parse(response)}

            localStorage.setItem('_DadosUser', JSON.stringify(identidadeUser))
        

        }).catch((error) => {
            console.log(error.message)
            
        })

    }


    return (
        <div className="content-Form">
                {username}
                {password}
                <form action="" className="contente-Form" onSubmit={handleSubmit}>
                    <h2>🍕 Faz login</h2>
                    <div className="input-group">
                        <input type="text" id="username" placeholder="User" onChange={(event) => SetUsername(event.target.value)} name="username" required />
                    </div>
                    <div className="input-group">
                        <input type="password" id="senha" placeholder="Digite sua senha" onChange={(event) => SetPassword(event.target.value)} name="senha" required />
                    </div>
                    <div className="input-group-btn">
                        <button type="submit" id="btnlogin" onChange={(event) => SetPassword(event)} name="btnlogin">Entrar no App</button>
                    </div>
                </form>
            </div>
    )
}