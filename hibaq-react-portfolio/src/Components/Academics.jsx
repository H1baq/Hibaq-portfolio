import React from 'react';
import './Academics.css';

const Academics = () => {
  return (
    <section id="academics" className="academics">
      <div className="academics-container">
        <h2 className="academics-title">Academic Background</h2>
        <div className="timeline">
          <div className="timeline-item">
            <div className="timeline-dot"></div>
            <div className="timeline-content">
              <h3 className="timeline-institution">Bachelor’s Degree in Information Technology</h3>
              <p className="timeline-details">
                Currently pursuing a degree focused on systems development, networking, and emerging technologies.
              </p>
              <span className="timeline-status ongoing">Ongoing</span>
            </div>
          </div>

          <div className="timeline-item">
            <div className="timeline-dot"></div>
            <div className="timeline-content">
              <h3 className="timeline-institution">Full Stack Development Certificate – Moringa School</h3>
              <p className="timeline-details">
                Completed hands-on training in frontend (HTML, CSS, JS, React) and backend (Python, Flask, SQL) development.
              </p>
              <span className="timeline-status completed">Completed</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Academics;
