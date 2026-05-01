import './App.css'
import Navbar from './components/Navbar.jsx';
import About from './components/About.jsx';
import ParallaxImage from './components/ParallaxImage';
import Contact from './components/Contact.jsx';
import Resume from './pages/Resume.jsx'

import { Routes, Route } from 'react-router-dom';

function Home() {
  return (
    <>
      <h1 id="home">Cat Resume</h1>
      <About />
      <ParallaxImage />
      <Contact />
    </>
  )
}

function App() {
  return (
    <>

      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="resume" element={<Resume />} />
      </Routes>

    </>
  )
}

export default App
