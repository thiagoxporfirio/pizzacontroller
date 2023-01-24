import { FormEvent, useContext, useState } from "react"
import { Navigate, useNavigate } from "react-router-dom"
import { toast } from "react-toastify"
import { AuthContext } from "../../AuthContext/AuthContext"


export function Form() {
    const auth = useContext(AuthContext)
    const navigate = useNavigate()

    const [username, SetUsername] = useState('')
    const [password, SetPassword] = useState('')
    const [isSubmitting, setIsSubmitting] = useState(false)
    

    let dados = {
        username: {username},
        password: {password},
    }
   

    const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        setIsSubmitting(true);

        if(username && password){
            const isLogged = await auth.signin(username, password)

            if(isLogged){
                toast.success(`Usuario logado, bem-vindo: ${username}`)

                setTimeout(() => {
                    navigate('/wellcome')
                },1000)

            }else{
                alert('Nao deu certo, verifique!')
            }
         }

    }

    return (
        <div className="content-Form">
                <form action="" className="contente-Form" onSubmit={handleSubmit}>
                    <h2>🍕 Faz login</h2>
                    <div className="input-group">
                        <input type="text" id="username" placeholder="User" onChange={(event) => SetUsername(event.target.value)} name="username" required />
                    </div>
                    <div className="input-group">
                        <input type="password" id="senha" placeholder="Digite sua senha" onChange={(event) => SetPassword(event.target.value)} name="senha" required />
                    </div>
                    <div className="input-group-btn">
                        <button type="submit">{isSubmitting ? 'Logando...' : 'Entrar'}</button>
                    </div>
                </form>
            </div>
    )
}