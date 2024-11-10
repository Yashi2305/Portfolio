import React from "react";
import "./AboutSection.css"; // Import the CSS file for styles
import Zoom from 'react-reveal/Zoom';

function AboutSection() {
  return (
    <Zoom>
    <section id="about" className="about-section">
      <div className="about-text">
        <h2 className="about-title">A little bit about me...</h2>
        <p className="about-description">
          Hello! I'm Yashi Singh,hailing from Prayagraj, Uttar Pradesh, a
          passionate student and MERN Stack Developer with a love for exploring
          new technologies. I’m always looking to enhance my skills and take on
          new challenges.
        </p>
        <button className="contact-button">Contact Me</button>
      </div>
      <div className="about-image-wrapper">
        <img src="/p2.jpg" alt="Yashi Singh" className="about-image" />
      </div>
    </section>
    </Zoom>
  );
}

export default AboutSection;
