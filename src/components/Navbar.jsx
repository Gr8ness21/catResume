import { Link } from 'react-router-dom';

function Navbar() {
    return (
        <nav className="navbar">
            <ul>
                {/* Scrolls within the same view/page */}
                <li><a href="#home">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#contact">Contact</a></li>

                {/* Leads to external page or component */}
                <li><Link to="/resume"> Resume </Link></li>
                {/* The goal: */}
                {/* <li><Link to="/resume">Resume</Link></li> */}
            </ul>
        </nav>

    )
}

export default Navbar;