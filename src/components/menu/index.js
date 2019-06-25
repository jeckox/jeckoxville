import React from 'react';
import { Link } from 'react-router-dom';
import './Menu.css';
const Menu = () =>{
    return (
        <nav className="menu-container">
            <Link to="/">About me</Link>
            <Link to="/education">Education</Link>
            <Link to="/experience">Experience</Link>
            <Link to="/portfolio">Portfolio</Link>
            <a href="/">Download CV</a>
        </nav>
    );
}
export default Menu;
