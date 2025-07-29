import { useState } from 'react';
import '../styles/InquiryForm.css';

function InquiryForm({ car }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
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
    
    const inquiryData = {
      ...formData,
      carId: car.id,
      carInfo: `${car.year} ${car.make} ${car.model}`,
      date: new Date().toISOString()
    };
    
    fetch('http://localhost:3000/inquiries', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify(inquiryData)
    })
    .then(res => res.json())
    .then(data => {
      setIsSubmitted(true);
      setFormData({
        name: '',
        email: '',
        phone: '',
        message: ''
      });
    });
  };
  
  if (isSubmitted) {
    return (
      <div className="inquiry-form submitted">
        <h3>Thank you for your inquiry!</h3>
        <p>We will contact you shortly about the {car.year} {car.make} {car.model}.</p>
      </div>
    );
  }
  
  return (
    <div className="inquiry-form">
      <h3>Interested in this {car.year} {car.make} {car.model}?</h3>
      <form onSubmit={handleSubmit}>
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
          <label htmlFor="phone">Phone</label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
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
        
        <button type="submit" className="submit-btn">Submit Inquiry</button>
      </form>
    </div>
  );
}

export default InquiryForm;