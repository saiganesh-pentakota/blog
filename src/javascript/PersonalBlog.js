// src/PersonalBlog.js

import React, { useState } from 'react';
import { FaGithub, FaLinkedin, FaTwitter, FaYoutube, FaSun, FaMoon } from 'react-icons/fa';
import './../resource/css/PersonalBlog.css';
import darkLogo from './../resource/images/dark-logo.png';
import dpImage from './../resource/images/dp.png';
import WaveDark from './../resource/images/wavedark.svg';
import WaveLight from './../resource/images/wavelight.svg';
import Baloon from './../resource/images/baloon.svg';
import AboutMe from './AboutMe';  // Import the AboutMe component

const PersonalBlog = () => {
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light');

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
  };

  return (
    <div className={`blog-container ${theme}`}>
      <div className="logo-container">
        <img src={darkLogo} alt="Logo" className="logo" />
      </div>
      <header
        className={`hero-section ${theme}`}
        style={{ backgroundImage: `url(${dpImage})` }}
      >
        <div className="hero-content">
          <h1 className="hero-title">SAIGANESH PENTAKOTA</h1>
          <p className="hero-subtitle">MCA | Software Engineer</p>
        </div>
        <button onClick={toggleTheme} className="theme-toggle-btn">
          {theme === 'light' ? <FaMoon /> : <FaSun />}
        </button>
      </header>
      
      {/* Use the AboutMe component here */}
      <AboutMe />
      <div className="footer-curve">
            <img src={Baloon} alt="wave curve" />
          </div>

      <section className="additional-info">
        <h2>Additional Information</h2>
        <ul>
          <li>🌐 Proficient in Java, React.js, Node.js, and Oracle DB</li>
          <li>💻 Skilled in full-stack development</li>
          <li>🎨 Hobbies: Singing, art creation, and exploring technology</li>
          <li>🚀 Passionate about continuous learning and upskilling</li>
          <li>🧩 Strong problem-solving and analytical skills</li>
        </ul>
      </section>

      <footer>
        <div className="footer-content">
          <div className="footer-curve">
            <img src={theme === 'light' ? WaveLight : WaveDark} alt="wave curve" />
          </div>
          <div className="socials">
            <a href="https://github.com/saiganeshpentakota" className="social-link">
              <FaGithub />
            </a>
            <a href="https://www.linkedin.com/in/yourusername" className="social-link">
              <FaLinkedin />
            </a>
            <a href="https://radio.garden/" className="social-link">
              <FaTwitter />
            </a>
            <a href="https://www.youtube.com/@saiganeshpentakota" className="social-link">
              <FaYoutube />
            </a>
          </div>
          <button className="join-linktree-btn">Join me on Linktree</button>
        </div>
      </footer>
    </div>
  );
};

export default PersonalBlog;
