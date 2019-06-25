import React from 'react';
import { Link } from 'react-router-dom';
import CV from './../../CV2019.pdf';
import './Menu.css';
const Menu = () =>{
    return (
        <nav role="navigation" className="menu-container">
            <Link to="/">About me</Link>
            <Link to="/education">Education</Link>
            <Link to="/experience">Experience</Link>
            <Link to="/portfolio">Portfolio</Link>
            <a className='ui-button' href={CV} target='_blank'>Download CV</a>
        </nav>
    );
}
export default Menu;
