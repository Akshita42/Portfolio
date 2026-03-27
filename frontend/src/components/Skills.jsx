import React, { useState } from 'react';
import './Skills.css';
import { 
  SiPython, SiJavascript, SiReact, SiFlask, SiTensorflow, SiScikitlearn, 
  SiExpress, SiNodedotjs, SiMysql, SiMongodb, SiGit, SiGithub, SiLinux,
  SiNumpy, SiPandas, SiJupyter
} from 'react-icons/si';
import { FaJava } from 'react-icons/fa';
import { FiDatabase, FiSettings, FiUsers, FiTarget, FiMessageCircle, FiTrendingUp, FiBarChart2 } from 'react-icons/fi';

const skillCategories = [
  {
    title: "Languages",
    types: ["All", "Development", "Machine Learning"],
    skills: [
      { name: "Python", icon: <SiPython className="skill-icon" style={{color: '#3776AB'}} /> },
      { name: "Java", icon: <FaJava className="skill-icon" style={{color: '#007396'}} /> },
      { name: "JavaScript", icon: <SiJavascript className="skill-icon" style={{color: '#F7DF1E'}} /> },
      { name: "SQL", icon: <FiDatabase className="skill-icon" style={{color: '#00758F'}} /> }
    ]
  },
  {
    title: "Machine Learning",
    types: ["All", "Machine Learning"],
    skills: [
      { name: "TensorFlow", icon: <SiTensorflow className="skill-icon" style={{color: '#FF6F00'}} /> },
      { name: "scikit-learn", icon: <SiScikitlearn className="skill-icon" style={{color: '#F7931E'}} /> },
    ]
  },
  {
    title: "Frameworks",
    types: ["All", "Development"],
    skills: [
      { name: "React.js", icon: <SiReact className="skill-icon" style={{color: '#61DAFB'}} /> },
      { name: "Flask", icon: <SiFlask className="skill-icon" style={{color: '#FFFFFF'}} /> },
      { name: "Express.js", icon: <SiExpress className="skill-icon" style={{color: '#FFFFFF'}} /> }
    ]
  },
  {
    title: "ML Libraries",
    types: ["Machine Learning"], // Removed "All" so it's only under ML
    skills: [
      { name: "NumPy", icon: <SiNumpy className="skill-icon" style={{color: '#013243'}} /> },
      { name: "Pandas", icon: <SiPandas className="skill-icon" style={{color: '#150458'}} /> },
      { name: "Matplotlib", icon: <FiBarChart2 className="skill-icon" style={{color: '#11557c'}} /> },
      { name: "scikit-learn", icon: <SiScikitlearn className="skill-icon" style={{color: '#F7931E'}} /> }
    ]
  },
  {
    title: "Backend & Databases",
    types: ["All", "Development"],
    skills: [
      { name: "Node.js", icon: <SiNodedotjs className="skill-icon" style={{color: '#339933'}} /> },
      { name: "MySQL", icon: <SiMysql className="skill-icon" style={{color: '#4479A1'}} /> },
      { name: "MongoDB", icon: <SiMongodb className="skill-icon" style={{color: '#47A248'}} /> },
    ]
  },
  {
    title: "Tools & Platforms",
    types: ["All", "Tools"],
    skills: [
      { name: "Git", icon: <SiGit className="skill-icon" style={{color: '#F05032'}} /> },
      { name: "GitHub", icon: <SiGithub className="skill-icon" style={{color: '#FFFFFF'}} /> },
      { name: "Linux", icon: <SiLinux className="skill-icon" style={{color: '#FCC624'}} /> },
      { name: "Jupyter", icon: <SiJupyter className="skill-icon" style={{color: '#F37626'}} /> }
    ]
  },
  {
    title: "Soft Skills",
    types: ["All", "Soft Skills"],
    skills: [
      { name: "Problem Solving", icon: <FiSettings className="skill-icon soft-icon" /> },
      { name: "Communication", icon: <FiMessageCircle className="skill-icon soft-icon" /> },
      { name: "Leadership", icon: <FiUsers className="skill-icon soft-icon" /> },
      { name: "Analytical Thinking", icon: <FiTrendingUp className="skill-icon soft-icon" /> },
      { name: "Structured Thinking", icon: <FiTarget className="skill-icon soft-icon" /> },
    ]
  }
];

const filters = ["All", "Machine Learning", "Development", "Tools", "Soft Skills"];

const Skills = () => {
  const [activeFilter, setActiveFilter] = useState("All");

  const filteredCategories = skillCategories.filter(category => 
    category.types.includes(activeFilter)
  );

  return (
    <section id="skills" className="skills bg-alt">
      <div className="container">
        <h2 className="section-title reveal">Skills</h2>
        
        <div className="skills-filter-container reveal">
          <div className="skills-tabs">
            {filters.map(filter => (
              <button 
                key={filter} 
                className={`tab-btn ${activeFilter === filter ? 'active' : ''}`}
                onClick={() => setActiveFilter(filter)}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>

        <div className="skills-grid">
          {(activeFilter === 'Tools' || activeFilter === 'Soft Skills') ? (
            filteredCategories.flatMap(c => c.skills).map((skill, index) => (
              <div 
                className="skill-category-card reveal-up single-skill-card" 
                key={skill.name}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="single-skill-content">
                  <span className="single-skill-icon">{skill.icon}</span>
                  <h3 className="single-skill-name">{skill.name}</h3>
                </div>
              </div>
            ))
          ) : (
            filteredCategories.map((category, index) => {
              let displaySkills = category.skills;
              if (activeFilter === "All" && category.title === "Soft Skills") {
                displaySkills = category.skills.filter(s => 
                  ["Problem Solving", "Analytical Thinking", "Structured Thinking"].includes(s.name)
                );
              }

              return (
                <div 
                  className="skill-category-card reveal-up" 
                  key={category.title}
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <h3 className="category-header">{category.title}</h3>
                  <div className="skill-tags">
                    {displaySkills.map((skill, idx) => (
                      <div className="skill-tag-compact" key={idx}>
                        <span className="icon-wrapper">{skill.icon}</span>
                        <span className="tag-name">{skill.name}</span>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })
          )}
        </div>
      </div>
    </section>
  );
};

export default Skills;
