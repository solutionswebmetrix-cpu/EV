import React, { useState } from 'react';
import { motion } from 'framer-motion';
import axios from 'axios';
import './Dealership.css';

const Dealership = () => {
  const [formData, setFormData] = useState({
    full_name: '',
    company_name: '',
    email: '',
    phone: '',
    state: '',
    city: '',
    address: '',
    investment: '',
    business_experience: '',
    message: ''
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');

  const benefits = [
    { title: 'High Profit Margin', desc: 'Attractive margins on all products' },
    { title: 'Marketing Support', desc: 'Complete marketing and branding materials' },
    { title: 'Training Programs', desc: 'Comprehensive sales and service training' },
    { title: 'Service Support', desc: '24/7 technical and service assistance' },
    { title: 'Warranty Backup', desc: 'Full warranty and spare parts support' },
    { title: 'Exclusive Territory', desc: 'Protected territory for your business' },
  ];

  const stats = [
    { number: '500+', label: 'Dealers' },
    { number: '100+', label: 'Cities' },
    { number: '50K+', label: 'Happy Customers' },
    { number: '24/7', label: 'Support' },
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    setSuccess(false);

    try {
      const response = await axios.post('http://localhost:5000/api/dealership', formData);
      if (response.data.success) {
        setSuccess(true);
        setFormData({
          full_name: '',
          company_name: '',
          email: '',
          phone: '',
          state: '',
          city: '',
          address: '',
          investment: '',
          business_experience: '',
          message: ''
        });
        setTimeout(() => setSuccess(false), 5000);
      }
    } catch (err) {
      setError(err.response?.data?.message || 'Network error. Please try again later.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="dealership">
      <div className="container">
        <div className="section-header">
          <h2>Become a Dealer</h2>
          <p>Join our growing network of successful dealers</p>
        </div>

        <div className="dealership-stats">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              className="dealership-stat"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <span className="stat-number">{stat.number}</span>
              <span className="stat-label">{stat.label}</span>
            </motion.div>
          ))}
        </div>

        <div className="dealership-content">
          <div className="dealership-benefits">
            <h3>Why Partner With Us?</h3>
            <div className="benefits-list">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  className="benefit-item"
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.08 }}
                >
                  <span className="benefit-icon">✓</span>
                  <div>
                    <h4>{benefit.title}</h4>
                    <p>{benefit.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="dealership-form">
            <h3>Register Your Interest</h3>
            
            {success && (
              <div className="success-message">
                ✓ Thank you for your application! We will contact you soon.
              </div>
            )}
            
            {error && (
              <div className="error-message">
                ✗ {error}
              </div>
            )}

            <form className="dealer-form" onSubmit={handleSubmit}>
              <div className="form-row">
                <input 
                  type="text" 
                  name="full_name"
                  placeholder="Your Name" 
                  value={formData.full_name}
                  onChange={handleChange}
                  required 
                />
                <input 
                  type="text" 
                  name="city"
                  placeholder="City" 
                  value={formData.city}
                  onChange={handleChange}
                  required 
                />
              </div>
              <div className="form-row">
                <input 
                  type="email" 
                  name="email"
                  placeholder="Email Address" 
                  value={formData.email}
                  onChange={handleChange}
                  required 
                />
                <input 
                  type="tel" 
                  name="phone"
                  placeholder="Phone Number" 
                  value={formData.phone}
                  onChange={handleChange}
                  required 
                />
              </div>
              <div className="form-row">
                <input 
                  type="text" 
                  name="company_name"
                  placeholder="Business Name" 
                  value={formData.company_name}
                  onChange={handleChange}
                  required 
                />
                <input 
                  type="text" 
                  name="investment"
                  placeholder="Investment Range" 
                  value={formData.investment}
                  onChange={handleChange}
                  required 
                />
              </div>
              <div className="form-row">
                <input 
                  type="text" 
                  name="state"
                  placeholder="State" 
                  value={formData.state}
                  onChange={handleChange}
                />
                <input 
                  type="text" 
                  name="business_experience"
                  placeholder="Business Experience" 
                  value={formData.business_experience}
                  onChange={handleChange}
                />
              </div>
              <textarea 
                name="address"
                placeholder="Address" 
                value={formData.address}
                onChange={handleChange}
                rows="2" 
              />
              <textarea 
                name="message"
                placeholder="Tell us about your business..." 
                value={formData.message}
                onChange={handleChange}
                rows="4" 
                required 
              />
              <button 
                type="submit" 
                className="submit-btn" 
                disabled={loading}
              >
                {loading ? (
                  <span className="spinner"></span>
                ) : (
                  'Submit Application'
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Dealership;
