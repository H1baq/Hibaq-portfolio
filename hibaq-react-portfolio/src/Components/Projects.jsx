import React from 'react';
import './Projects.css';

const projects = [
  {
    title: 'EduLink – Full Stack School Website',
    tech: 'React, Flask, SQL',
    description: 'A fully functional school platform with student enrollment, authentication, and admin dashboard.',
    github: 'https://github.com/H1baq/Edu_Link',
    live: 'https://edulink-live.netlify.app',
  },
  {
    title: 'Explore Kenya – Travel Site',
    tech: 'HTML, CSS, JavaScript',
    description: 'Responsive website featuring destinations, filterable experiences, and interactive design.',
    github: 'https://github.com/H1baq/phase-1-project',
    live: 'https://phase-1-project-tan.vercel.app/',
  },
  {
    title: 'Studio Pro – Branding Portfolio',
    tech: 'React, Vite',
    description: 'Portfolio site for a design studio offering logos, posters, and digital services.',
    github: 'https://github.com/H1baq/my-portfolio',
    live: 'https://my-portfolio-blush-seven-53.vercel.app/',
  },
  {
    title: 'Meal Mate – CLI Meal Prep Tool',
    tech: 'Python',
    description: 'A command-line app for planning, tracking, and managing weekly meal prep routines.',
    github: 'https://github.com/H1baq/meal-mate',
  },
];

const Projects = () => {
  return (
    <section id="projects" className="projects">
      <div className="projects-container">
        <h2 className="projects-title">Projects</h2>
        <div className="project-grid">
          {projects.map((project, index) => (
            <div className="project-card" key={index}>
              <h3 className="project-title">{project.title}</h3>
              <p className="project-tech">{project.tech}</p>
              <p className="project-description">{project.description}</p>
              <div className="project-buttons">
                <a href={project.github} target="_blank" rel="noopener noreferrer" className="btn btn-github">
                  GitHub
                </a>
                {project.live && (
                  <a href={project.live} target="_blank" rel="noopener noreferrer" className="btn btn-live">
                    Live Demo
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
