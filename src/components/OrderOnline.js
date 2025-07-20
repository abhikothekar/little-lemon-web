import React from 'react';
import { Link } from 'react-router-dom';
const OrderOnline = () => {
    return (
        <div className="order-online">
            <section>
                <h2>Order Online</h2>
                <p>Enjoy our delicious food from the comfort of your home! Place your order online and have it delivered to your doorstep.</p>
                <p>Choose from our extensive menu and enjoy a hassle-free dining experience.</p>
                <Link to="/booking"><button className="order-button">Order Now</button></Link>
            </section>
        </div>
    );
}
export default OrderOnline;