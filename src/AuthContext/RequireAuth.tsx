import { useContext } from "react"
import { AuthContext } from "./AuthContext"
import { Dinied } from "../pages/Dinied"

export const RequireAuth = ({ children }: { children: JSX.Element }) => {

    const auth = useContext(AuthContext)

    if(!auth.user){
        return <Dinied />
    }

    return children
}