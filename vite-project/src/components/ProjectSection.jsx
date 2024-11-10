import React from "react";
import "./ProjectSection.css";
import Zoom from "react-reveal/Bounce";

const ProjectSection = () => {
  const projects = [
    {
      name: "Dine Divine -A food delivery website",
      image: "/dine.jpeg", // Replace with actual image path
      link: "https://dinedivine.netlify.app/", // Link to the live project
      githubLink: "https://github.com/Yashi2305/DineDivine",
    },
    {
      name: "Movie Streaming Website",
      image: "/movie.jpeg",
      link: "https://euphonious-sprinkles-6fb1dc.netlify.app/",
      githubLink: "https://github.com/Yashi2305/MovieApp",
    },
    {
      name: "Urban Oasis-A Hotel Management Website",
      image: "/hotel.jpeg",
      link: "https://yourweatherapp.com",
      githubLink: "https://github.com/Yashi2305/Hotel",
    },
  ];

  return (
    <Zoom>
      <div id="project" className="project-section">
        <h1 className="section-title">Projects</h1>
        <div className="project-list">
          {projects.map((project, index) => (
            <div
              key={index}
              className="project-item"
              onClick={() => window.open(project.link, "_blank")}
            >
              <div className="project-image">
                <img src={project.image} alt={project.name} />
                <div className="project-overlay">
                  <div className="overlay-content">View Project</div>
                </div>
              </div>
              <div className="project-details">
                <h2 className="project-name">{project.name}</h2>
                <a
                  href={project.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="github-link"
                >
                  GitHub Repository
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Zoom>
  );
};

export default ProjectSection;
