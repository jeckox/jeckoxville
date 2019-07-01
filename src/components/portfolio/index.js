import React, { Component } from 'react';
import './Portfolio.css';
import ReactGA from 'react-ga';
class Portfolio extends Component {
    render() {
        ReactGA.pageview(window.location.pathname + window.location.search);
        return (
            <p>Portfolio</p>
        );
    }
}
export default Portfolio;
