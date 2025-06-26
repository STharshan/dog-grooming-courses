import React, { useState } from "react";
import "./TestimonialsCarousel.css";

const testimonials = [
  {
    quote:
      "\"I couldn't recommend Leicester Dog Grooming Courses highly enough. The attention to detail and personalized approach has prepared me perfectly for a career in dog grooming.\"",
    name: "Mark Johnson",
    title: "Course Graduate"
  },
  {
    quote:
      "\"You come as a student, but leave as a friend. The training was comprehensive and Bernie made the whole experience enjoyable and informative.\"",
    name: "Jane Smith",
    title: "Professional Dog Groomer"
  },
  {
    quote:
      "\"The course exceeded all my expectations. Bernie's expertise and patience makes learning the art of dog grooming a truly wonderful experience.\"",
    name: "Sarah Williams",
    title: "Pet Salon Owner"
  }
];

export default function TestimonialsCarousel() {
  const [index, setIndex] = useState(0);

  const prevTestimonial = () => {
    setIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const nextTestimonial = () => {
    setIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="testimonial-section">
      <div className="testimonial-header">
        <span className="testimonial-sub">What Our Students Say</span>
        <h2 className="testimonial-title">Testimonials</h2>
        <p className="testimonial-description">
          Hear from our graduates about their experience learning with Leicester Dog Grooming Courses.
        </p>
      </div>
      <div className="testimonial-card">
        <p className="testimonial-quote">{testimonials[index].quote}</p>
        <p className="testimonial-name">{testimonials[index].name}</p>
        <p className="testimonial-role">{testimonials[index].title}</p>
      </div>
      <div className="testimonial-controls">
        <button onClick={prevTestimonial}>&larr;</button>
        <div className="testimonial-dots">
          {testimonials.map((_, i) => (
            <span
              key={i}
              className={i === index ? "dot active" : "dot"}
              onClick={() => setIndex(i)}
            ></span>
          ))}
        </div>
        <button onClick={nextTestimonial}>&rarr;</button>
      </div>
    </div>
  );
}
