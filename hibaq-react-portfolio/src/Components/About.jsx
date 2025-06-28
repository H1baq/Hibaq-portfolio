import React from 'react';
import './About.css';

const About = () => {
  return (
    <section id="about" className="about">
      <div className="about-container">
        <h2 className="about-title">About Me</h2>
        <p className="about-description">
          I'm Hibaq Adan a frontend developer with a love for clean design, responsive layouts, and intuitive user experiences.
          I enjoy translating ideas into elegant, functional code and I'm always excited to learn and grow.
        </p>
        <div className="about-highlights">
          <div className="highlight">🌐 HTML, CSS, JavaScript</div>
          <div className="highlight">⚛️ React & Vite</div>
          <div className="highlight">🎨 UI/UX Enthusiast</div>
          <div className="highlight">📱 Mobile-First Design</div>
        </div>
      </div>
    </section>
  );
};

export default About;
