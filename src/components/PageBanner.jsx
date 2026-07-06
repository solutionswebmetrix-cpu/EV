import React from 'react';
import { motion } from 'framer-motion';
import './PageBanner.css';

const PageBanner = ({ title, image, scale = 1 }) => {
  return (
    <section className="page-banner">
      <img 
        src={image} 
        alt="" 
        className="page-banner-image"
        style={{ transform: `scale(${scale})` }}
      />
      <div className="page-banner-overlay">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="page-banner-content"
          >
            <h1>{title}</h1>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default PageBanner;
