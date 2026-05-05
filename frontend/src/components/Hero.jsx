import React from 'react';
import './Hero.css';
import { FiDownload, FiArrowRight } from 'react-icons/fi';

import profileImage from '../assets/profile.png';

const Hero = () => {
  return (
    <section id="home" className="hero">
      <div className="container hero-container">
        <div className="hero-content fade-in">
          <p className="greeting">Hi, I'm</p>
          <h1 className="name">Akshita Dhaka</h1>
          <h2 className="title">ML & Backend Developer</h2>
          <p className="tagline">
            I design and build <span className="highlight">scalable systems</span> powered by <span className="highlight">machine learning</span> and solid engineering.
          </p>
          <p className="sub-tagline">
            Scalable systems. Structured thinking. Machine learning at the core.
          </p>
          <div className="hero-buttons">
            <a href="/Akshita_Dhaka_Resume.pdf" className="btn-primary" target="_blank" rel="noopener noreferrer">
              View Resume
              <FiArrowRight size={18} />
            </a>
            <a href="/Akshita_Dhaka_Resume.pdf" className="btn-primary" download="Akshita_Dhaka_Resume.pdf">
              Download Resume
              <FiDownload size={18} />
            </a>
          </div>
        </div>
        <div className="hero-image-wrapper fade-in">
          <img src={profileImage} alt="Akshita Dhaka" className="hero-image-cutout" />
        </div>
      </div>
      <div className="scroll-indicator fade-in">
        <div className="mouse">
          <div className="wheel"></div>
        </div>
        <div className="arrows">
          <span></span><span></span><span></span>
        </div>
      </div>
    </section>
  );
};

export default Hero;
