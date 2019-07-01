import React from 'react';
import Me from './me.png';
import './Aboutme.css';
import ReactGA from 'react-ga';
import triggerInteraction from './../interaction'

const About = () => {
    ReactGA.pageview(window.location.pathname + window.location.search);
    return (
        <div className='center-container'>
            <div className="my-information">
                <h2>About Me</h2>
                <p>Mexican, <strong>graphic designer & front end developer</strong> is a particular mix that i’m proud to be.</p>
                <p>I love the feeling that i have after solving a problem who helps people interacting with an application or website.</p>
                <p>I’m married with my wonderful wife, we have 2 beautiful dogs and a lot of dreams we gonna make.</p>
                <p>Professional way i have 8+ years experience in the software development, having experience in financial sector, digital marketing and ecommerce.</p>
                <p>I have over 6+ years of experience using JavaScript and 3+ years using ReactJS, I have very good experience designing professional UI web applications and transactional websites.</p>
            </div>
            <div className="contact-me">
                {/* <img src={Me}></img> */}
                <p>Adrián Aburto</p>
                <p>Mexico City</p>
                <p><a onClick={() => triggerInteraction('email')} href="mailto:adrian@jeckoxville.com">Send me an email</a></p>
                <p><a onClick={() => triggerInteraction('telphone')} href="tel:+525529193288">or call me maybe</a></p>
                <ul className='social-network'>
                    <li>
                        <a href="http://bit.ly/2LjzjWs" onClick={() => triggerInteraction('linkedin')} target='_blank'>
                            <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xlink="http://www.w3.org/1999/xlink" width="16" height="16" viewBox="0 0 16 16">
                                <path className="social-element" fill="#828282" d="M14.5 0h-13c-0.825 0-1.5 0.675-1.5 1.5v13c0 0.825 0.675 1.5 1.5 1.5h13c0.825 0 1.5-0.675 1.5-1.5v-13c0-0.825-0.675-1.5-1.5-1.5zM6 13h-2v-7h2v7zM5 5c-0.553 0-1-0.447-1-1s0.447-1 1-1c0.553 0 1 0.447 1 1s-0.447 1-1 1zM13 13h-2v-4c0-0.553-0.447-1-1-1s-1 0.447-1 1v4h-2v-7h2v1.241c0.412-0.566 1.044-1.241 1.75-1.241 1.244 0 2.25 1.119 2.25 2.5v4.5z"></path>
                            </svg>
                        </a>
                    </li>
                    <li>
                        <a href="http://bit.ly/2XAyP4E" onClick={() => triggerInteraction('skype')} target='_blank'>
                            <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xlink="http://www.w3.org/1999/xlink" width="16" height="16" viewBox="0 0 16 16">
                                <path className="social-element" fill="#828282" d="M6.65 0.584c-0.025-0.016-0.053-0.028-0.078-0.041-0.028 0.006-0.053 0.009-0.081 0.016l0.159 0.025z"></path>
                                <path className="social-element" fill="#828282" d="M0.575 6.578c-0.006 0.028-0.009 0.056-0.012 0.081 0.016 0.025 0.025 0.050 0.041 0.075l-0.028-0.156z"></path>
                                <path className="social-element" fill="#828282" d="M15.419 9.416c0.006-0.028 0.009-0.056 0.016-0.084-0.016-0.025-0.025-0.050-0.041-0.075l0.025 0.159z"></path>
                                <path className="social-element" fill="#828282" d="M9.25 15.359c0.025 0.016 0.053 0.028 0.078 0.041 0.028-0.006 0.056-0.009 0.084-0.012l-0.162-0.028z"></path>
                                <path className="social-element" fill="#828282" d="M15.434 9.331c-0.006 0.028-0.009 0.056-0.016 0.084l-0.028-0.162c0.016 0.028 0.028 0.053 0.044 0.078 0.081-0.45 0.125-0.909 0.125-1.369 0-1.019-0.2-2.009-0.594-2.941-0.381-0.9-0.925-1.709-1.619-2.403s-1.503-1.238-2.4-1.619c-0.931-0.394-1.922-0.594-2.941-0.594-0.481 0-0.963 0.044-1.431 0.134 0 0-0.003 0-0.003 0 0.025 0.012 0.053 0.025 0.078 0.041l-0.159-0.025c0.028-0.006 0.053-0.009 0.081-0.016-0.644-0.341-1.366-0.525-2.097-0.525-1.194 0-2.319 0.466-3.163 1.309s-1.309 1.969-1.309 3.163c0 0.759 0.197 1.509 0.563 2.169 0.006-0.028 0.009-0.056 0.012-0.081l0.028 0.159c-0.016-0.025-0.028-0.050-0.041-0.075-0.075 0.428-0.112 0.866-0.112 1.303 0 1.019 0.2 2.009 0.594 2.941 0.381 0.9 0.925 1.706 1.619 2.4s1.503 1.238 2.403 1.619c0.931 0.394 1.922 0.594 2.941 0.594 0.444 0 0.887-0.041 1.322-0.119-0.025-0.016-0.050-0.028-0.078-0.041l0.162 0.028c-0.028 0.006-0.056 0.009-0.084 0.012 0.669 0.378 1.428 0.581 2.2 0.581 1.194 0 2.319-0.466 3.162-1.309s1.309-1.969 1.309-3.162c-0.003-0.759-0.2-1.509-0.569-2.175zM8.034 12.591c-2.684 0-3.884-1.319-3.884-2.309 0-0.506 0.375-0.863 0.891-0.863 1.15 0 0.85 1.65 2.994 1.65 1.097 0 1.703-0.597 1.703-1.206 0-0.366-0.181-0.772-0.903-0.95l-2.388-0.597c-1.922-0.481-2.272-1.522-2.272-2.5 0-2.028 1.909-2.791 3.703-2.791 1.653 0 3.6 0.913 3.6 2.131 0 0.522-0.453 0.825-0.969 0.825-0.981 0-0.8-1.356-2.775-1.356-0.981 0-1.522 0.444-1.522 1.078s0.775 0.838 1.447 0.991l1.769 0.394c1.934 0.431 2.425 1.563 2.425 2.625 0 1.647-1.266 2.878-3.819 2.878z"></path>
                            </svg>
                        </a>
                    </li>
                    <li>
                        <a href="http://bit.ly/2NhOMsC" onClick={() => triggerInteraction('github')} target='_blank'>
                            <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xlink="http://www.w3.org/1999/xlink" width="16" height="16" viewBox="0 0 16 16">
                                <path className="social-element" fill="#828282" d="M8 0.198c-4.418 0-8 3.582-8 8 0 3.535 2.292 6.533 5.471 7.591 0.4 0.074 0.547-0.174 0.547-0.385 0-0.191-0.008-0.821-0.011-1.489-2.226 0.484-2.695-0.944-2.695-0.944-0.364-0.925-0.888-1.171-0.888-1.171-0.726-0.497 0.055-0.486 0.055-0.486 0.803 0.056 1.226 0.824 1.226 0.824 0.714 1.223 1.872 0.869 2.328 0.665 0.072-0.517 0.279-0.87 0.508-1.070-1.777-0.202-3.645-0.888-3.645-3.954 0-0.873 0.313-1.587 0.824-2.147-0.083-0.202-0.357-1.015 0.077-2.117 0 0 0.672-0.215 2.201 0.82 0.638-0.177 1.322-0.266 2.002-0.269 0.68 0.003 1.365 0.092 2.004 0.269 1.527-1.035 2.198-0.82 2.198-0.82 0.435 1.102 0.162 1.916 0.079 2.117 0.513 0.56 0.823 1.274 0.823 2.147 0 3.073-1.872 3.749-3.653 3.947 0.287 0.248 0.543 0.735 0.543 1.481 0 1.070-0.009 1.932-0.009 2.195 0 0.213 0.144 0.462 0.55 0.384 3.177-1.059 5.466-4.057 5.466-7.59 0-4.418-3.582-8-8-8z"></path>
                            </svg>
                        </a>
                    </li>
                    <li>
                        <a href="http://bit.ly/2Lh8To2" onClick={() => triggerInteraction('facebook')} target='_blank'>
                            <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xlink="http://www.w3.org/1999/xlink" width="16" height="16" viewBox="0 0 16 16">
                                <path className="social-element" fill="#828282" d="M14.5 0h-13c-0.825 0-1.5 0.675-1.5 1.5v13c0 0.825 0.675 1.5 1.5 1.5h6.5v-7h-2v-2h2v-1c0-1.653 1.347-3 3-3h2v2h-2c-0.55 0-1 0.45-1 1v1h3l-0.5 2h-2.5v7h4.5c0.825 0 1.5-0.675 1.5-1.5v-13c0-0.825-0.675-1.5-1.5-1.5z"></path>
                            </svg>
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default About;
