import React from "react";
import "./TechStack.css";
import Bounce from 'react-reveal/Bounce';

const TechStack = () => {
  const techStacks = [
    { name: "React", category: "Frontend", icon: "⚛️" },
    { name: "Node.js", category: "Backend", icon: "🟢" },
    { name: "Python", category: "Programming", icon: "🐍" },
    { name: "Java", category: "Programming", icon: "☕" },
    { name: "Html", category: "Frontend", icon: "📄" },
    { name: "CSS", category: "Frontend", icon: "🎨" },
    { name: "JavaScript", category: "Frontend and backend", icon: "📜" },
    { name: "MongoDB", category: "Database", icon: "🍃" },
    { name: "MySQL", category: "Database", icon: "🐬" },
    { name: "TailwindCSS", category: "Frontend", icon: "💨" },
    { name: "MaterialUI", category: "Frontend", icon: "📦" },
    { name: "Bootstrap", category: "Frontend", icon: "📐" },
    { name: "Git", category: "Tools", icon: "🔧" },
    { name: "GitHub", category: "Tools", icon: "🐙" },
];

  return (
    <Bounce>
    <div id="tech" className="tech-timeline-section">
      <h1 className="section-title">Tech Stack</h1>
      <div className="tech-grid">
        {techStacks.map((tech, index) => (
          <div key={index} className="tech-card">
            <div className="icon">{tech.icon}</div>
            <h2>{tech.name}</h2>
            <p>{tech.category}</p>
          </div>
        ))}
      </div>
    </div>
    </Bounce>
  );
};

export default TechStack;