import React from 'react';
import './Projects.css';
import { FiGithub, FiExternalLink } from 'react-icons/fi';

const projectsData = [
  {
    title: "AI Symptom Checker (DR. AI)",
    shortName: "DR. AI",
    tagline: "Dynamic AI diagnostic assistant",
    metrics: ["100% History Retrieval", "Multi-step Pipeline"],
    description: "A full-stack AI-powered medical assistant that dynamically generates multi-step follow-up questionnaires to improve diagnostic context.",
    details: [
      "Built a full-stack AI medical assistant collecting 3 core patient inputs for dynamic diagnostics.",
      "Implemented secure user authentication and personalized dashboard using SQLite.",
      "Structured RESTful APIs and relational schemas managing chat sessions and profiles."
    ],
    tech: ["Python", "Flask", "SQLite", "Google Gemini API"],
    images: ["/drai_1.png", "/drai_2.png"],
    github: "https://github.com/Akshita42/AI_Symptom_checker",
    live: "#"
  },
  {
    title: "Women Safety Alert System",
    shortName: "SOS AI",
    tagline: "AI-driven emergency response platform",
    metrics: ["86%+ Detection Accuracy", "Patent Filed"],
    description: "A supervised machine-learning platform that activates SOS alerts via real-time voice triggers and automatically contacts trusted individuals in emergencies.",
    details: [
      "Designed a multi-stage ML pipeline to validate distress events and suppress false activations.",
      "Achieved 86%+ detection accuracy in noisy real-world environments.",
      "Led core backend development, contributing to a patent filing and a Top-10 national hackathon finish."
    ],
    tech: ["Python", "Flask", "Porcupine", "Twilio API"],
    images: ["/sosai_1.png", "/sosai_2.png"],
    github: "https://github.com/Akshita42/ML-group-8-Women-Safety-",
    live: "#"
  },
  {
    title: "System Monitor",
    shortName: "SYS-MON",
    tagline: "Real-time system monitoring web application",
    metrics: ["Real-time Metrics", "Process Management", "Alerts & Health Scores"],
    description: "A real-time system monitoring web application built with Flask and psutil that provides detailed insights into system performance, CPU, memory, and running processes.",
    details: [
      "Engineered real-time tracking for CPU moving averages, memory load, and disk space monitoring.",
      "Implemented a secure process management system allowing users to sort processes by resource usage and safely terminate tasks via PID.",
      "Developed an automated health monitoring engine that calculates system scores and triggers alerts for critical threshold breaches."
    ],
    tech: ["Python", "Flask", "psutil", "REST APIs"],
    images: ["/sysmon_1.png", "/sysmon_2.png"],
    github: "https://github.com/Akshita42/Real-time-Process-Monitoring-Dashboard",
    live: "#"
  }
];

const Projects = () => {
  const handleMouseMove = (e) => {
    // Make sure we only apply parallax on wider screens so it doesn't glitch mobile
    if (window.innerWidth < 950) return;

    const card = e.currentTarget;
    const { left, top, width, height } = card.getBoundingClientRect();
    const x = (e.clientX - left - width / 2) / 40;
    const y = (e.clientY - top - height / 2) / 40;

    // Apply smooth 3D transform. We don't overwrite transitions, 
    // but we use inline styles to override static hover bounds.
    card.style.transform = `perspective(1200px) rotateY(${x}deg) rotateX(${-y}deg) translateY(-8px) scale(1.01)`;
    card.style.borderColor = 'rgba(211, 84, 0, 0.4)';
    card.style.boxShadow = `${-x * 1.5}px ${y * 1.5 + 20}px 35px rgba(0, 0, 0, 0.5), inset 0 0 0 1px rgba(211, 84, 0, 0.1)`;
  };

  const handleMouseLeave = (e) => {
    const card = e.currentTarget;
    card.style.transform = '';
    card.style.borderColor = '';
    card.style.boxShadow = '';
  };

  return (
    <section id="projects" className="projects">
      <div className="container">
        <h2 className="section-title reveal">Projects</h2>

        <div className="projects-grid">
          {projectsData.map((project, index) => (
            <div
              className={`project-card reveal ${index % 2 === 0 ? 'slide-left' : 'slide-right'}`}
              key={index}
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
            >
              <div className="project-image-wrapper">
                {project.images && project.images.length > 0 ? (
                  <div className="project-collage">
                    <img src={project.images[0]} alt={project.title} className="project-layer layer-1"
                      onError={(e) => { e.target.style.display = 'none'; }} />
                    {project.images[1] && (
                      <img src={project.images[1]} alt={project.title + " Details"} className="project-layer layer-2"
                        onError={(e) => { e.target.style.display = 'none'; }} />
                    )}
                  </div>
                ) : null}
                <div className="project-image-inner" style={{ display: (project.images && project.images.length > 0) ? 'none' : 'flex' }}>
                  <h3 className="project-image-title">{project.shortName}</h3>
                  <p className="project-image-subtitle">{project.tagline}</p>
                </div>
              </div>

              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-tagline">{project.tagline}</p>

                <div className="project-metrics">
                  {project.metrics.map((m, idx) => (
                    <span
                      className="metric-chip"
                      key={idx}
                      style={{ animationDelay: `${0.3 + (idx * 0.15)}s` }}
                    >
                      {m}
                    </span>
                  ))}
                </div>

                <p className="project-description">{project.description}</p>

                <ul className="project-bullets">
                  {project.details.map((detail, idx) => (
                    <li key={idx} style={{ transitionDelay: `${idx * 0.05}s` }}>
                      <span>•</span> {detail}
                    </li>
                  ))}
                </ul>

                <div className="project-tech">
                  {project.tech.map((tech, idx) => (
                    <span key={idx}>{tech}</span>
                  ))}
                </div>

                <div className="project-links">
                  <a href={project.github} className="icon-link" aria-label="GitHub Repository" target="_blank" rel="noreferrer">
                    <FiGithub size={20} />
                  </a>
                  <a href={project.live} className="icon-link" aria-label="Live Demo" target="_blank" rel="noreferrer">
                    <FiExternalLink size={20} />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
