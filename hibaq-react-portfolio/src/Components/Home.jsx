import React from 'react';
import './Home.css';
import backgroundVideo from '../assets/background.mp4'; // ✅ Adjust path as needed

const Home = () => {
  return (
    <section id="home" className="hero">
      <video autoPlay muted loop playsInline className="background-video">
        <source src={backgroundVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <div className="hero-content">
        <h1 className="hero-title">
          <span className="greeting">Hey there, I’m</span>
          <span className="name">Hibaq Adan</span>
        </h1>
        <p className="hero-subtitle">Frontend Developer & UI Enthusiast</p>
        <p className="hero-description">
          I design and code responsive, aesthetic, and accessible websites. Driven by simplicity and passionate about creative problem-solving.
        </p>
        <div className="hero-buttons">
          <button
            className="btn btn-primary"
            onClick={() =>
              document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })
            }
          >
            View My Work
          </button>
          <button
            className="btn btn-secondary"
            onClick={() =>
              document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
            }
          >
            Get In Touch
          </button>
        </div>
      </div>
    </section>
  );
};

export default Home;
