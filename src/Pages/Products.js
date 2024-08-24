import React, { useState } from 'react';
import Footer from '../Components/footer';
import '../css/Products.css';

const Products = () => {
  return (
    <div className = "products-page">
      <div className = "products-container">
        <div class = "products-header">
            <div class="search-bar">
                <input type="text" placeholder="Search"/>
            </div> 
            <div class="bell-icon"><img src="bell.png" alt="bell"/></div>
            <div class="cart-icon"><img src="cart.png" alt="cart"/></div>
        </div>
        
        <img src="products.jpg" className = "products" alt="products"/>
      </div>
      <Footer />
    </div>
  );
};

export default Products;
