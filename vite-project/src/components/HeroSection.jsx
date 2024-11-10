import React from 'react';
import './HeroSection.css';  // Import the CSS file

function HeroSection() {
  return (
  
      <section className="hero-section">
        <div className="left-section">
          <h1 className="name">Yashi Singh</h1>
          <p className="description">Student, MERN Stack Developer, Explorer</p>
        </div>
        <div className="right-section">
          <img src='/profile.jpg' alt="Yashi Singh" className="image" />
        </div>
      </section>
  
  );
}

export default HeroSection;
