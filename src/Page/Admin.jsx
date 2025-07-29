import { useState, useEffect } from 'react';
import '../Styes/Admin.css';

function Admin() {
  const [inquiries, setInquiries] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchInquiries();
  }, []);

  const fetchInquiries = () => {
    fetch('https://car-shopping-backend-fkal.onrender.com/inquiries')
      .then(res => {
        if (!res.ok) {
          throw new Error(`HTTP error! status: ${res.status}`);
        }
        return res.json();
      })
      .then(data => {
        setInquiries(data);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching inquiries:', error);
        setError('Failed to load inquiries');
        setLoading(false);
      });
  };

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  if (loading) {
    return <div className="loading">Loading inquiries...</div>;
  }

  if (error) {
    return <div className="error">{error}</div>;
  }

  const inquiryRequests = inquiries.filter(item => item.type === 'inquiry');
  const testDriveRequests = inquiries.filter(item => item.type === 'test_drive');
  const generalInquiries = inquiries.filter(item => item.type === 'general');

  return (
    <div className="admin-page">
      <h1>Admin Dashboard</h1>
      
      <div className="stats">
        <div className="stat-card">
          <h3>Total Inquiries</h3>
          <p className="stat-number">{inquiries.length}</p>
        </div>
        <div className="stat-card">
          <h3>Car Inquiries</h3>
          <p className="stat-number">{inquiryRequests.length}</p>
        </div>
        <div className="stat-card">
          <h3>Test Drive Requests</h3>
          <p className="stat-number">{testDriveRequests.length}</p>
        </div>
        <div className="stat-card">
          <h3>General Inquiries</h3>
          <p className="stat-number">{generalInquiries.length}</p>
        </div>
      </div>

      {/* Car Inquiries */}
      <section className="inquiries-section">
        <h2>Car Inquiries ({inquiryRequests.length})</h2>
        {inquiryRequests.length > 0 ? (
          <div className="inquiries-grid">
            {inquiryRequests.map(inquiry => (
              <div key={inquiry.id} className="inquiry-card">
                <div className="inquiry-header">
                  <h3>{inquiry.name}</h3>
                  <span className="inquiry-date">{formatDate(inquiry.date)}</span>
                </div>
                <div className="inquiry-details">
                  <p><strong>Car:</strong> {inquiry.carInfo}</p>
                  <p><strong>Email:</strong> {inquiry.email}</p>
                  {inquiry.phone && <p><strong>Phone:</strong> {inquiry.phone}</p>}
                  <p><strong>Message:</strong> {inquiry.message}</p>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <p className="no-data">No car inquiries yet.</p>
        )}
      </section>

      {/* Test Drive Requests */}
      <section className="inquiries-section">
        <h2>Test Drive Requests ({testDriveRequests.length})</h2>
        {testDriveRequests.length > 0 ? (
          <div className="inquiries-grid">
            {testDriveRequests.map(request => (
              <div key={request.id} className="inquiry-card test-drive">
                <div className="inquiry-header">
                  <h3>{request.name}</h3>
                  <span className="inquiry-date">{formatDate(request.date)}</span>
                </div>
                <div className="inquiry-details">
                  <p><strong>Car:</strong> {request.carInfo}</p>
                  <p><strong>Email:</strong> {request.email}</p>
                  <p><strong>Phone:</strong> {request.phone}</p>
                  {request.preferredDate && (
                    <p><strong>Preferred Date:</strong> {new Date(request.preferredDate).toLocaleDateString()}</p>
                  )}
                  {request.preferredTime && (
                    <p><strong>Preferred Time:</strong> {request.preferredTime}</p>
                  )}
                  {request.message && <p><strong>Notes:</strong> {request.message}</p>}
                </div>
              </div>
            ))}
          </div>
        ) : (
          <p className="no-data">No test drive requests yet.</p>
        )}
      </section>

      {/* General Inquiries */}
      <section className="inquiries-section">
        <h2>General Inquiries ({generalInquiries.length})</h2>
        {generalInquiries.length > 0 ? (
          <div className="inquiries-grid">
            {generalInquiries.map(inquiry => (
              <div key={inquiry.id} className="inquiry-card general">
                <div className="inquiry-header">
                  <h3>{inquiry.name}</h3>
                  <span className="inquiry-date">{formatDate(inquiry.date)}</span>
                </div>
                <div className="inquiry-details">
                  <p><strong>Email:</strong> {inquiry.email}</p>
                  <p><strong>Subject:</strong> {inquiry.subject}</p>
                  <p><strong>Message:</strong> {inquiry.message}</p>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <p className="no-data">No general inquiries yet.</p>
        )}
      </section>

      <div className="refresh-section">
        <button onClick={fetchInquiries} className="refresh-btn">
          Refresh Data
        </button>
      </div>
    </div>
  );
}

export default Admin;