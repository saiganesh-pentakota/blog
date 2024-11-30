// PersonalBlog.js
import React, { useState } from 'react';
import './../resource/css/PersonalBlog.css';

import WaveDark from './../resource/svg/wavedark.svg';
import WaveLight from './../resource/svg/wavelight.svg';
import lightSvgBackground from './../resource/svg/background1.svg';
import darkSvgBackground from './../resource/svg/background2.svg';

import darkLogo from './../resource/images/logo1.png';
import lightLogo from './../resource/images/logo2.png';

import dpImage from './../resource/images/dp.png';
import facebook from './../resource/images/facebook.png';
import instagram from './../resource/images/instagram.png';
import youtube from './../resource/images/youtube.png';
import whatsapp from './../resource/images/whatsapp.png';
import linkedin from './../resource/images/linkedin.png';
import twitter from './../resource/images/twitter.png';
import moon from './../resource/images/moon.png';
import sun from './../resource/images/sun.png';
import AboutMe from './AboutMe';

const PersonalBlog = () => {
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light');

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
  };

  const backgroundStyle = {
    backgroundImage: `url(${theme === 'light' ? lightSvgBackground : darkSvgBackground})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    transition: 'background 0.3s ease-in-out',
    height: 'auto', 
    width: '100%',   
  };

  return (
    <div className={`blog-container ${theme}`} style={backgroundStyle}>
      <div className="logo-container"><img src={theme === 'light' ? lightLogo : darkLogo} alt="Logo" className="logo" /></div>
      <header className={`hero-section ${theme}`} style={{ backgroundImage: `url(${dpImage})` }}>
        <div className="hero-content">
          <h1 className="hero-title">SAIGANESH PENTAKOTA</h1>
        </div>
        <button onClick={toggleTheme} className="theme-toggle-btn">
          <img src={theme === 'light' ? moon : sun} alt="Switch Theme" className={theme === 'light' ? 'moon-icon' : 'sun-icon'} />
        </button>
      </header>

      <AboutMe />
     
      <footer>
        <div className="footer-content">
          <div className="footer-curve">
            <img src={theme === 'light' ? WaveLight : WaveDark} alt="wave curve" />
          </div>
          <div className="socials">
            <a href="https://www.facebook.com/saiganesh.pentakota/" className="social-link"><img src={facebook} alt="Facebook" className="custom-icon" /></a>
            <a href="https://www.instagram.com/saiganesh_pentakota/" className="social-link"><img src={instagram} alt="Instagram" className="custom-icon" /></a>
            <a href="https://www.youtube.com/@saiganeshpentakota" className="social-link"><img src={youtube} alt="Youtube" className="custom-icon" /></a>
            <a href="https://wa.me/9154484859" className="social-link"><img src={whatsapp} alt="Whatsapp" className="custom-icon" /></a>
            <a href="https://in.linkedin.com/in/saiganesh-pentakota" className="social-link"><img src={linkedin} alt="LinkedIn" className="custom-icon" /></a>
            <a href="https://x.com/saiganesh_pns/" className="social-link"><img src={twitter} alt="Twitter" className="custom-icon" /></a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default PersonalBlog;
