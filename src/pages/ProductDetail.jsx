import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { products } from '../data';
import PageBanner from '../components/PageBanner';
import './ProductDetail.css';

const ProductDetail = () => {
  const { slug } = useParams();
  const product = products.find((p) => p.slug === slug);
  const [activeFaq, setActiveFaq] = useState(null);
  const [activeImage, setActiveImage] = useState(product?.image || '');

  useEffect(() => {
    setActiveImage(product?.image || '');
  }, [product?.slug]);

  if (!product) {
    return (
      <div className="product-not-found">
        <h1>Product Not Found</h1>
        <Link to="/products" className="btn-back">Back to Products</Link>
      </div>
    );
  }

  const relatedProducts = products.filter((p) => p.id !== product.id).slice(0, 4);

  const getExtendedDescription = (item) => {
    const base = item.description || item.shortDescription || 'Premium AeroVolt electric scooter crafted for modern riders.';
    const words = base.trim().split(/\s+/);

    if (words.length >= 90) {
      return base;
    }

    return `${base} Designed for riders who expect premium comfort, intelligent technology, and dependable performance, this AeroVolt model brings elegant design, practical capability, and a refined everyday EV experience into one standout package.`;
  };

  const faqs = [
    {
      question: 'What is the warranty period?',
      answer: `All ${product.name} models come with a standard ${product.warranty} warranty.`,
    },
    {
      question: 'How long does it take to charge?',
      answer: `The ${product.name} takes approximately ${product.chargingTime} for a full charge.`,
    },
    {
      question: 'What is the range on a single charge?',
      answer: `The ${product.name} offers an impressive range of ${product.range} on a single charge.`,
    },
    {
      question: 'Is financing available?',
      answer: 'Yes, we offer flexible financing options through our partners. Contact us for more details.',
    },
  ];

  const quickSpecs = [
    { icon: '🔋', label: 'Battery', value: product.battery },
    { icon: '⚡', label: 'Motor', value: product.motor },
    { icon: '↗', label: 'Range', value: product.range },
    { icon: '🚀', label: 'Top Speed', value: product.topSpeed },
    { icon: '⏱', label: 'Charging', value: product.chargingTime },
    { icon: '🛑', label: 'Brake', value: product.brakes },
  ];

  const technicalSpecs = [
    { label: 'Battery', value: product.battery },
    { label: 'Motor', value: product.motor },
    { label: 'Range', value: product.range },
    { label: 'Charging', value: product.chargingTime },
    { label: 'Brakes', value: product.brakes },
    { label: 'Tyres', value: product.tyres },
    { label: 'Display', value: 'Digital Console' },
    { label: 'Controller', value: 'Smart Controller' },
    { label: 'Ground Clearance', value: '160 mm' },
    { label: 'Suspension', value: 'Telescopic' },
    { label: 'Load Capacity', value: '150 kg' },
    { label: 'Warranty', value: product.warranty },
  ];

  const featureCards = (product.features || []).map((feature) => ({
    icon: '✓',
    title: feature,
    description: 'Premium quality with cutting-edge EV technology',
  }));

  const galleryImages = product.gallery?.length ? product.gallery : [product.image];

  return (
    <div className="product-detail" style={{ '--accent-color': product.accentColor }}>
      <PageBanner title={product.name} image={product.banner} scale={0.9} />

      <section className="section hero-section">
        <div className="container">
          <div className="detail-hero">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="image-showcase"
            >
              <div className="main-image-card">
                <img src={activeImage} alt={product.name} className="product-main-image" />
              </div>

              <div className="gallery-strip">
                {galleryImages.map((image, idx) => (
                  <button
                    key={`${image}-${idx}`}
                    type="button"
                    className={`gallery-thumb ${activeImage === image ? 'active' : ''}`}
                    onClick={() => setActiveImage(image)}
                  >
                    <img src={image} alt={`${product.name} view ${idx + 1}`} />
                  </button>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="details-panel"
            >
              <p className="eyebrow">AeroVolt Electric Scooter</p>
              <h1 className="detail-title">{product.name}</h1>
              <p className="detail-description">{getExtendedDescription(product)}</p>

              <div className="quick-spec-grid">
                {quickSpecs.map((spec, idx) => (
                  <div key={idx} className="quick-spec-card">
                    <span className="spec-icon">{spec.icon}</span>
                    <div className="spec-info">
                      <span className="spec-label">{spec.label}</span>
                      <span className="spec-value">{spec.value}</span>
                    </div>
                  </div>
                ))}
              </div>

              <div className="cta-row">
                <Link to="/enquiry" className="btn book-now-btn">
                  Book Test Ride
                </Link>
                <Link to="/enquiry" className="btn download-btn">
                  Enquire Now
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="section features-section">
        <div className="container">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="section-title"
          >
            Key Features
          </motion.h2>
          <div className="feature-grid">
            {featureCards.map((feature, idx) => (
              <motion.div
                key={idx}
                className="feature-card"
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.05 }}
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

      <section className="section specs-section">
        <div className="container">
          <h2 className="section-title">Technical Specifications</h2>
          <div className="spec-table">
            {technicalSpecs.map((spec, idx) => (
              <div key={idx} className="spec-row">
                <span className="spec-label">{spec.label}</span>
                <span className="spec-value">{spec.value}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section gallery-section">
        <div className="container">
          <h2 className="section-title">Gallery</h2>
          <div className="gallery-grid">
            {galleryImages.map((image, idx) => (
              <div key={`${image}-${idx}`} className="gallery-card">
                <img src={image} alt={`${product.name} gallery ${idx + 1}`} />
              </div>
            ))}
          </div>
        </div>
      </section>

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

      <section className="enquiry-form-section">
        <div className="container">
          <div className="enquiry-box">
            <div className="enquiry-content">
              <h2>Interested in {product.name}?</h2>
              <p>Get in touch with our team for more details and test ride booking.</p>
            </div>
            <Link to="/enquiry" className="btn-enquire-cta" style={{ background: `linear-gradient(135deg, var(--electric-green), var(--electric-blue))` }}>
              Book a Test Ride
            </Link>
          </div>
        </div>
      </section>

      <section className="related-products">
        <div className="container">
          <h2 className="section-title">Related Products</h2>
          <div className="related-grid">
            {relatedProducts.map((related, idx) => (
              <motion.div
                key={related.id}
                className="related-card"
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.08 }}
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
  );
};

export default ProductDetail;
