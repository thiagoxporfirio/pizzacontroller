import { Routes, Route } from 'react-router-dom'
import Home from './pages/HomePage'
import { Products } from './pages/Products'
import Register from './pages/Register'

export default function AppRoutes(){
    return(
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/registeruser' element={<Register />} />
            <Route path='/products' element={<Products />} />
        </Routes>
    )
}