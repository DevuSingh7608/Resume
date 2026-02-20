import { useState } from 'react'
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import './App.css'
import Footer from "./component/Footer"
import Navbar from './component/Navbar'
import Home from './pages/Home'
import About from './pages/About';
import Skills from './pages/Skills';
import Experience from './pages/Experience';
import Projects from './pages/Projects'
import Contact from './pages/Contact';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    {/* <Navbar/> */}
    {/* <Footer/> */}
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element = {<Home/>} />
        <Route path="/about" element={<About/>} />
        <Route path='/skills' element={<Skills/>} />
        <Route path='/experience' element={<Experience/>} />
        <Route path='/projects' element={<Projects/>} />
        <Route path='/contact' element={<Contact/>} />

      </Routes>
    </BrowserRouter>

    </>
  )
}

export default App
