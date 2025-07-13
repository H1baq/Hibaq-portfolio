import React from 'react';
import './About.css';
import blogImage from '../assets/blog.jpg';
import blog2image from '../assets/blog2.jpg';
import blog3image from '../assets/blog3.jpg';



const blogPosts = [
  {
    title: "How I Started My Dev Journey",
    description:
      "A personal reflection on how I transitioned into frontend development, the challenges I faced, and what keeps me going.",
    image: blogImage,
    link: "https://how-i-started-my-dev-journey.hashnode.dev/",
  },
  {
    title: "Building My First Full Stack App",
    description:
      "From backend setup to frontend polish—how I built MealMate and what I learned about Flask, React, and APIs.",
    image: blog3image,
    link: "https://how-i-started-my-dev-journey.hashnode.dev/building-my-first-full-stack-app-the-edulink-journey",
  },
  {
    title: "UI/UX Tips I Wish I Knew Earlier",
    description:
      "Design isn’t just pretty colors. Here's what I’ve learned about creating intuitive, user-friendly interfaces.",
    image: blog2image,
    link: "https://hashnode.com/@Hibby",
  },
];

const About = () => {
  return (
    <section id="about" className="about">
      <div className="about-container">
        <h2 className="about-title">My Tech Journey</h2>

        <p className="about-description">
          From my very first lines of HTML to building full-stack applications, my journey into tech has been one of discovery,
          creativity, and constant learning. Below are some of my recent writings where I share what I'm learning and building.
        </p>

        {/* Blog Cards Section */}
        <div className="blog-cards">
          {blogPosts.map((post, index) => (
            <div className="blog-card" key={index}>
              <div className="blog-image-wrapper">
                <img src={post.image} alt={post.title} className="blog-image" />
              </div>
              <div className="blog-content">
                <h3 className="blog-title">{post.title}</h3>
                <p className="blog-snippet">{post.description}</p>
                <a
                  href={post.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="blog-link"
                >
                  Read More →
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Tech Highlights */}
        <h3 className="tech-title">Tech Highlights</h3>
        <div className="about-highlights">
          <div className="highlight">🌐 HTML, CSS, JavaScript</div>
          <div className="highlight">⚛️ React & Vite</div>
          <div className="highlight">🎨 UI/UX Enthusiast</div>
          <div className="highlight">📱 Mobile-First Design</div>
          <div className="highlight">🧪 Testing & Debugging</div>
          <div className="highlight">🌈 Passion for Learning</div>
        </div>
      </div>
    </section>
  );
};

export default About;
