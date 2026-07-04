import React, { useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { products } from '../data'
import PageBanner from '../components/PageBanner'
import './ProductDetail.css'

const ProductDetail = () => {
  const { slug } = useParams()
  const product = products.find(p => p.slug === slug)
  const [activeFaq, setActiveFaq] = useState(null)

  if (!product) {
    return (
      <div className="product-not-found">
        <h1>Product Not Found</h1>
        <Link to="/products" className="btn-back">Back to Products</Link>
      </div>
    )
  }

  const relatedProducts = products.filter(p => p.id !== product.id).slice(0, 4)

  const faqs = [
    {
      question: "What is the warranty period?",
      answer: `All ${product.name} models come with a standard ${product.warranty} warranty.`,
    },
    {
      question: "How long does it take to charge?",
      answer: `The ${product.name} takes approximately ${product.chargingTime} for a full charge.`,
    },
    {
      question: "What is the range on a single charge?",
      answer: `The ${product.name} offers an impressive range of ${product.range} on a single charge.`,
    },
    {
      question: "Is financing available?",
      answer: "Yes, we offer flexible financing options through our partners. Contact us for more details.",
    },
  ]

  const quickSpecs = [
    { icon: "🔋", label: "Battery", value: product.battery },
    { icon: "⚡", label: "Motor", value: product.motor },
    { icon: "📏", label: "Range", value: product.range },
    { icon: "🚀", label: "Top Speed", value: product.topSpeed },
    { icon: "🔌", label: "Charging", value: product.chargingTime },
    { icon: "🛑", label: "Brake", value: product.brakes },
  ]

  const technicalSpecs = [
    { label: "Battery", value: product.battery },
    { label: "Motor", value: product.motor },
    { label: "Range", value: product.range },
    { label: "Charging", value: product.chargingTime },
    { label: "Brake", value: product.brakes },
    { label: "Display", value: "Digital" },
    { label: "Controller", value: "Smart Controller" },
    { label: "Ground Clearance", value: "160 mm" },
    { label: "Tyre", value: product.tyres },
    { label: "Suspension", value: "Telescopic" },
    { label: "Load Capacity", value: "150kg" },
    { label: "Warranty", value: product.warranty },
  ]

  const featureCards = product.features.map((feature, idx) => ({
    icon: "✓",
    title: feature,
    description: "Premium quality with cutting-edge technology",
  }))

  return (
    <div className="product-detail" style={{ '--accent-color': product.accentColor }}>
      {/* Page Banner */}
      <PageBanner title={product.name} image={product.banner} />

      {/* Section 1: Product Hero */}
      <section className="section hero-section">
        <div className="container">
          <div className="hero-grid">
            {/* Left: Image */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="image-wrapper"
            >
              <div className="product-image-card">
                <img src={product.image} alt={product.name} className="product-main-image" />
              </div>
            </motion.div>

            {/* Right: Details */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="details-wrapper"
            >
              <h1 className="product-name">{product.name}</h1>
              <p className="product-description">{product.shortDescription}</p>

              <div className="overview-block">
                <h3 className="block-title">Overview</h3>
                <p className="overview-text">{product.description}</p>
              </div>

              <div className="key-features-block">
                <h3 className="block-title">Key Features</h3>
                <div className="key-features-grid">
                  {product.features.map((feature, idx) => (
                    <div key={idx} className="key-feature-item">
                      <span className="checkmark" style={{ color: product.accentColor }}>✓</span>
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="quick-specs-block">
                <h3 className="block-title">Specifications</h3>
                <div className="quick-specs-grid">
                  {quickSpecs.map((spec, idx) => (
                    <div key={idx} className="quick-spec-card">
                      <span className="spec-icon">{spec.icon}</span>
                      <div className="spec-info">
                        <div className="spec-label">{spec.label}</div>
                        <div className="spec-value">{spec.value}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="cta-buttons">
                <button className="btn book-now-btn">
                  Book Now
                </button>
                <button className="btn download-btn">
                  Download Brochure
                </button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Section 2: Features */}
      <section className="section features-section">
        <div className="container">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="section-title"
          >
            Features
          </motion.h2>
          <div className="features-grid">
            {featureCards.map((feature, idx) => (
              <motion.div
                key={idx}
                className="feature-card"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.08 }}
                whileHover={{ y: -5 }}
              >
                <span className="feature-card-icon" style={{ color: product.accentColor }}>{feature.icon}</span>
                <h4>{feature.title}</h4>
                <p>{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 3: Technical Specifications */}
      <section className="section specs-section">
        <div className="container">
          <h2 className="section-title">Technical Specifications</h2>
          <div className="technical-specs-grid">
            {technicalSpecs.map((spec, idx) => (
              <div key={idx} className="technical-spec-card">
                <div className="tech-spec-label">{spec.label}</div>
                <div className="tech-spec-value">{spec.value}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="faqs-section">
        <div className="container">
          <h2 className="section-title">Frequently Asked Questions</h2>
          <div className="faqs-list">
            {faqs.map((faq, idx) => (
              <motion.div
                key={idx}
                className="faq-item"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                onClick={() => setActiveFaq(activeFaq === idx ? null : idx)}
              >
                <div className="faq-question">
                  <h4>{faq.question}</h4>
                  <span className={`faq-icon ${activeFaq === idx ? 'open' : ''}`} style={{ color: product.accentColor }}>▼</span>
                </div>
                <div className={`faq-answer ${activeFaq === idx ? 'open' : ''}`}>
                  <p>{faq.answer}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Enquiry Form */}
      <section className="enquiry-form-section">
        <div className="container">
          <div className="enquiry-box">
            <div className="enquiry-content">
              <h2>Interested in {product.name}?</h2>
              <p>Get in touch with our team for more details and test ride booking</p>
            </div>
            <Link to="/enquiry" className="btn-enquire-cta" style={{ background: `linear-gradient(135deg, var(--electric-green), var(--electric-blue))` }}>
              Book a Test Ride
            </Link>
          </div>
        </div>
      </section>

      {/* Related Products */}
      <section className="related-products">
        <div className="container">
          <h2 className="section-title">Related Products</h2>
          <div className="related-grid">
            {relatedProducts.map((related, idx) => (
              <motion.div
                key={related.id}
                className="related-card"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                whileHover={{ y: -8 }}
              >
                <img src={related.image} alt={related.name} />
                <div className="related-info">
                  <h3>{related.name}</h3>
                  <p>{related.range} • {related.topSpeed}</p>
                  <Link to={`/products/${related.slug}`} className="related-link" style={{ color: related.accentColor }}>
                    View Details →
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default ProductDetail
