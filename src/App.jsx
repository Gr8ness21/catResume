import './App.css'
import Navbar from './components/Navbar.jsx';
import About from './components/About.jsx';
import ParallaxImage from './components/ParallaxImage';
import Contact from './components/Contact.jsx';

function App() {
  return (
    <>
    <Navbar/>
    <h1>Cat Resume</h1>
    <About/>
    <ParallaxImage/>
    <Contact/>
    </>
  )
}

export default App
