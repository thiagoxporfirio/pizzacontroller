import axios from "axios";

const api = axios.create({
    baseURL: 'http://localhost:3333',
})

export const useApi = () => ({
    validateToken: async (token: string) => {
        return(
            {
                user: { id: 'uashduhasduhsd', username: 'Thiago'}
                
            }
        )
        const response = await api.post('/validate', { token })
        return response.data

    },

    signin: async (username: string, password: string) => {
        return(
            {
                user: { id: 'as4d8as4d84asd84', username:'Thiago Porfirio', },
                token: 'as84as8d48as4d84'
            }
        )
        
        // const response = await api.post('/login', { username, password })
        // return response.data
    },

    logout: async () => {
        return ({ status: true })
        // const response = await api.post('/logout')
        // return response.data
    }
})