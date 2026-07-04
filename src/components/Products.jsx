import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { products as productData } from '../data';
import fallbackImage from '../assets/Product/Chopper.png';
import './Products.css';

const sampleProducts = [
  {
    id: 1,
    slug: 'aerovolt-chopper',
    category: 'City Scooters',
    name: 'AeroVolt Chopper',
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
  const maxWords = 40;

  if (words.length <= maxWords) {
    return base;
  }

  return `${words.slice(0, maxWords).join(' ')}…`;
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
          <h2>Discover the AeroVolt Collection</h2>
          <p>Explore a refined range of electric scooters crafted for style, performance, and everyday confidence.</p>
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
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: index * 0.04 }}
              whileHover={{ y: -10, scale: 1.01 }}
            >
              <div className="product-media">
                <img src={product.image} alt={product.name} />
                <div className="product-badge" style={{ background: `linear-gradient(135deg, ${product.accentColor}, ${product.accentColor}dd)` }}>
                  {product.category}
                </div>
              </div>

              <div className="product-content">
                <div>
                  <h3 className="product-name">{product.name}</h3>
                  <p className="product-description">{getProductDescription(product)}</p>
                </div>

                <div className="spec-list">
                  <div className="spec-item">
                    <span className="spec-icon">↗</span>
                    <div>
                      <strong>Range</strong>
                      <span>{product.range}</span>
                    </div>
                  </div>
                  <div className="spec-item">
                    <span className="spec-icon">⚡</span>
                    <div>
                      <strong>Top Speed</strong>
                      <span>{product.topSpeed}</span>
                    </div>
                  </div>
                  <div className="spec-item">
                    <span className="spec-icon">🔋</span>
                    <div>
                      <strong>Battery</strong>
                      <span>{product.battery}</span>
                    </div>
                  </div>
                  <div className="spec-item">
                    <span className="spec-icon">⏱</span>
                    <div>
                      <strong>Charging</strong>
                      <span>{product.chargingTime}</span>
                    </div>
                  </div>
                </div>

                <div className="product-action">
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
