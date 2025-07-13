import React from 'react';
import './index.css';                     // ⬅️ add this if you don’t already have it
import backgroundVideo from './assets/background.mp4'; // ⬅️ put your video here

import Navbar from './Components/Navbar';
import Home from './Components/Home';
import About from './Components/About';
import Academics from './Components/Academics';
import Projects from './Components/Projects';
import Contact from './Components/Contact';
import Footer from './Components/Footer';

const App = () => {
  return (
    <>
      {/*GLOBAL FULL‑SCREEN VIDEO  */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="background-video"
      >
        <source src={backgroundVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <div className="app-content">
        <Navbar />
        <Home />
        <About />
        <Academics />
        <Projects />
        <Contact />
        <Footer />
      </div>
    </>
  );
};

export default App;
