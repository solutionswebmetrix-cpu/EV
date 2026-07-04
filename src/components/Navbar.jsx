import React, { useState, useEffect } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { products } from '../data';
import logo from '../assets/logo.png';
import './Navbar.css';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="navbar-container">
        <Link to="/" className="logo">
          <img src={logo} alt="AeroVolt" className="logo-img" />
        </Link>

        <div className={`nav-links ${isMenuOpen ? 'open' : ''}`}>
          <NavLink to="/" end onClick={() => setIsMenuOpen(false)}>Home</NavLink>
          <NavLink to="/about" onClick={() => setIsMenuOpen(false)}>About</NavLink>
          
          <div 
            className={`dropdown-trigger ${isDropdownOpen ? 'active' : ''}`}
            onMouseEnter={() => setIsDropdownOpen(true)}
            onMouseLeave={() => setIsDropdownOpen(false)}
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
          >
            <Link
              to="/products"
              className="products-link"
              onClick={() => {
                setIsMenuOpen(false);
                setIsDropdownOpen(false);
              }}
            >
              Products
            </Link>
            <AnimatePresence>
              {isDropdownOpen && (
                <motion.div 
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="products-dropdown"
                  onMouseEnter={() => setIsDropdownOpen(true)}
                  onMouseLeave={() => setIsDropdownOpen(false)}
                >
                  {products.map((product) => (
                    <Link
                      key={product.id}
                      to={`/products/${product.slug}`}
                      className="dropdown-item"
                      onClick={() => {
                        setIsMenuOpen(false);
                        setIsDropdownOpen(false);
                      }}
                    >
                      {product.name}
                    </Link>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <NavLink to="/technology" onClick={() => setIsMenuOpen(false)}>Technology</NavLink>
          <NavLink to="/dealership" onClick={() => setIsMenuOpen(false)}>Dealership</NavLink>
          <NavLink to="/gallery" onClick={() => setIsMenuOpen(false)}>Gallery</NavLink>
          <NavLink to="/contact" onClick={() => setIsMenuOpen(false)}>Contact</NavLink>
        </div>

        <div className={`hamburger ${isMenuOpen ? 'open' : ''}`} onClick={() => setIsMenuOpen(!isMenuOpen)}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
