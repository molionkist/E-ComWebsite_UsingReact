import React from 'react';
import logo from '../../logo.jpg'
import './Header.css'

const Header = () => {
    return (
        <nav className='header'>
            <img src={logo} alt="" />
            <div>
                <a href="/Home">Home</a>
                <a href="/order">Order</a>
                <a href="/New Product">New Products</a>
                <a href="/About">About</a>
            </div>
        </nav>
    );
};

export default Header;