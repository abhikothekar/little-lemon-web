//create react component here
import React from 'react';
import logo from '../images/Logo.svg'; // Adjust the path as necessary
const Nav = () => {
    const [menuOpen, setMenuOpen] = React.useState(false);
    const toggleMenu = () => { setMenuOpen(!menuOpen); };
    return (
        <nav className={`navbar ${menuOpen ? "open" : ""}`}>
            <a href="/" className="logo"><img src={logo} alt='logo' /></a>
            <div className='menu-icon' onClick={toggleMenu}>
                <div className='bar'></div>
                <div className='bar'></div>
                <div className='bar'></div>
            </div>
            <ul className={`nav-links ${menuOpen? "visible":""}`}>
                <li><a href="/">Home</a></li>
                <li><a href="/about">About</a></li>
                <li><a href="/services">Services</a></li>
                <li><a href="/booking">Reservation</a></li>
                <li><a href="/orderOnline">Order Online</a></li>
            </ul>
        </nav>
    );
}
export default Nav;