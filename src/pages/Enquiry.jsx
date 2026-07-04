import React, { useState } from 'react';
import { products } from '../data';
import './Enquiry.css';

const Enquiry = () => {
  const [selectedProduct, setSelectedProduct] = useState('');

  return (
    <div className="enquiry-page">
      <section className="enquiry-hero">
        <div className="container">
          <h1>Book a Test Ride</h1>
          <p>Experience the future of mobility today</p>
        </div>
      </section>

      <section className="enquiry-content">
        <div className="container">
          <div className="enquiry-grid">
            <div className="enquiry-info">
              <h2>Why Test Ride?</h2>
              <ul className="benefits-list">
                <li>✓ Feel the smooth acceleration</li>
                <li>✓ Experience the comfort</li>
                <li>✓ Check the features firsthand</li>
                <li>✓ Get expert guidance</li>
                <li>✓ No obligation to buy</li>
              </ul>

              <div className="quick-contact">
                <h3>Call Us Now</h3>
                <p className="phone-number">+91 98115 44858</p>
              </div>
            </div>

            <div className="enquiry-form-section">
              <h2>Fill in Your Details</h2>
              <form className="enquiry-form">
                <div className="form-row">
                  <div className="form-group">
                    <label>First Name *</label>
                    <input type="text" required />
                  </div>
                  <div className="form-group">
                    <label>Last Name *</label>
                    <input type="text" required />
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label>Email *</label>
                    <input type="email" required />
                  </div>
                  <div className="form-group">
                    <label>Phone *</label>
                    <input type="tel" required />
                  </div>
                </div>

                <div className="form-group">
                  <label>Select Product *</label>
                  <select
                    value={selectedProduct}
                    onChange={(e) => setSelectedProduct(e.target.value)}
                    required
                  >
                    <option value="">Select a product</option>
                    {products.map((product) => (
                    <option key={product.id} value={product.id}>
                      {product.name}
                    </option>
                    ))}
                  </select>
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label>City *</label>
                    <input type="text" required />
                  </div>
                  <div className="form-group">
                    <label>Preferred Date</label>
                    <input type="date" />
                  </div>
                </div>

                <div className="form-group">
                  <label>Message</label>
                  <textarea rows="4" placeholder="Any specific questions or requirements..." />
                </div>

                <button type="submit" className="submit-btn">
                  Submit Enquiry
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Enquiry;
