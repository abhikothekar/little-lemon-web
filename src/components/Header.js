import React from 'react';
import { Link } from 'react-router-dom';
import bannerImg from '../images/restauranfood.jpg';
const Header = () => {
    return (
        <>
            <header className='header'>
                <section>

                    <div className='banner'>
                        <h2>Little Lemon Web</h2>
                        <h3>Chicago</h3>
                        <p>Little Lemon is a charming neighborhood bistro that serves simple food and classic cocktails in a lively but casual environment.</p>
                        <Link to="/booking"><button className='btn btn-primary'>Reserve a Table</button></Link>
                    </div>
                    <div className='banner-img'>
                        <img src={bannerImg} alt="Restaurant Banner" />
                    </div>
                </section>
            </header>
        </>
    );
}
export default Header;