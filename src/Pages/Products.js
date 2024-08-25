import React, { useState } from 'react';
import Footer from '../Components/footer';
import Searchbar from "../Components/Searchbar";
import '../css/Products.css';
import { useParams } from 'react-router-dom';

const Products = () => {
  const {keyword} = useParams();
  return (
    <div className = "products-page">
      <Searchbar  keyword={keyword}/>
      <div className = "products-container">
        <img src="/products.jpg" className = "products" alt="products"/>
      </div>
      <Footer />
    </div>
  );
};

export default Products;
