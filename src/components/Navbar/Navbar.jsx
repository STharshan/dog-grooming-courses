import React, { useState } from "react";
import "./Navbar.css";
import { FiPhone, FiMenu, FiX } from "react-icons/fi";
import logo from "../../assets/favicon.ico"; 

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <img src={logo} alt="Logo" className="logo" />
        <div className="menu-icon" onClick={toggleMenu}>
          {menuOpen ? <FiX /> : <FiMenu />}
        </div>
        <ul className={`nav-links ${menuOpen ? "active" : ""}`}>
          <li><a href="#" className="active">Home</a></li>
          <li><a href="#">About</a></li>
          <li><a href="#">Services</a></li>
          <li><a href="#">Gallery</a></li>
          <li><a href="#">Contact</a></li>
          <li><a href="#">Blog</a></li>
          <li><a href="#">Book Course</a></li>
        </ul>
        <div className="phone">
          <FiPhone className="phone-icon" />
          <a href="tel:+447930549717">+44 7930 549 717</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
