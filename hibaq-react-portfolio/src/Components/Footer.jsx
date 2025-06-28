import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <h3 className="footer-brand">Hibaq | Full Stack Developer</h3>

        <ul className="footer-list">
          <li>
            <i className="fas fa-phone-alt"></i>
            <span>Phone:</span>
            <a href="tel:+254703681211">+254 703 681 211</a>
          </li>
          <li>
            <i className="fas fa-envelope"></i>
            <span>Email:</span>
            <a href="mailto:hibaqku7@gmail.com">hibaqku7@gmail.com</a>
          </li>
          <li>
            <i className="fab fa-github"></i>
            <span>GitHub:</span>
            <a href="https://github.com/H1baq" target="_blank" rel="noreferrer">
              H1baq
            </a>
          </li>
          <li>
            <i className="fab fa-linkedin"></i>
            <span>LinkedIn:</span>
            <a href="https://www.linkedin.com/in/hibaq-adan-98bb86363?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app" target="_blank" rel="noreferrer">
              Hibaq Adan
            </a>
          </li>
        </ul>

        <p className="footer-note">© {new Date().getFullYear()} Hibaq Adan Kuresh</p>
        <p className='location-note'>📍 Nairobi, Kenya</p>
      </div>
    </footer>
  );
};

export default Footer;
