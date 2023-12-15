import React from 'react';
import './Header.css';
import headerim from '../images/img3.jpeg';

function Header() {
    return (
        <div className='header_container'>
            <img src={headerim} alt='header' className='header_image' />
            <div className='header_content_container'>
                <h1 className='header_content'>RECIPE RADAR</h1>
                <h2 className='header_content'>FIND DELICIOUS RECIPES ON YOUR FINGER PRESSES!</h2>
            </div>
        </div>
    );
}

export default Header;
