// src/components/CallToAction.js
import React from 'react';
import './CallToAct.css';

const CallToAct = () => {
  return (
    <section className="cta-section">
      <h2 className="cta-heading">Ready to Begin Your Dog Grooming</h2>
      <h2 className="cta-heading">Journey?</h2>
      <p className="cta-text">
        Contact us today to discuss which course is right for you or to book your place.
      </p>
      <a href="#contact" className="cta-button">Get in Touch</a>
    </section>
  );
};

export default CallToAct;
