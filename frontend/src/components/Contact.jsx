import React, { useState } from 'react';
import './Contact.css';
import { FiMail, FiPhone, FiMapPin, FiLinkedin, FiGithub } from 'react-icons/fi';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('Sending...');

    const API_URL = import.meta.env.VITE_API_URL || "http://localhost:5000";
    try {
      const response = await fetch(`${API_URL}/api/contact`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus('success');
        setFormData({ name: '', email: '', message: '' });
        // Clear success message after 5 seconds
        setTimeout(() => setStatus(''), 5000);
      } else {
        setStatus('error');
      }
    } catch (error) {
      console.error(error);
      setStatus('Error connecting to the server.');
    }
  };

  return (
    <section id="contact" className="contact bg-alt">
      <div className="container">
        <h2 className="section-title reveal">Get In Touch</h2>
        
        <div className="contact-wrapper reveal">
          <div className="contact-info">
            <h3 className="contact-heading">Let’s build something meaningful.</h3>
            <p className="contact-desc">
              Whether you have a question, a project proposal, or just want to connect, I'm always open to discussing new opportunities or scalable system ideas.
            </p>
            
            <div className="info-items">
              <div className="info-item">
                <FiMail className="info-icon" />
                <span>akshitadhaka42@gmail.com</span>
              </div>
              <div className="info-item">
                <FiPhone className="info-icon" />
                <span>+91-8218902403</span>
              </div>
              <div className="info-item">
                <FiMapPin className="info-icon" />
                <span>India</span>
              </div>
            </div>
            
            <div className="social-links">
              <a href="https://www.linkedin.com/in/akshita-dhaka-" target="_blank" rel="noreferrer" aria-label="LinkedIn">
                <FiLinkedin />
              </a>
              <a href="https://github.com/Akshita42" target="_blank" rel="noreferrer" aria-label="GitHub">
                <FiGithub />
              </a>
            </div>
          </div>
          
          <div className="contact-form-container">
            <form onSubmit={handleSubmit} className="contact-form">
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input 
                  type="text" 
                  id="name" 
                  name="name" 
                  value={formData.name} 
                  onChange={handleChange} 
                  required 
                  placeholder="John Doe"
                />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input 
                  type="email" 
                  id="email" 
                  name="email" 
                  value={formData.email} 
                  onChange={handleChange} 
                  required 
                  placeholder="john@example.com"
                />
              </div>
              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea 
                  id="message" 
                  name="message" 
                  rows="5" 
                  value={formData.message} 
                  onChange={handleChange} 
                  required 
                  placeholder="How can I help you?"
                ></textarea>
              </div>
              <button type="submit" className="btn-primary">Send Message</button>
              {status && <p className={`status-msg ${status.includes('success') ? 'success' : 'error'}`}>{status}</p>}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
