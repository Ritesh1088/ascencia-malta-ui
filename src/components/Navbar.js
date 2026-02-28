import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import "../styles/navbar.css";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const handleNavigation = (path) => {
    setMenuOpen(false);
    navigate(path);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleLogoClick = () => {
    if (location.pathname === "/") {
      window.location.reload();
    } else {
      navigate("/");
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <>
      <div className="navbar">
        <div
          className="logo"
          onClick={handleLogoClick}
          style={{ cursor: "pointer" }}
        >
          <img
            src="/images/Ascencia-Malta-Logo.jpg"
            alt="Ascencia Logo"
          />
        </div>

        <div className="menu-icon" onClick={() => setMenuOpen(true)}>
          ☰
        </div>
      </div>

      {menuOpen && (
        <div className="menu-overlay">
          
          <div
            className="close-btn"
            onClick={() => setMenuOpen(false)}
          >
            ✕
          </div>

          <div className="menu-container">

            <div className="menu-left">
              <h1 onClick={() => handleNavigation("/")}>HOME</h1>
              <h1 onClick={() => handleNavigation("/about")}>ABOUT</h1>
              <h1 onClick={() => handleNavigation("/contact")}>CONTACT</h1>
            </div>

            <div className="menu-right">
              <img src="/images/business-campus.jpeg" alt="Campus" />
              <img src="/images/classroom modern.jpg" alt="University" />
            </div>

          </div>

          {/* SVG WATER WAVE */}
          <div className="wave-container">
            <svg viewBox="0 0 1440 320">
              <path
                fill="#00c6ff"
                fillOpacity="1"
                d="M0,224L80,218.7C160,213,320,203,480,192C640,181,800,171,960,186.7C1120,203,1280,245,1360,266.7L1440,288L1440,320L0,320Z"
              ></path>
            </svg>
          </div>

        </div>
      )}
    </>
  );
};

export default Navbar;