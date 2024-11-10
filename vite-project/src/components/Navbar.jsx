import React, { useState, useEffect } from "react";

function Navbar() {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth < 768);
      if (window.innerWidth >= 768) {
        setIsNavOpen(false); // Close the dropdown when resizing to large screen
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const toggleNav = () => setIsNavOpen(!isNavOpen);

  return (
    <nav style={styles.navbar}>
      <div style={styles.brand}>Yashi Singh</div>

      {/* Hamburger icon for small devices */}
      {isSmallScreen && (
        <div style={styles.navIcon} onClick={toggleNav}>
          ☰
        </div>
      )}

      {/* Navigation links */}
      <ul
        style={{
          ...styles.navLinks,
          display: isSmallScreen ? (isNavOpen ? "flex" : "none") : "flex",
          flexDirection: isSmallScreen ? "column" : "row",
          position: isSmallScreen ? "absolute" : "static",
          top: isSmallScreen ? "60px" : "auto",
          right: isSmallScreen ? "0" : "auto",
          backgroundColor: isSmallScreen ? "#333" : "transparent",
          width: isSmallScreen ? "200px" : "auto", // Set a fixed width for the dropdown
          zIndex: isSmallScreen ? 1000 : "auto",
        }}
      >
        <li style={styles.navItem}>
          <a href="#about" style={styles.navLink}>
            About
          </a>
        </li>
        <li style={styles.navItem}>
          <a href="#education" style={styles.navLink}>
            Education
          </a>
        </li>
        <li style={styles.navItem}>
          <a href="#tech" style={styles.navLink}>
            Tech Stack
          </a>
        </li>
        <li style={styles.navItem}>
          <a href="#project" style={styles.navLink}>
            Projects
          </a>
        </li>
        <li style={styles.navItem}>
          <a href="#socials" style={styles.navLink}>
            Socials
          </a>
        </li>
      </ul>
    </nav>
  );
}

const styles = {
  navbar: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "1rem 2rem",
    backgroundColor: "#333",
    color: "#fff",
    position: "relative",
  },
  brand: {
    fontSize: "1.5rem",
    fontWeight: "bold",
  },
  navIcon: {
    display: "block",
    fontSize: "2rem",
    cursor: "pointer",
    color: "#fff",
  },
  navLinks: {
    listStyleType: "none",
    gap: "1.5rem",
    alignItems: "center",
    transition: "all 0.3s ease",
  },
  navItem: {},
  navLink: {
    color: "#fff",
    textDecoration: "none",
    fontSize: "1.2rem",
    padding: "0.5rem",
  },
};

export default Navbar;
