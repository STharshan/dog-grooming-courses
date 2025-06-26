// File: src/components/Footer.js
import React from "react";
import "./Footer.css";
import { FaFacebookF, FaInstagram } from "react-icons/fa";
import { FiPhone, FiMail, FiMapPin } from "react-icons/fi";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h3>Contact Us</h3>
          <p><FiMapPin /> Coplow Lane, Billesdon Leicestershire, LE7 9DQ, United Kingdom</p>
          <p><FiPhone /> +44 7930 549 717</p>
          <p><FiMail /> bernieboo200@gmail.com</p>
        </div>

        <div className="footer-section">
          <h3>Quick Links</h3>
          <ul>
            <li>Home</li>
            <li>About Us</li>
            <li>Our Services</li>
            <li>Gallery</li>
            <li>Contact Us</li>
            <li>Privacy Policy</li>
            <li>Terms & Conditions</li>
          </ul>
        </div>

        <div className="footer-section">
          <h3>Connect With Us</h3>
          <p>Follow us on social media to see our latest work and updates.</p>
          <div className="social-icons">
            <FaFacebookF className="icon" />
            <FaInstagram className="icon" />
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© 2025 Leicester Dog Grooming Courses. Partnered with <strong>Ansely</strong>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
