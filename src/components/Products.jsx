import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { products as productData } from '../data'
import fallbackImage from '../assets/Product/Chopper.png'
import './Products.css'

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

  if (words.length >= 60) {
    return base;
  }

  return `${base} With a ${product.range || 'strong'} range, ${product.topSpeed || 'efficient'} top speed, and ${product.chargingTime || 'quick'} charging, this AeroVolt scooter is crafted for riders who want reliable everyday performance, premium comfort, and modern EV technology in a single package.`;
};

const Products = () => {
  const catalogProducts = productData?.length ? productData : sampleProducts;
  const [activeCategory, setActiveCategory] = useState('all')
  const categories = ['all', ...new Set(catalogProducts.map((p) => p.category))]

  const filteredProducts = activeCategory === 'all'
    ? catalogProducts
    : catalogProducts.filter((p) => p.category === activeCategory)

  return (
    <section className="products" id="products">
      <div className="container">
        <div className="section-header">
          <h2>Our Premium Collection</h2>
          <p>Discover the perfect electric vehicle for your lifestyle</p>
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
            <motion.div
              key={product.id}
              className="product-card"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              whileHover={{ y: -15, rotateY: 8, rotateX: 3 }}
              style={{ transformStyle: "preserve-3d" }}
            >
              <div className="product-glow" style={{ background: `radial-gradient(circle at 50% 0%, ${product.accentColor}40, transparent 60%)` }}></div>
              <div className="product-image">
                <img src={product.image} alt={product.name} />
                <div className="product-category" style={{ background: `linear-gradient(135deg, ${product.accentColor}, ${product.accentColor}dd)` }}>{product.category}</div>
              </div>

              <div className="product-info">
                <h3 className="product-name">{product.name}</h3>
                <p className="product-description">{getProductDescription(product)}</p>

                <div className="product-stats-grid">
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
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Products
