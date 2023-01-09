import { Routes, Route } from 'react-router-dom'
import Home from './pages/HomePage'
import Register from './pages/Register'

export default function AppRoutes(){
    return(
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/registeruser' element={<Register />} />
        </Routes>
    )
}