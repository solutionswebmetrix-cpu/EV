import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import axios from 'axios';
import Hero from '../components/Hero';
import Technology from '../components/Technology';
import WhyAeroVolt from '../components/WhyAeroVolt';
import Gallery from '../components/Gallery';
import { products } from '../data';
import aboutImage from '../assets/Product/Aero Supreme Pro.png';
import './Home.css';

const featuredProductSlugs = [
  'aero-chopper',
  'aero-chopper-plus',
  'aero-supreme-pro',
  'aero-supreme',
  'aero-supreme-plus',
  'aero-plus',
  'aero-chopper-lite',
  'aero'
];

const initialFormState = {
  fullName: '',
  email: '',
  phone: '',
  subject: '',
  message: ''
};

const Home = () => {
  const featuredProducts = products.filter(product => 
    featuredProductSlugs.includes(product.slug)
  );
  const [formData, setFormData] = useState(initialFormState);
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
        setFormData(initialFormState);
        setTimeout(() => setSuccess(false), 5000);
      }
    } catch (err) {
      setError(err.response?.data?.message || 'Something went wrong. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Hero />

      <section className="home-about-section">
        <div className="container home-about-grid">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="home-about-image-card"
          >
            <img src={aboutImage} alt="AeroVolt electric scooter" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="home-about-content"
          >
            <p className="section-label">About AeroVolt</p>
            <h2>Shaping the future of electric mobility with premium quality and dependable innovation.</h2>
            <p>
              AeroVolt is a modern EV brand focused on delivering premium electric scooters that combine efficiency, safety, and elegant design. Our products are engineered for everyday riders who want dependable performance without compromising on style.
            </p>
            <p>
              From advanced battery systems to intelligent controls and smart safety features, every AeroVolt vehicle reflects our commitment to sustainability, reliability, and customer satisfaction.
            </p>
            <Link to="/about" className="home-read-more-btn">Read More</Link>
          </motion.div>
        </div>
      </section>

      <section className="featured-products">
        <div className="container featured-products-inner">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Featured Products
          </motion.h2>

          <div className="featured-grid">
            {featuredProducts.map((product, idx) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="home-product-card"
                whileHover={{ y: -8 }}
              >
                <Link to={`/products/${product.slug}`}>
                  <div className="product-card-image">
                    <img src={product.image} alt={product.name} />
                  </div>
                  <div className="product-card-content">
                    <h3>{product.name}</h3>
                    <p>{product.shortDescription}</p>
                    <span className="view-details-btn">View Details</span>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Technology />
      <WhyAeroVolt />
      <Gallery />

      <section className="home-contact-section">
        <div className="container home-contact-grid">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="home-contact-details"
          >
            <p className="section-label">Contact Us</p>
            <h2>Let’s build a smarter EV journey together.</h2>
            <div className="home-contact-card">
              <div className="home-contact-icon">📍</div>
              <div>
                <h3>Address</h3>
                <p>A-33, Sector-5<br />Noida, UP-201301<br />India</p>
              </div>
            </div>
            <div className="home-contact-card">
              <div className="home-contact-icon">📞</div>
              <div>
                <h3>Phone</h3>
                <p>+91 98115 44858</p>
              </div>
            </div>
            <div className="home-contact-card">
              <div className="home-contact-icon">📧</div>
              <div>
                <h3>Email</h3>
                <p>aerovoltelectric@gmail.com</p>
              </div>
            </div>
            <div className="home-contact-card">
              <div className="home-contact-icon">🕒</div>
              <div>
                <h3>Business Hours</h3>
                <p>Mon-Sat: 9:00 AM - 6:00 PM<br />Sunday: 10:00 AM - 4:00 PM</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="home-contact-form-card"
          >
            {success && <div className="success-message">✓ Thank you for your message! We will get back to you soon.</div>}
            {error && <div className="error-message">✗ {error}</div>}
            <form className="home-contact-form" onSubmit={handleSubmit}>
              <div className="home-form-row">
                <div className="home-form-group">
                  <label>Full Name</label>
                  <input type="text" name="fullName" value={formData.fullName} onChange={handleChange} required />
                </div>
                <div className="home-form-group">
                  <label>Email</label>
                  <input type="email" name="email" value={formData.email} onChange={handleChange} required />
                </div>
              </div>
              <div className="home-form-row">
                <div className="home-form-group">
                  <label>Phone</label>
                  <input type="tel" name="phone" value={formData.phone} onChange={handleChange} required />
                </div>
                <div className="home-form-group">
                  <label>Subject</label>
                  <input type="text" name="subject" value={formData.subject} onChange={handleChange} required />
                </div>
              </div>
              <div className="home-form-group">
                <label>Message</label>
                <textarea name="message" rows="5" value={formData.message} onChange={handleChange} required />
              </div>
              <button type="submit" className="home-submit-btn" disabled={loading}>
                {loading ? 'Sending...' : 'Send Message'}
              </button>
            </form>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default Home;
