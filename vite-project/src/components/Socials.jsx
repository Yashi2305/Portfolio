import React from "react";
import "./Socials.css";
import { FaGithub, FaLinkedin} from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const Socials = () => {
  const socials = [
    { name: "GitHub", icon: <FaGithub />, link: "https://github.com/Yashi2305" },
    { name: "LinkedIn", icon: <FaLinkedin />, link: "https://www.linkedin.com/in/yashi-singh-79787497/" },
    { name: "Email", icon: <MdEmail />, link: "mailto:singhyashi.800@gmail.com" },
  ];

  return (
  
    <div id="socials" className="socials-section">
      <h1 className="section-title">Connect with Me</h1>
      <div className="socials-list">
        {socials.map((social, index) => (
          <div
            key={index}
            className="social-item"
            onClick={() => window.open(social.link, "_blank")}
          >
            <div className="social-icon">{social.icon}</div>
            <a
              href={social.link}
              target={social.name === "Email" ? "_self" : "_blank"}  // Email link opens in the same tab
              rel="noopener noreferrer"
              className="social-link"
            >
              {social.name}
            </a>
          </div>
        ))}
      </div>
    </div>
  
  );
};

export default Socials;
