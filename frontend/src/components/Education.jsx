import React from 'react';
import './Education.css';

const educationData = [
  {
    institution: "Lovely Professional University",
    location: "Phagwara, Punjab",
    degree: "Bachelor of Technology",
    major: "Computer Science and Engineering",
    duration: "Aug '23 – Present",
    score: "CGPA: 8.50"
  },
  {
    institution: "St. Mary's School",
    location: "Bijnor, Uttar Pradesh",
    degree: "Intermediate",
    major: "Science Stream",
    duration: "Apr '21 – Mar '22",
    score: "Percentage: 81%"
  },
  {
    institution: "St. Mary's School",
    location: "Bijnor, Uttar Pradesh",
    degree: "Matriculation",
    major: "General Subjects",
    duration: "Apr '19 – Mar '20",
    score: "Percentage: 86%"
  }
];

const Education = () => {
  return (
    <section id="education" className="education">
      <div className="container">
        <h2 className="section-title reveal">Education</h2>
        
        <div className="timeline reveal">
          {educationData.map((edu, index) => (
            <div className="timeline-item" key={index}>
              <div className="timeline-dot"></div>
              <div className="timeline-content">
                <div className="timeline-header">
                  <h3>{edu.degree}</h3>
                  <span className="duration">{edu.duration}</span>
                </div>
                <h4 className="institution">{edu.institution}</h4>
                <p className="location-text">{edu.location}</p>
                <div className="details">
                  <span className="major">{edu.major}</span>
                  <span className="bullet-point">•</span>
                  <span className="score">{edu.score}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
