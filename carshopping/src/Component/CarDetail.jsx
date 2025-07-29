import { useState } from 'react';
import '../styles/CarDetail.css';

function CarDetail({ car, onClose }) {
  const [imageError, setImageError] = useState(false);
  const [showInquiryForm, setShowInquiryForm] = useState(false);
  const [showTestDriveForm, setShowTestDriveForm] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
    preferredDate: '',
    preferredTime: ''
  });
  const [submitStatus, setSubmitStatus] = useState(null);
  const [showPurchaseForm, setShowPurchaseForm] = useState(false);
  const [purchaseData, setPurchaseData] = useState({
    name: '',
    email: '',
    phone: '',
    paymentMethod: 'cash',
    address: '',
    message: ''
  });
  
  if (!car) return null;
  
  const handleImageError = () => {
    setImageError(true);
  };
  
  const handleInquiryClick = () => {
    setShowInquiryForm(true);
    setShowTestDriveForm(false);
    setSubmitStatus(null);
  };
  
  const handleTestDriveClick = () => {
    setShowTestDriveForm(true);
    setShowInquiryForm(false);
    setSubmitStatus(null);
  };
  
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };
  
  const handleInquirySubmit = (e) => {
    e.preventDefault();
    
    const inquiryData = {
      ...formData,
      carId: car.id,
      carInfo: `${car.year} ${car.make} ${car.model}`,
      type: 'inquiry',
      date: new Date().toISOString()
    };
    
    fetch('https://car-shopping-backend-fkal.onrender.com/inquiries', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify(inquiryData)
    })
    .then(res => res.json())
    .then(data => {
      setSubmitStatus('inquiry_success');
      setFormData({
        name: '',
        email: '',
        phone: '',
        message: '',
        preferredDate: '',
        preferredTime: ''
      });
    })
    .catch(error => {
      console.error('Error submitting inquiry:', error);
      setSubmitStatus('error');
    });
  };
  
  const handleTestDriveSubmit = (e) => {
    e.preventDefault();
    
    const testDriveData = {
      ...formData,
      carId: car.id,
      carInfo: `${car.year} ${car.make} ${car.model}`,
      type: 'test_drive',
      date: new Date().toISOString()
    };
    
    fetch('https://car-shopping-backend-fkal.onrender.com/inquiries', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify(testDriveData)
    })
    .then(res => res.json())
    .then(data => {
      setSubmitStatus('testdrive_success');
      setFormData({
        name: '',
        email: '',
        phone: '',
        message: '',
        preferredDate: '',
        preferredTime: ''
      });
    })
    .catch(error => {
      console.error('Error submitting test drive request:', error);
      setSubmitStatus('error');
    });
  };
  
  const closeForms = () => {
    setShowInquiryForm(false);
    setShowTestDriveForm(false);
    setShowPurchaseForm(false);
    setSubmitStatus(null);
  };
  
  const handlePurchaseClick = () => {
    setShowPurchaseForm(true);
    setShowInquiryForm(false);
    setShowTestDriveForm(false);
    setSubmitStatus(null);
  };
  
  const handlePurchaseInputChange = (e) => {
    const { name, value } = e.target;
    setPurchaseData(prev => ({
      ...prev,
      [name]: value
    }));
  };
  
  const handlePurchaseSubmit = (e) => {
    e.preventDefault();
    
    const purchaseOrder = {
      ...purchaseData,
      carId: car.id,
      carInfo: `${car.year} ${car.make} ${car.model}`,
      price: car.price,
      date: new Date().toISOString(),
      status: 'pending'
    };
    
    fetch('https://car-shopping-backend-fkal.onrender.com/purchases', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify(purchaseOrder)
    })
    .then(res => res.json())
    .then(data => {
      setSubmitStatus('purchase_success');
      setPurchaseData({
        name: '',
        email: '',
        phone: '',
        paymentMethod: 'cash',
        address: '',
        message: ''
      });
    })
    .catch(error => {
      console.error('Error submitting purchase:', error);
      setSubmitStatus('error');
    });
  };
  
  return (
    <div className="car-detail-overlay">
      <div className="car-detail-modal">
        <button className="close-btn" onClick={onClose}>×</button>
        <div className="car-detail-content">
          <div className="car-detail-image">
            <img 
              src={imageError ? 'https://images.pexels.com/photos/170811/pexels-photo-170811.jpeg?auto=compress&cs=tinysrgb&w=800' : car.image} 
              alt={`${car.year} ${car.make} ${car.model}`} 
              onError={handleImageError}
            />
          </div>
          <div className="car-detail-info">
            <h2>{car.year} {car.make} {car.model}</h2>
            <p className="car-price">KSh {car.price.toLocaleString()}</p>
            <div className="car-specs">
              <div className="spec">
                <span className="spec-label">Mileage:</span>
                <span className="spec-value">{car.mileage.toLocaleString()} km</span>
              </div>
              <div className="spec">
                <span className="spec-label">Fuel Type:</span>
                <span className="spec-value">{car.fuelType}</span>
              </div>
              <div className="spec">
                <span className="spec-label">Transmission:</span>
                <span className="spec-value">{car.transmission}</span>
              </div>
            </div>
            <div className="car-description">
              <h3>Description</h3>
              <p>{car.description}</p>
            </div>
            <div className="car-actions">
              <button className="buy-now-btn" onClick={handlePurchaseClick}>Buy Now</button>
              <button className="inquiry-btn" onClick={handleInquiryClick}>Make Inquiry</button>
              <button className="test-drive-btn" onClick={handleTestDriveClick}>Schedule Test Drive</button>
            </div>
          </div>
        </div>
        
        {/* Inquiry Form */}
        {showInquiryForm && (
          <div className="form-overlay">
            <div className="form-container">
              <h3>Make Inquiry - {car.year} {car.make} {car.model}</h3>
              {submitStatus === 'inquiry_success' ? (
                <div className="success-message">
                  <h4>Inquiry Submitted Successfully!</h4>
                  <p>We will contact you shortly.</p>
                  <button onClick={closeForms} className="close-form-btn">Close</button>
                </div>
              ) : (
                <form onSubmit={handleInquirySubmit}>
                  <div className="form-group">
                    <label htmlFor="name">Name *</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  
                  <div className="form-group">
                    <label htmlFor="email">Email *</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
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
                      onChange={handleInputChange}
                    />
                  </div>
                  
                  <div className="form-group">
                    <label htmlFor="message">Message *</label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Tell us what you'd like to know about this vehicle..."
                      required
                    ></textarea>
                  </div>
                  
                  <div className="form-actions">
                    <button type="submit" className="submit-btn">Submit Inquiry</button>
                    <button type="button" onClick={closeForms} className="cancel-btn">Cancel</button>
                  </div>
                  
                  {submitStatus === 'error' && (
                    <div className="error-message">
                      <p>There was an error submitting your inquiry. Please try again.</p>
                    </div>
                  )}
                </form>
              )}
            </div>
          </div>
        )}
        
        {/* Test Drive Form */}
        {showTestDriveForm && (
          <div className="form-overlay">
            <div className="form-container">
              <h3>Schedule Test Drive - {car.year} {car.make} {car.model}</h3>
              {submitStatus === 'testdrive_success' ? (
                <div className="success-message">
                  <h4>Test Drive Request Submitted Successfully!</h4>
                  <p>We will contact you to confirm your appointment.</p>
                  <button onClick={closeForms} className="close-form-btn">Close</button>
                </div>
              ) : (
                <form onSubmit={handleTestDriveSubmit}>
                  <div className="form-group">
                    <label htmlFor="td-name">Name *</label>
                    <input
                      type="text"
                      id="td-name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  
                  <div className="form-group">
                    <label htmlFor="td-email">Email *</label>
                    <input
                      type="email"
                      id="td-email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  
                  <div className="form-group">
                    <label htmlFor="td-phone">Phone *</label>
                    <input
                      type="tel"
                      id="td-phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  
                  <div className="form-group">
                    <label htmlFor="preferredDate">Preferred Date *</label>
                    <input
                      type="date"
                      id="preferredDate"
                      name="preferredDate"
                      value={formData.preferredDate}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  
                  <div className="form-group">
                    <label htmlFor="preferredTime">Preferred Time *</label>
                    <input
                      type="time"
                      id="preferredTime"
                      name="preferredTime"
                      value={formData.preferredTime}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  
                  <div className="form-group">
                    <label htmlFor="td-message">Additional Notes</label>
                    <textarea
                      id="td-message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Any specific requirements or questions?"
                    ></textarea>
                  </div>
                  
                  <div className="form-actions">
                    <button type="submit" className="submit-btn">Schedule Test Drive</button>
                    <button type="button" onClick={closeForms} className="cancel-btn">Cancel</button>
                  </div>
                  
                  {submitStatus === 'error' && (
                    <div className="error-message">
                      <p>There was an error submitting your request. Please try again.</p>
                    </div>
                  )}
                </form>
              )}
            </div>
          </div>
        )}
        
        {/* Purchase Form */}
        {showPurchaseForm && (
          <div className="form-overlay">
            <div className="form-container">
              <h3>Purchase - {car.year} {car.make} {car.model}</h3>
              <p className="purchase-price">Price: KSh {car.price.toLocaleString()}</p>
              {submitStatus === 'purchase_success' ? (
                <div className="success-message">
                  <h4>Purchase Request Submitted Successfully!</h4>
                  <p>We will contact you to finalize the purchase details.</p>
                  <button onClick={closeForms} className="close-form-btn">Close</button>
                </div>
              ) : (
                <form onSubmit={handlePurchaseSubmit}>
                  <div className="form-group">
                    <label htmlFor="p-name">Name *</label>
                    <input
                      type="text"
                      id="p-name"
                      name="name"
                      value={purchaseData.name}
                      onChange={handlePurchaseInputChange}
                      required
                    />
                  </div>
                  
                  <div className="form-group">
                    <label htmlFor="p-email">Email *</label>
                    <input
                      type="email"
                      id="p-email"
                      name="email"
                      value={purchaseData.email}
                      onChange={handlePurchaseInputChange}
                      required
                    />
                  </div>
                  
                  <div className="form-group">
                    <label htmlFor="p-phone">Phone *</label>
                    <input
                      type="tel"
                      id="p-phone"
                      name="phone"
                      value={purchaseData.phone}
                      onChange={handlePurchaseInputChange}
                      required
                    />
                  </div>
                  
                  <div className="form-group">
                    <label htmlFor="address">Address *</label>
                    <textarea
                      id="address"
                      name="address"
                      value={purchaseData.address}
                      onChange={handlePurchaseInputChange}
                      placeholder="Your full address"
                      required
                    ></textarea>
                  </div>
                  
                  <div className="form-group">
                    <label htmlFor="paymentMethod">Payment Method *</label>
                    <select
                      id="paymentMethod"
                      name="paymentMethod"
                      value={purchaseData.paymentMethod}
                      onChange={handlePurchaseInputChange}
                      required
                    >
                      <option value="cash">Cash</option>
                      <option value="bank_transfer">Bank Transfer</option>
                      <option value="financing">Financing</option>
                    </select>
                  </div>
                  
                  <div className="form-group">
                    <label htmlFor="p-message">Additional Notes</label>
                    <textarea
                      id="p-message"
                      name="message"
                      value={purchaseData.message}
                      onChange={handlePurchaseInputChange}
                      placeholder="Any additional information or requests"
                    ></textarea>
                  </div>
                  
                  <div className="form-actions">
                    <button type="submit" className="submit-btn">Submit Purchase Request</button>
                    <button type="button" onClick={closeForms} className="cancel-btn">Cancel</button>
                  </div>
                  
                  {submitStatus === 'error' && (
                    <div className="error-message">
                      <p>There was an error submitting your purchase request. Please try again.</p>
                    </div>
                  )}
                </form>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default CarDetail;