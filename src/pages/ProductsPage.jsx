import React from 'react';
import banner2 from '../assets/banner 2.png';
import Products from '../components/Products';
import PageBanner from '../components/PageBanner';
import './ProductsPage.css';

const ProductsPage = () => {
  return (
    <div className="products-page">
      <PageBanner title="Our Products" image={banner2} />
      <Products />
    </div>
  );
};

export default ProductsPage;
