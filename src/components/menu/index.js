import React from 'react';
import { NavLink } from 'react-router-dom';
import triggerInteraction from './../interaction'
import CV from './../../CV2019.pdf';
import './Menu.css';
const Menu = () =>{
    return (
        <nav role="navigation" className="menu-container">
            <NavLink exact to="/" activeClassName="selected">About me</NavLink>
            <NavLink to="/education" activeClassName="selected">Education</NavLink>
            <NavLink to="/experience" activeClassName="selected">Experience</NavLink>
            <NavLink to="/portfolio" activeClassName="selected">Portfolio</NavLink>
            <a className='ui-button' onClick={() => triggerInteraction('Download CV')} href={CV} target='_blank'>Download CV</a>
        </nav>
    );
}
export default Menu;
