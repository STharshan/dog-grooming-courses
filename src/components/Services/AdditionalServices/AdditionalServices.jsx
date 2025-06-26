import React from "react";
import "./AdditionalServices.css";

const services = [
  {
    title: "Taster Day",
    description: "Experience dog grooming basics with our free introductory day.",
    price: "Free",
  },
  {
    title: "Owner Groomer",
    description: "1-day course perfect for pet owners wanting to learn how to groom their own dogs.",
    price: "£150",
  },
  {
    title: "Refresher Course",
    description: "For recently qualified groomers - our previous trainees get this course completely free.",
    price: "Free",
  },
];

const AdditionalServices = () => {
  return (
    <section className="additional-container">
      <h2 className="additional-heading">Explore Our Additional Services and Support</h2>
      <p className="additional-description">
        At our Leicester-based dog grooming academy, we offer a comprehensive range of supplementary
        services to enhance your learning journey. From taster sessions to refresher courses, we’re
        committed to supporting both aspiring and established groomers in achieving their
        professional goals.
      </p>

      <div className="service-grid">
        {services.map((service, index) => (
          <div key={index} className="service-card">
            <h3 className="service-title">{service.title}</h3>
            <p className="service-text">{service.description}</p>
            <p className="service-price">{service.price}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default AdditionalServices;
