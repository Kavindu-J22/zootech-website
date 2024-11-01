// src/components/Footer.js
import React from 'react';
import { FaFacebook, FaTwitter, FaLinkedin } from 'react-icons/fa';
// import './Footer.css';

const Footer = () => (
  <footer>
    <p>&copy; {new Date().getFullYear()} ZooTech. All Rights Reserved.</p>
    <div className="social-icons">
      <FaFacebook />
      <FaTwitter />
      <FaLinkedin />
    </div>
  </footer>
);

export default Footer;
