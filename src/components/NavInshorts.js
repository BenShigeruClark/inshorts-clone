import React from 'react';
import './NavInshorts.css';
import logo from '../images/logo.jpg';
import HamburgerDrawer from './HamburgerDrawer';

const NavInshorts = ({ setCategory }) => {
    return (
        <div className="nav">
            <div className="icon">
                <HamburgerDrawer setCategory={setCategory} />
            </div>
            <img 
                style={{ cursor: "pointer" }}
                src={logo} 
                alt="logo" 
                height='80%'
            />
        </div>
    )
}

export default NavInshorts;