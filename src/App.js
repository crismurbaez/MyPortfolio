import React from 'react'
import { Routes, Route } from 'react-router-dom'
// import './App.css';
import NavBar from '../src/Components/NavBar'
import Home from '../src/Components/Home'
import ByMe from './Components/ByMe'

export default function App() {
    return (
        <div>
            <NavBar />
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/byme' element={<ByMe />} />
            </Routes>
        </div>
    )
}