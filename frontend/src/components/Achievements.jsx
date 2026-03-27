import React from 'react';
import './Achievements.css';
import { FiAward, FiStar } from 'react-icons/fi';

const Achievements = () => {
  return (
    <section id="achievements" className="achievements">
      <div className="container">
        <h2 className="section-title reveal">Achievements</h2>
        
        <div className="achievements-container reveal">
          <div className="achievement-card">
            <h3 className="achievement-title">Patent Filed & Accepted</h3>
            <div className="achievement-body">
              <p className="achievement-impact">
                Title: "A Machine Learning-Based Emergency Response System Utilizing Wake Word Detection and Distress Analysis"
              </p>
              <div className="achievement-details">
                <span>Jul '25</span>
                <span className="detail-separator">•</span>
                <span>App No: 202511086582 (IPIndia)</span>
              </div>
            </div>
          </div>

          <div className="achievement-card">
            <h3 className="achievement-title">Top 10 Winner</h3>
            <div className="achievement-body">
              <p className="achievement-impact">
                Secured a position as part of the top 10 winning teams for building technical solutions.
              </p>
              <div className="achievement-details">
                <span>Module Expo Hackathon</span>
                <span className="detail-separator">•</span>
                <span>Apr '25</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Achievements;
