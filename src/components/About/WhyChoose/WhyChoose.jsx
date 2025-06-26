// src/components/WhyChoose.js
import React from 'react';
import './WhyChoose.css';
import { FaUserCircle, FaRibbon, FaHeart } from 'react-icons/fa';

const WhyChoose = () => {
  return (
    <section className="why-section">
      <p className="why-subtitle">Our Approach</p>
      <h2 className="why-title">Why Choose Leicester Dog Grooming Courses?</h2>
      <p className="why-description">
        We provide a unique learning experience focused on hands-on training, personalized attention,
        and comprehensive education in all aspects of professional dog grooming.
      </p>

      <div className="why-cards">
        <div className="why-card">
          <FaUserCircle className="why-icon" />
          <h3>Passionate staff</h3>
          <p>
            the proprietor and the staff at the dog groomers course are not only experienced
            but also very passionate people who love dogs. We are committed to growing the
            professional capacity of dog groomers and raise the standards of care to our canine friends.
          </p>
        </div>

        <div className="why-card">
          <FaRibbon className="why-icon" />
          <h3>Qualified private dog grooming course</h3>
          <p>
            the dog grooming field is not well regulated and there are plenty of dog groomers
            who claim to be able to teach grooming but don’t have the capacity. We are the only
            private dog grooming course service that is qualified and accredited by the IPG, City and
            Guilds and other organisations. Our courses and papers are recognised by these and other
            licensing bodies.
          </p>
        </div>

        <div className="why-card">
          <FaHeart className="why-icon" />
          <h3>Speciality courses</h3>
          <p>
            we have a variety of courses designed to improve certain aspects of dog grooming
            as our students might prefer. We also have different courses for specific breeds which
            are available to students who would like to gain extra experience in certain breeds.
          </p>
        </div>
      </div>
    </section>
  );
};

export default WhyChoose;
