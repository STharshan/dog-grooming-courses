// src/components/AboutUs.js
import React from 'react';
import './Header.css';

const Header = () => {
    return (
        <section className="about-container">
            <p className="about-link">About Us</p>
            <h2 className="about-heading">Excellence in Dog Grooming Education</h2>
            <p className="about-description">
                At Leicester Dog Grooming Courses, we’re dedicated to training the next generation of
                professional dog groomers in a supportive, hands-on environment.
            </p>

            <div className="video-wrapper">
                <iframe
                    className="video"
                    src="https://www.youtube.com/embed/9wS3At8zFbQ"
                    title="Dog Grooming Video"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                ></iframe>
            </div>
        </section>
    );
};

export default Header;
