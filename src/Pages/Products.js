import React, { useState } from 'react';
import Footer from '../Components/footer';
import Searchbar from "../Components/Searchbar";
import '../css/Products.css';

const Products = () => {
  return (
    <div className = "products-page">
      <Searchbar />
      <div className = "products-container">
        
        <img src="products.jpg" className = "products" alt="products"/>
      </div>
      <Footer />
    </div>
  );
};

export default Products;
