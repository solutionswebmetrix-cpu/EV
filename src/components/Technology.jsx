import React from 'react';
import { motion } from 'framer-motion';
import { technologies } from '../data';
import './Technology.css';

const Technology = () => {
  return (
    <section className="technology">
      <div className="container">
        <div className="section-header">
          <h2>Cutting-Edge Technology</h2>
          <p>Experience innovation with our advanced features</p>
        </div>

        <div className="tech-grid">
          {technologies.map((tech, index) => (
            <motion.div
              key={tech.id}
              className="tech-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              whileHover={{ y: -10, scale: 1.02 }}
            >
              <div className="tech-icon">{tech.icon}</div>
              <h3 className="tech-name">{tech.name}</h3>
              <p className="tech-description">{tech.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Technology;
