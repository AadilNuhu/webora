import { useState } from 'react';
import './nav.css';

export default function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <> 
            <nav className="navbar">
                <div className="logo">Web<span>ora</span></div>
                <div className="menu-toggle" id="menu-toggle" onClick={toggleMenu}>
                    <span className="bar"></span>
                    <span className="bar"></span>
                    <span className="bar"></span>
                </div>
                <ul className={`nav-links ${menuOpen ? 'active' : ''}`} id="nav-links">
                    <li><a href="/">Home</a></li>
                    <li><a href="/about">About</a></li>
                    <li><a href="/contact">Contact</a></li>
                    <li><a href="/RequestAWebsite">Project Details</a></li>
                </ul>
            </nav>
        </>
    );
}
