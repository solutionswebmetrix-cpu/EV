import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { products as productData } from '../data';
import fallbackImage from '../assets/Product/Aero Chopper.png';
import './Products.css';

const sampleProducts = [
  {
    id: 1,
    slug: 'aero-chopper',
    category: 'High Speed Scooters',
    name: 'Aero Chopper',
    shortDescription: 'A premium electric scooter designed for smooth city commuting with a lightweight frame, efficient battery performance, and stylish everyday practicality.',
    description: 'A premium electric scooter designed for smooth city commuting with a lightweight frame, efficient battery performance, and stylish everyday practicality. It delivers dependable range and comfort for daily riders seeking a modern EV experience.',
    range: '70 km',
    topSpeed: '25 km/h',
    battery: '1.5 kWh Lithium-ion',
    chargingTime: '2 hrs',
    image: fallbackImage,
    accentColor: '#F97316',
  },
];

const getProductDescription = (product) => {
  const base = product.cardDescription || product.shortDescription || product.description || 'Premium AeroVolt electric scooter designed for modern urban commuting.';
  const words = base.trim().split(/\s+/);

  if (words.length >= 70) {
    return base;
  }

  return `${base} Built for modern riders, this AeroVolt model brings dependable range, refined comfort, and intelligent EV technology together in one premium package.`;
};

const Products = () => {
  const catalogProducts = productData?.length ? productData : sampleProducts;
  const [activeCategory, setActiveCategory] = useState('all');
  const categories = ['all', ...new Set(catalogProducts.map((p) => p.category))];

  const filteredProducts = activeCategory === 'all'
    ? catalogProducts
    : catalogProducts.filter((p) => p.category === activeCategory);

  return (
    <section className="products" id="products">
      <div className="container">
        <div className="section-header">
          <p className="eyebrow">Premium Electric Mobility</p>
          <h2>Our Premium Collection</h2>
          <p>Discover the perfect AeroVolt scooter for your daily ride, from urban commuting to high-performance travel.</p>
        </div>

        <div className="category-filters">
          {categories.map((category) => (
            <button
              key={category}
              className={`filter-btn ${activeCategory === category ? 'active' : ''}`}
              onClick={() => setActiveCategory(category)}
            >
              {category === 'all' ? 'All Products' : category}
            </button>
          ))}
        </div>

        <div className="products-grid">
          {filteredProducts.map((product, index) => (
            <motion.article
              key={product.id}
              className="product-card"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: index * 0.04 }}
              whileHover={{ y: -10, scale: 1.01 }}
            >
              <div className="product-glow" style={{ background: `radial-gradient(circle at 50% 0%, ${product.accentColor}40, transparent 60%)` }}></div>
              <div className="product-image">
                <img src={product.image} alt={product.name} />
                <div className="product-category" style={{ background: `linear-gradient(135deg, ${product.accentColor}, ${product.accentColor}dd)` }}>{product.category}</div>
              </div>

              <div className="product-info">
                <h3 className="product-name">{product.name}</h3>
                <p className="product-description">{getProductDescription(product)}</p>

                <div className="product-stats-list">
                  <div className="product-stat">
                    <span className="product-stat-label">Range</span>
                    <span className="product-stat-value">{product.range}</span>
                  </div>
                  <div className="product-stat">
                    <span className="product-stat-label">Top Speed</span>
                    <span className="product-stat-value">{product.topSpeed}</span>
                  </div>
                  <div className="product-stat">
                    <span className="product-stat-label">Battery</span>
                    <span className="product-stat-value">{product.battery}</span>
                  </div>
                  <div className="product-stat">
                    <span className="product-stat-label">Charging</span>
                    <span className="product-stat-value">{product.chargingTime}</span>
                  </div>
                </div>

                <div className="product-actions">
                  <Link to={`/products/${product.slug}`} className="btn-view">
                    View Details
                  </Link>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;
