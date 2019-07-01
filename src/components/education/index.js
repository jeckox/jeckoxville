import React from 'react';
import './Education.css';
import ReactGA from 'react-ga';
const Education = () => {
    ReactGA.pageview(window.location.pathname + window.location.search);
    return (
        <p>Education</p>
    );
}
export default Education;
