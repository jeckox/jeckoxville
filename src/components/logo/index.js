import React from 'react';
import triangles from './triangle.svg';
import './Logo.css';

const Logo = () =>{
    return (
        <div className="logo">
            <div className='logo-container'>
                <p className="logo-blue">Hello !</p>
                <h1 className="logo-name"> My name is <strong>Adrián Aburto</strong></h1>
                <p className="logo-green">i’m graphic designer & front end developer</p>
                <img src={triangles} className='background-triangles' alt='triangles' />
            </div>
        </div>
    );
}
export default Logo;
