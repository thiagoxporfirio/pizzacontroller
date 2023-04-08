import { FormEvent, useContext, useState } from "react"
import { useNavigate } from "react-router-dom"
import { toast } from "react-toastify"
import { AuthContext } from "../../AuthContext/AuthContext"
import { Content } from "./styles"
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'

const loginFromSchema = z.object({
    email: z.string().nonempty('Username e obrigatorio')
    .email('Formato de email invalido'),

    password: z.string().nonempty('Password e obrigatorio')
    .min(6, 'A senha precisa de no minimo 6 caracteres'),
})

type LoginUserForm = z.infer<typeof loginFromSchema>

export function Form() {
    const auth = useContext(AuthContext)
    const navigate = useNavigate()
    const { register, handleSubmit,
         formState: { errors } } = useForm<LoginUserForm>({
        resolver: zodResolver(loginFromSchema)
    })

    const [output, SetOutput] = useState('')
    const [isSubmitting, setIsSubmitting] = useState(false)
    


    function Login(data:any) {
    
        setIsSubmitting(true);
        SetOutput(JSON.stringify(data, null, 2))



        // if(username && password){
        //     const isLogged = await auth.signin(username, password)

        //     if(isLogged){
        //         toast.success(`Usuario logado, bem-vindo: ${username}`)

        //         setTimeout(() => {
        //             navigate('/wellcome')
        //         },1200)

        //     }else{
        //         alert('Nao deu certo, verifique!')
        //     }
        //  }

    }

    return (
        <div className="content-Form">
                <form action="" className="contente-Form" onSubmit={handleSubmit(Login)}>
                    <h2>🍕 Faz login</h2>
                    {errors.email && <span>{errors.email.message}</span>}
                    {errors.password && <span>{errors.password.message}</span>}
                    <div className="input-group">
                        <input type="text" id="email" placeholder="Email"
                           required
                          {...register('email')}
                          />
                    </div>
                    
                    <div className="input-group">
                        
                        <input type="password" id="password" placeholder="Senha"
                          required
                         {...register('password')}
                         />
                    </div>
                    <div className="input-group-btn">
                        <button type="submit">{isSubmitting ? 'Logando...' : 'Entrar'}</button>
                    </div>
                </form>

                <pre>{output}</pre>
            </div>
    )
}