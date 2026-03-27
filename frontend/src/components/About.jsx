import React from 'react';
import './About.css';
import { FiTarget, FiCode, FiCpu } from 'react-icons/fi';
import profileImage from '../assets/profile.png';

const About = () => {
  return (
    <section id="about" className="about bg-alt">
      <div className="container">
        <div className="about-content reveal">
          <div className="about-text">
            <h2 className="section-title">About Me</h2>
            <p>
              I am a conceptually driven Computer Science student specializing in Machine Learning and backend engineering. My core philosophy revolves around <strong>structured thinking</strong> and designing scalable, robust solutions that solve real-world problems. 
            </p>
            <p>
              Currently, I am pursuing my Bachelor of Technology at Lovely Professional University, with a strong focus on building AI-powered systems that are both intuitive and highly performant. From crafting advanced deep learning pipelines to structuring secure RESTful APIs and optimized relational databases, I approach every project with an engineering mindset and a commitment to producing polished, high-end products.
            </p>
            
            <div className="about-highlights">
              <div className="highlight-item">
                <div className="icon"><FiCpu /></div>
                <span>Machine Learning</span>
              </div>
              <div className="highlight-item">
                <div className="icon"><FiCode /></div>
                <span>Scalable Backend</span>
              </div>
              <div className="highlight-item">
                <div className="icon"><FiTarget /></div>
                <span>Structured Thinking</span>
              </div>
            </div>
          </div>
          
          <div className="about-image-wrapper">
             <img src={profileImage} alt="Akshita Dhaka" className="about-image" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
