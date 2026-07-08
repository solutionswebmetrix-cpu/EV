import React, { useState } from 'react';
import { motion } from 'framer-motion';
import banner3 from '../assets/banner 3.png';
import overviewImage from '../assets/Product/Aero Chopper.png';
import batteryImage from '../assets/Product/Aero Supreme.png';
import motorImage from '../assets/Product/Aero Supreme Pro.png';
import chargingImage from '../assets/Product/Aero plus.png';
import controllerImage from '../assets/Product/Aero .png';
import safetyImage from '../assets/Product/Aero Chopper.png';
import PageBanner from '../components/PageBanner';
import './TechnologyPage.css';

const techSections = [
  {
    title: 'Battery Technology',
    icon: '🔋',
    image: batteryImage,
    description: 'High-density lithium packs deliver smooth power, predictable range, and long-term durability for daily riders.',
    bullets: ['Smart BMS monitoring', 'Fast thermal control', 'Extended battery life'],
  },
  {
    title: 'BLDC Motor',
    icon: '⚡',
    image: motorImage,
    description: 'Brushless motors offer silent acceleration, higher efficiency, and lower maintenance with premium responsiveness.',
    bullets: ['Instant torque delivery', 'Low-friction design', 'Quiet urban performance'],
  },
  {
    title: 'Fast Charging',
    icon: '🔌',
    image: chargingImage,
    description: 'Compact charging architecture keeps downtime low and makes every journey easier to manage.',
    bullets: ['Rapid top-up support', 'Energy-efficient charging', 'Flexible home charging'],
  },
  {
    title: 'Smart Controller',
    icon: '🧠',
    image: controllerImage,
    description: 'Our controller intelligently balances power, safety, and range in real time for stable performance.',
    bullets: ['Adaptive power delivery', 'Diagnostics-ready system', 'Seamless ride tuning'],
  },
  {
    title: 'Safety Systems',
    icon: '🛡️',
    image: safetyImage,
    description: 'Every ride is designed with traction control, regenerative braking, and resilient frame engineering.',
    bullets: ['ABS-ready braking', 'Anti-theft protection', 'Stable handling design'],
  },
];

const stats = [
  { value: '160 km', label: 'Maximum range' },
  { value: '80 km/h', label: 'Top speed' },
  { value: '2 hrs', label: 'Rapid charging' },
  { value: '3 yrs', label: 'Warranty support' },
];

const comparisonPoints = [
  { label: 'Battery density', value: 'Premium' },
  { label: 'Controller response', value: 'Real-time' },
  { label: 'Charging ease', value: 'Fast' },
  { label: 'Ride stability', value: 'Advanced' },
];

const faqs = [
  { question: 'How does AeroVolt improve charge efficiency?', answer: 'Our integrated battery and controller system manages energy intelligently for faster, steadier charging.' },
  { question: 'Is the technology suited for daily commuting?', answer: 'Yes. The design focuses on reliability, low maintenance, and smooth urban performance.' },
  { question: 'What makes the motor premium?', answer: 'The BLDC architecture offers better efficiency, quieter operation, and stronger torque control.' },
];

const TechnologyPage = () => {
  const [openFaq, setOpenFaq] = useState(0);

  return (
    <div className="technology-page">
      <PageBanner title="Our Technology" image={banner3} />

      <section className="tech-intro-section">
        <div className="container tech-intro-grid">
          <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="tech-media-card">
            <img src={overviewImage} alt="AeroVolt product technology" />
          </motion.div>
          <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="tech-content-card">
            <p className="eyebrow">Technology Overview</p>
            <h2>Premium EV engineering built for performance and trust.</h2>
            <p>From battery intelligence to smart controllers, every AeroVolt system is crafted for reliability, efficiency, and elevated urban mobility.</p>
            <ul>
              <li>Advanced thermal protection</li>
              <li>Premium motor efficiency</li>
              <li>Smart ride diagnostics</li>
            </ul>
          </motion.div>
        </div>
      </section>

      <section className="tech-section-list">
        <div className="container">
          {techSections.map((item, index) => (
            <motion.div key={item.title} initial={{ opacity: 0, y: 25 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className={`tech-feature-card ${index % 2 === 1 ? 'reverse' : ''}`}>
              <div className="tech-feature-image">
                <img src={item.image} alt={item.title} />
              </div>
              <div className="tech-feature-copy">
                <div className="tech-icon">{item.icon}</div>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
                <ul>
                  {item.bullets.map((bullet) => <li key={bullet}>{bullet}</li>)}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="tech-stats-section">
        <div className="container">
          <div className="section-heading">
            <p className="eyebrow">Performance Statistics</p>
            <h2>Our engineering delivers measurable confidence.</h2>
          </div>
          <div className="stats-grid">
            {stats.map((stat) => (
              <div key={stat.label} className="stat-card">
                <h3>{stat.value}</h3>
                <p>{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="tech-comparison-section">
        <div className="container">
          <div className="section-heading">
            <p className="eyebrow">Technology Comparison</p>
            <h2>Every layer is designed for premium EV ownership.</h2>
          </div>
          <div className="comparison-grid">
            {comparisonPoints.map((item) => (
              <div key={item.label} className="comparison-card">
                <h3>{item.label}</h3>
                <p>{item.value}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="tech-faq-section">
        <div className="container">
          <div className="section-heading">
            <p className="eyebrow">FAQ</p>
            <h2>Answers for modern EV buyers.</h2>
          </div>
          <div className="faq-list">
            {faqs.map((faq, index) => (
              <div key={faq.question} className="faq-item">
                <button className="faq-question" onClick={() => setOpenFaq(openFaq === index ? -1 : index)}>
                  <span>{faq.question}</span>
                  <span>{openFaq === index ? '−' : '+'}</span>
                </button>
                {openFaq === index && <div className="faq-answer"><p>{faq.answer}</p></div>}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="tech-cta-section">
        <div className="container tech-cta-card">
          <div>
            <p className="eyebrow">Explore More</p>
            <h2>Discover how AeroVolt technology elevates every ride.</h2>
          </div>
          <a href="/products" className="cta-button">View Products</a>
        </div>
      </section>
    </div>
  );
};

export default TechnologyPage;
