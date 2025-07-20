import React from 'react';
import logo from '../images/Logo.svg';
const Footer = () => {
    return (
        <footer>
            <section>
                <div className='company-info'>
                    <img src={logo} alt='Company Logo' />
                    <p>Little Lemon is a charming neighborhood bistro that serves simple food and classic cocktails in a lively but casual environment.</p>
                </div>
                <div>
                    <h3>Important Links</h3>
                    <ul>
                        <li><a href="/">Home</a></li>
                        <li><a href="/about">About</a></li>
                        <li><a href="/services">Services</a></li>
                        <li><a href="/booking">Reservation</a></li>
                        <li><a href="/orderOnline">Order Online</a></li>
                    </ul>
                </div>
                <div>
                    <h3>Contacts</h3>
                    <ul>
                        <li>Address: <br /> 123 Mumbai , INDIA</li>
                        <li>Phone: <br /> +1 234 567 890</li>
                        <li>Email:  little@lemon.com</li>
                    </ul>
                </div>
                <div>
                    <h3>Social Media Links</h3>
                    <ul>
                        <li><a href="/">Facebook</a></li>
                        <li><a href="/">Instagram</a></li>
                        <li><a href="/">Twitter</a></li>
                    </ul>
                </div>

            </section>
            <section className='footer-copyright'><small>&#169; {new Date().getFullYear()} <span>🍋 Little Lemon</span></small></section>
        </footer>
    )
};
export default Footer;