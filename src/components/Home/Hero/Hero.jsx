import React from "react";
import "./Hero.css";
import dogImg from "../../../assets/pexels-photo.jpeg"; // Replace with your actual image path

const Hero = () => {
  return (
    <section className="hero-section">
      <div className="hero-content">
        <img src={dogImg} alt="Dog" className="hero-image" />

        <h2 className="hero-heading">
          <span className="text-blue">
            🐾 Paws-itively Passionate,
          </span>{" "}
          <span className="text-pink">Surprisingly Affordable</span> 🐾
        </h2>

        <h3 className="hero-subheading">
          ✨ <span className="text-yellow">The UK’s Best-Value Grooming Course</span> ✨
        </h3>

        <p className="hero-description">
          Discover why students love our fun, friendly, and affordable dog grooming academy.
          Learn from the best, make new friends, and unleash your passion for pups!
        </p>

        <button className="hero-button">Read More</button>
      </div>
    </section>
  );
};

export default Hero;
