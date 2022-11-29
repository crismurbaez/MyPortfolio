import React from 'react'
import { Routes, Route } from 'react-router-dom'
// import './App.css';
import NavBar from '../src/Components/NavBar'
import Home from '../src/Components/Home'
import About from './Components/About'
import Skills from './Components/Skills'
import Contact from './Components/Contact'
import Projects from './Components/Projects'


export default function App() {
    return (
        <div>
            <NavBar />
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/about' element={<About />} />
                <Route path='/skills' element={<Skills />} />
                <Route path='/contact' element={<Contact />} />
                <Route path='/projects' element={<Projects />} />
            </Routes>
        </div>
    )
}