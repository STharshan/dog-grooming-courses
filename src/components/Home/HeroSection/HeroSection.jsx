import React from 'react';
import './HeroSection.css'; // Import the CSS file
import vedio from '../../../assets/third.png';

const HeroSection = () => {
  return (
    <section className="hero-section">
      {/* Background Video */}
      <video autoPlay loop muted className="hero-video">
        <source src={vedio} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Overlay */}
      <div className="hero-overlay"></div>

      {/* Content */}
      <div className="hero-content">
        <h1 className="hero-title">
          You come as a student, but <br className="line-break" />
          <span className="highlight">leave as a friend.</span>
        </h1>
        <p className="hero-description">
          Leicester Dog Grooming Courses offers professional dog grooming
          training with personalized attention in a friendly, supportive
          environment.
        </p>
        <a href="#" className="hero-button">
          Book an Appointment →
        </a>
      </div>
    </section>
  );
};

export default HeroSection;
