import React from 'react';
import { motion } from 'framer-motion';
import banner4 from '../assets/banner 4.png';
import Gallery from '../components/Gallery';
import PageBanner from '../components/PageBanner';
import './GalleryPage.css';

const GalleryPage = () => {
  return (
    <div className="gallery-page">
      {/* Page Banner */}
      <PageBanner title="Our Gallery" image={banner4} />

      {/* Introduction */}
      <section className="gallery-intro">
        <div className="container">
          <div className="intro-content">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              Welcome to Our Gallery
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              Take a visual journey through our collection of premium electric vehicles. From sleek scooters to powerful bikes, our gallery showcases the innovation, design, and quality that define AeroVolt. Each vehicle is a testament to our commitment to sustainable mobility and exceptional craftsmanship.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Whether you're looking for a daily commuter or a high-performance ride, our gallery offers a glimpse into the future of electric transportation. Explore our products, see them in action, and discover why AeroVolt is the perfect choice for your electric mobility needs.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Gallery */}
      <Gallery />
    </div>
  );
};

export default GalleryPage;
