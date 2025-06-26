import React from "react";
import "./DogGroomingCTA.css";

export default function DogGroomingCTA() {
  return (
    <div className="cta-section">
      <h2 className="cta-title">Ready to Start Your Dog Grooming Journey?</h2>
      <p className="cta-subtitle">
        Book your course today and take the first step toward a rewarding career in professional dog grooming.
      </p>
      <div className="cta-buttons">
        <button className="cta-btn secondary">Contact Us</button>
        <button className="cta-btn primary">
          <span className="icon">📅</span> View Course Schedule
        </button>
      </div>
    </div>
  );
}
