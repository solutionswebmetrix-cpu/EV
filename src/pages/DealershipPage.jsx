import React, { useState } from 'react';
import { motion } from 'framer-motion';
import banner4 from '../assets/banner 4.png';
import overviewImage from '../assets/Product/Chopper ZS+.png';
import supportImage from '../assets/Product/New Supreme +.png';
import Dealership from '../components/Dealership';
import PageBanner from '../components/PageBanner';
import './DealershipPage.css';

const benefits = [
  { title: 'High Margins', description: 'Competitive returns on every premium EV sale and service package.', icon: '💹' },
  { title: 'Marketing Support', description: 'Launch campaigns, local visibility, and digital promotion assets.', icon: '📈' },
  { title: 'Training Access', description: 'Product education, service onboarding, and sales excellence support.', icon: '🎓' },
  { title: 'Service Network', description: 'Fast spare parts access and reliable technical assistance.', icon: '🛠️' },
];

const steps = [
  { title: 'Apply', description: 'Share your profile and business intent.' },
  { title: 'Review', description: 'We evaluate alignment and market readiness.' },
  { title: 'Onboard', description: 'Receive training, tools, and launch guidance.' },
  { title: 'Launch', description: 'Open your dealer experience with premium support.' },
  { title: 'Grow', description: 'Scale with ongoing product and service enablement.' },
];

const requirements = [
  'Established retail or service presence',
  'Customer-first business approach',
  'Investment readiness for showroom setup',
  'Commitment to after-sales excellence',
];

const supportAreas = [
  'Inventory planning and product guidance',
  'Brand and campaign enablement',
  'Technical field support and training',
  'Dedicated business development partnership',
];

const faqs = [
  { question: 'What is the dealer investment required?', answer: 'It depends on your market size and retail setup, and our team will guide you through the options.' },
  { question: 'Do you provide training?', answer: 'Yes. We offer product, sales, and service training for each partner.' },
  { question: 'Can new businesses apply?', answer: 'Absolutely. We welcome ambitious entrepreneurs with a strong service mindset.' },
];

const stats = [
  { value: '500+', label: 'Partner outlets' },
  { value: '100+', label: 'Cities covered' },
  { value: '24/7', label: 'Support access' },
  { value: '95%', label: 'Partner satisfaction' },
];

const DealershipPage = () => {
  const [openFaq, setOpenFaq] = useState(0);

  return (
    <div className="dealership-page">
      <PageBanner title="Become a Dealer" image={banner4} />

      <section className="dealership-intro-section">
        <div className="container dealership-intro-grid">
          <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="dealership-media-card">
            <img src={overviewImage} alt="AeroVolt dealership opportunity" />
          </motion.div>
          <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="dealership-content-card">
            <p className="eyebrow">Why Partner With AeroVolt</p>
            <h2>Join a premium EV network with strong growth potential.</h2>
            <p>Launch your own EV retail presence with a respected brand, premium product portfolio, and end-to-end dealer support.</p>
            <ul>
              <li>High-margin EV product portfolio</li>
              <li>Strong customer trust and service model</li>
              <li>Modern retail and digital support</li>
            </ul>
          </motion.div>
        </div>
      </section>

      <section className="dealership-benefits-section">
        <div className="container">
          <div className="section-heading">
            <p className="eyebrow">Dealer Benefits</p>
            <h2>Everything needed to launch and scale a premium dealership.</h2>
          </div>
          <div className="benefit-grid">
            {benefits.map((benefit) => (
              <motion.div key={benefit.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="benefit-card">
                <div className="benefit-icon">{benefit.icon}</div>
                <h3>{benefit.title}</h3>
                <p>{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="dealership-support-section">
        <div className="container support-grid">
          <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="support-copy">
            <p className="eyebrow">Investment & Support</p>
            <h2>Flexible growth support for modern retail partners.</h2>
            <p>Our dealer framework covers operations, training, launch planning, marketing, and long-term business development assistance.</p>
            <ul>
              {supportAreas.map((item) => <li key={item}>{item}</li>)}
            </ul>
          </motion.div>
          <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="support-media-card">
            <img src={supportImage} alt="AeroVolt dealership support" />
          </motion.div>
        </div>
      </section>

      <section className="dealership-process-section">
        <div className="container">
          <div className="section-heading">
            <p className="eyebrow">Become a Dealer</p>
            <h2>Simple steps to start your partnership journey.</h2>
          </div>
          <div className="steps-grid">
            {steps.map((step, index) => (
              <div key={step.title} className="step-card">
                <span className="step-number">0{index + 1}</span>
                <h3>{step.title}</h3>
                <p>{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="dealership-requirements-section">
        <div className="container requirements-grid">
          <div className="requirements-card">
            <p className="eyebrow">Eligibility</p>
            <h2>We look for strong local market potential and service orientation.</h2>
            <ul>
              {requirements.map((item) => <li key={item}>{item}</li>)}
            </ul>
          </div>
          <div className="stats-card-grid">
            {stats.map((stat) => (
              <div key={stat.label} className="stat-card">
                <h3>{stat.value}</h3>
                <p>{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="dealership-faq-section">
        <div className="container">
          <div className="section-heading">
            <p className="eyebrow">FAQ</p>
            <h2>Common questions from dealership partners.</h2>
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

      <Dealership />

      <section className="dealership-cta-section">
        <div className="container dealership-cta-card">
          <div>
            <p className="eyebrow">Start Your Journey</p>
            <h2>Bring AeroVolt to your market with confidence.</h2>
          </div>
          <a href="#" className="cta-button">Apply Now</a>
        </div>
      </section>
    </div>
  );
};

export default DealershipPage;
