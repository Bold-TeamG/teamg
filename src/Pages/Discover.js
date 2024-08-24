import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Footer from '../Components/footer';
import '../css/Discover.css';

const Discover = () => {
  return (
    <div className = "discover-page">
      <div className = "discover-container">

        <div class = "discover-header">
            <div class="search-bar">
                <input type="text" placeholder="Search"/>
            </div> 
            <div class="bell-icon"><img src="bell.png" alt="bell"/></div>
            <div class="cart-icon"><img src="cart.png" alt="cart"/></div>
        </div>
        
        <div class="recommended-user">
            <p>Recommend user</p>
            <Link to="/profile">
            <div class="user-section">
                <img class = "user-photo" src="user.jpg" alt="user"/>
                <span>ユーザー名</span>
                <img class = "arrow-photo" src="arrow.png" alt="arrow"/>
            </div>
            </Link>

            <div class="product-grid">
                <img src="user.jpg" alt="Product 1"/>
                <img src="user.jpg" alt="Product 1"/>
                <img src="user.jpg" alt="Product 1"/>
                <img src="user.jpg" alt="Product 1"/>
                <img src="user.jpg" alt="Product 1"/>
                <img src="user.jpg" alt="Product 1"/>
            </div>

        </div>
        <div class="recommended-products">
            <p>Recommend products</p>
            <div class="product-grid">
                <img src="user.jpg" alt="Product 1"/>
                <img src="user.jpg" alt="Product 1"/>
                <img src="user.jpg" alt="Product 1"/>
                <img src="user.jpg" alt="Product 1"/>
                <img src="user.jpg" alt="Product 1"/>
                <img src="user.jpg" alt="Product 1"/>
            </div>
        </div>
        
      </div>
      <Footer />
    </div>
  );
};

export default Discover;
