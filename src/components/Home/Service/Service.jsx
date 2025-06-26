import React from "react";
import "./Service.css";
import { FaCut, FaCertificate, FaMedal } from "react-icons/fa";
import img1 from "../../../assets/second.png"; // Replace with your image

const services = [
  {
    image: img1,
    icon: <FaCut />,
    title: "Beginner Grooming Course",
    description: "Perfect for those new to grooming. Learn the fundamentals of dog handling, bathing, drying, and basic coat maintenance.",
  },
  {
    image: img1,
    icon: <FaMedal />,
    title: "Advanced Techniques",
    description: "Elevate your skills with specialized techniques for different breed styles, creative grooming, and handling challenging coats.",
  },
  {
    image: img1,
    icon: <FaCertificate />,
    title: "Professional Certification",
    description: "Comprehensive training that prepares you for a career in dog grooming with industry-recognized certification upon completion.",
  },
];

const Services = () => {
  return (
    <section className="services-section">
      <div className="services-header">
        <h2>Professional Dog Grooming Courses</h2>
        <p>Learn the art of dog grooming with our comprehensive courses designed for all skill levels.</p>
      </div>

      <div className="services-cards">
        {services.map((service, index) => (
          <div className="card" key={index}>
            <img src={service.image} alt={service.title} />
            <div className="card-content">
              <div className="icon">{service.icon}</div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
              <a href="#">Learn More →</a>
            </div>
          </div>
        ))}
      </div>

      <div className="services-btn">
        <button>View All Services</button>
      </div>
    </section>
  );
};

export default Services;
