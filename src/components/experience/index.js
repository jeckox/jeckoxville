import React from 'react';
import './Experience.css';
import ReactGA from 'react-ga';
const Experience = () =>{
    ReactGA.pageview(window.location.pathname + window.location.search);
    return (
        <p>Experience</p>
    );
}
export default Experience;
