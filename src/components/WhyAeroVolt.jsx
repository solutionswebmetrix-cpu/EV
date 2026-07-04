import React from 'react';
import { motion } from 'framer-motion';
import { whyAeroVolt } from '../data';
import './WhyAeroVolt.css';

const WhyAeroVolt = () => {
  return (
    <section className="why-aerovolt">
      <div className="container">
        <div className="section-header">
          <h2>Why Choose AeroVolt?</h2>
          <p>Experience the difference with our commitment to excellence</p>
        </div>

        <div className="why-grid">
          {whyAeroVolt.map((item, index) => (
            <motion.div
              key={item.id}
              className="why-card"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              whileHover={{ scale: 1.05 }}
            >
              <div className="why-number">{String(index + 1).padStart(2, '0')}</div>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyAeroVolt;
