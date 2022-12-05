import { React, useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'
// import './App.css';
import NavBar from '../src/Components/NavBar'
import Home from '../src/Components/Home'
import About from './Components/About'
import Skills from './Components/Skills'
import Contact from './Components/Contact'
import Projects from './Components/Projects'
import { useNavigate } from 'react-router-dom'
import Landing from './Components/Landing'

let i = 0
export default function App() {
    const navigate = useNavigate();

    useEffect(() => {
        if (i === 0) {
            navigate('/home')
            i = i + 1
        }
    }, [])

    return (
        <div className='bg-gray-900 min-h-screen max-h-full min-w-fit max-w-full'>
            <NavBar />
            <Routes>
                {/* <Route path='/' element={<Landing />} /> */}
                <Route path='/home' element={<Home />} />
                <Route path='/about' element={<About />} />
                <Route path='/skills' element={<Skills />} />
                <Route path='/contact' element={<Contact />} />
                <Route path='/projects' element={<Projects />} />
            </Routes>

        </div>
    )
}