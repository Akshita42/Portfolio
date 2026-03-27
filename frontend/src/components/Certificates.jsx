import React, { useState } from 'react';
import './Certificates.css';
import { FiExternalLink } from 'react-icons/fi';

const certificatesData = [
  {
    title: "Generative AI Professional",
    issuer: "Oracle",
    date: "Oct '25",
    category: "AI / LLM",
    image: "/cert1.png", 
    link: "/cert1.pdf"
  },
  {
    title: "ChatGPT-4 Prompt Engineering: ChatGPT, Generative AI & LLM",
    issuer: "Infosys Springboard",
    date: "Aug '25",
    category: "Prompt Engineering",
    image: "/cert2.png", 
    link: "/cert2.pdf"
  },
  {
    title: "Data Analytics with Python",
    issuer: "NPTEL",
    date: "Apr '25",
    category: "Data Analytics",
    image: "/cert3.png", 
    link: "/cert3.pdf"
  },
  {
    title: "The Joy of Computing using Python",
    issuer: "NPTEL",
    date: "Apr '24",
    category: "Programming",
    image: "/cert4.png", 
    link: "/cert4.pdf"
  }
];

const Certificates = () => {
  const [imageErrors, setImageErrors] = useState({});
  const [imagesLoaded, setImagesLoaded] = useState({});

  const handleImageError = (index) => {
    setImageErrors(prev => ({ ...prev, [index]: true }));
  };

  const handleImageLoad = (index) => {
    setImagesLoaded(prev => ({ ...prev, [index]: true }));
  };

  return (
    <section id="certificates" className="certificates bg-alt">
      <div className="container">
        <div className="section-header reveal">
          <h2 className="section-title">Certificates</h2>
          <p className="section-subtitle">Validated through industry-recognized certifications</p>
        </div>
        
        <div className="cert-grid reveal">
          {certificatesData.map((cert, index) => (
            <div className="cert-card" key={index}>
              <div className="cert-image-container">
                {/* Always show placeholder behind as a permanent background */}
                <div className="cert-image-placeholder">
                  <span>{cert.category}</span>
                </div>

                {cert.image && !imageErrors[index] && (
                  <img 
                    src={cert.image} 
                    alt={cert.title} 
                    className={`cert-image ${imagesLoaded[index] ? 'loaded' : ''}`}
                    onLoad={() => handleImageLoad(index)}
                    onError={() => handleImageError(index)}
                    loading="lazy"
                  />
                )}
                
                <div className="cert-overlay">
                  <a 
                    href={cert.link} 
                    target="_blank" 
                    rel="noreferrer" 
                    className="view-btn"
                  >
                    View Certificate <FiExternalLink size={14} />
                  </a>
                </div>
              </div>
                
              <div className="cert-content">
                <h3 className="cert-title">{cert.title}</h3>
                <div className="cert-meta">
                  <span className="cert-issuer">{cert.issuer}</span>
                  <span className="cert-date">{cert.date}</span>
                </div>
                
                <span className="cert-category-tag">{cert.category}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certificates;
