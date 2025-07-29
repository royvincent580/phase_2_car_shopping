import { useState } from 'react';
import '../styles/Contact.css';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  
  const [isSubmitted, setIsSubmitted] = useState(false);
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    
    fetch('http://localhost:3000/inquiries', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify({
        ...formData,
        type: 'general',
        date: new Date().toISOString()
      })
    })
    .then(res => res.json())
    .then(data => {
      setIsSubmitted(true);
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
    });
  };
  
  return (
    <div className="contact-page">
      <div className="contact-container">
        <div className="contact-info">
          <h1>Contact Us</h1>
          <p>Have questions about our inventory or services? Reach out to us!</p>
          
          <div className="contact-details">
            <div className="contact-item">
              <h3>Address</h3>
              <p>123 Auto Lane</p>
              <p>Car City, ST 12345</p>
            </div>
            
            <div className="contact-item">
              <h3>Phone</h3>
              <p>+254712665223</p>
            </div>
            
            <div className="contact-item">
              <h3>Hours</h3>
              <p>Monday - Friday: 9am - 7pm</p>
              <p>Saturday: 10am - 5pm</p>
              <p>Sunday: Closed</p>
            </div>
          </div>
        </div>
        
        <div className="contact-form-container">
          {isSubmitted ? (
            <div className="form-success">
              <h2>Thank you for contacting us!</h2>
              <p>We will get back to you as soon as possible.</p>
            </div>
          ) : (
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
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
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="subject">Subject</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                ></textarea>
              </div>
              
              <button type="submit" className="submit-btn">Send Message</button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}

export default Contact;