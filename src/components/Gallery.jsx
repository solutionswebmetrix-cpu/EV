import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { galleryImages } from '../data';
import './Gallery.css';

const Gallery = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const categories = ['all', 'scooters', 'bikes', 'special'];

  const filteredImages = activeCategory === 'all'
    ? galleryImages
    : galleryImages.filter((img) => img.category === activeCategory);

  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <section className="gallery">
      <div className="container">
        <div className="section-header">
          <h2>Gallery</h2>
          <p>Explore our stunning collection of electric vehicles</p>
        </div>

        <div className="gallery-filters">
          {categories.map((category) => (
            <button
              key={category}
              className={`gallery-filter-btn ${activeCategory === category ? 'active' : ''}`}
              onClick={() => setActiveCategory(category)}
            >
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </button>
          ))}
        </div>

        <div className="gallery-grid">
          {filteredImages.map((image, index) => (
            <motion.div
              key={image.id}
              className="gallery-item"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              onClick={() => setSelectedImage(image)}
              whileHover={{ scale: 1.05 }}
            >
              <img src={image.url} alt={`Gallery ${image.id}`} />
              <div className="gallery-overlay">
                <span>View</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {selectedImage && (
        <div className="lightbox" onClick={() => setSelectedImage(null)}>
          <button className="lightbox-close" onClick={() => setSelectedImage(null)}>
            ×
          </button>
          <img src={selectedImage.url} alt="Full size" />
        </div>
      )}
    </section>
  );
};

export default Gallery;
