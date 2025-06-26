import React from "react";
import "./CoursesPage.css";

const courseData = [
  {
    title: "8 week Professional Course includes track 1IPG training, membership & exam fees",
    description: "A full professional course with IPG training, membership, and exam fees included.",
    price: "£3500",
    popular: true,
  },
  {
    title: "Flexicourse* (training to work around you, 18 days in addition to free ongoing support including grooming back up)",
    description: "Flexible training scheduled around you with 18 days of grooming and ongoing support.",
    price: "£2500",
    popular: true,
  },
  {
    title: "Flexi Professional Course includes track 1IPG training, membership & exam fees",
    description: "Professional-level flexible course including IPG training, membership, and exams.",
    price: "£3800",
    popular: true,
  },
  {
    title: "Taster Day",
    description: "A complimentary introductory session to explore the course and facilities.",
    price: "Free",
    popular: false,
  },
  {
    title: "2 Week Foundation Course",
    description: "A comprehensive 2-week course covering the core basics of grooming.",
    price: "£1500",
    popular: false,
  },
  {
    title: "3 week (18 days in addition free ongoing support including back up)",
    description: "An extended grooming course with 18 training days and free ongoing support.",
    price: "£2250",
    popular: false,
  },
  {
    title: "2 Week Dog Grooming Assistant Course",
    description: "Entry-level training to become a certified dog grooming assistant.",
    price: "£1500",
    popular: false,
  },
];

const CoursesPage = () => {
  return (
    <div className="courses-container">
      <h4 className="courses-subtitle">Training and Prices</h4>
      <h1 className="courses-title">Dog Grooming Training and Prices</h1>
      <div className="courses-grid">
        {courseData.map((course, index) => (
          <div
            key={index}
            className={`course-card ${
              index === 6 ? "last-center" : ""
            }`}
          >
            {course.popular && <div className="popular-badge">⭐ Most Popular</div>}
            <h3 className="course-title">{course.title}</h3>
            <p className="course-desc">{course.description}</p>
            <p className="course-price">{course.price} <span>/ one-time</span></p>
            <button className="read-more-btn">Read More</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CoursesPage;
