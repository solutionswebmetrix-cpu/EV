import React, { useState } from 'react';
import axios from 'axios';
import banner1 from '../assets/banner 1.png';
import PageBanner from '../components/PageBanner';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    setSuccess(false);

    try {
      const response = await axios.post('http://localhost:5000/api/contact', formData);
      if (response.data.success) {
        setSuccess(true);
        setFormData({
          fullName: '',
          email: '',
          phone: '',
          subject: '',
          message: ''
        });
        setTimeout(() => setSuccess(false), 5000);
      }
    } catch (err) {
      setError(err.response?.data?.message || 'Something went wrong. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="contact-page">
      <PageBanner title="Contact Us" image={banner1} scale={0.9} />

      <section className="contact-section">
        <div className="container contact-section-grid">
          <div className="contact-sidebar">
            <div className="contact-card">
              <h2>Contact Information</h2>
              <div className="info-card">
                <div className="info-icon">📍</div>
                <div className="info-text">
                  <h3>2nd Factory</h3>
                  <p>Beleghata Main Rd,<br />Subhas Sarobar Park, Phoolbagan,<br />Beleghata, Kolkata, West Bengal 700010<br />India</p>
                </div>
              </div>
              <div className="info-card">
                <div className="info-icon">📞</div>
                <div className="info-text">
                  <h3>Phone</h3>
                  <p>+91 98115 44858</p>
                </div>
              </div>
              <div className="info-card">
                <div className="info-icon">📧</div>
                <div className="info-text">
                  <h3>Email</h3>
                  <p>aerovoltelectric@gmail.com</p>
                </div>
              </div>
            </div>

            <div className="contact-card">
              <h2>Visit Our Office</h2>
              <div className="map-wrapper">
                <iframe
                  title="AeroVolt Office"
                  src="https://www.google.com/maps?q=Beleghata%20Main%20Rd,%20Subhas%20Sarobar%20Park,%20Phoolbagan,%20Beleghata,%20Kolkata,%20West%20Bengal%20700010&output=embed"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>
          </div>

          <div className="contact-card contact-form-card">
            {success && <div className="success-message">✓ Thank you for your message! We will get back to you soon.</div>}
            {error && <div className="error-message">✗ {error}</div>}
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <label>Full Name</label>
                <input type="text" name="fullName" value={formData.fullName} onChange={handleChange} required />
              </div>
              <div className="form-group">
                <label>Email Address</label>
                <input type="email" name="email" value={formData.email} onChange={handleChange} required />
              </div>
              <div className="form-group">
                <label>Phone Number</label>
                <input type="tel" name="phone" value={formData.phone} onChange={handleChange} required />
              </div>
              <div className="form-group">
                <label>Subject</label>
                <input type="text" name="subject" value={formData.subject} onChange={handleChange} required />
              </div>
              <div className="form-group">
                <label>Message</label>
                <textarea name="message" rows="5" value={formData.message} onChange={handleChange} required />
              </div>
              <button type="submit" className="send-btn" disabled={loading}>
                {loading ? <span className="spinner"></span> : 'Send Message'}
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
