import { useEffect, useState } from "react"
import { useApi } from "../hooks/useApi"
import { User } from "../types/User"
import { AuthContext } from "./AuthContext"

export const AuthProvider = ({children}: { children: JSX.Element }) => {

    const [user, setUser] = useState<User | null>(null)
    const api = useApi()

    useEffect(() => {

        async () => {
            const storageData = localStorage.getItem('AuthToken')
            if(storageData){
                const data = await api.validateToken(storageData)
                if(data.user){
                    setUser(data.user)
                }
            }
        }
        
    }, [api])

    const signin = async (username: string, password: string) => {
        const data = await api.signin(username, password)
        if(data.user && data.token){

            setUser(data.user)
            setToken(data.token)

            return true
        }
        return false
    }

    const signout = async () => {
        
        setUser(null)
        setToken('')
        await api.logout()
    }

    const setToken = (token: string) => {
        localStorage.setItem('AuthToken', token)
    }

    return(
        <AuthContext.Provider value={{ user, signin, signout }}>
            {children}
        </AuthContext.Provider>
    )
}