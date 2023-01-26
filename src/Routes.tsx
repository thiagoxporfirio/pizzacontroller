import React from 'react'
import { Routes, Route, } from 'react-router-dom'
import { RequireAuth } from './AuthContext/RequireAuth'
import { Dinied } from './pages/Dinied'
import Home from './pages/HomePage'
import { Products } from './pages/Products'
import Register from './pages/Register'
import { WellcomeUser } from './pages/Wellcome'

export default function AppRoutes(){


    return(
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/wellcome' element={<RequireAuth><WellcomeUser /></RequireAuth>} />
            <Route path='/registeruser' element={<RequireAuth><Register /></RequireAuth>} />
            <Route path='/products' element={<RequireAuth><Products /></RequireAuth>} />
            <Route path='/dinied' element={<Dinied />} />
        </Routes>
        
    )
}
