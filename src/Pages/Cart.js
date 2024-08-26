import React from 'react';
import '../css/Cart.css';
import { useNavigate, useLocation } from 'react-router-dom';
import Footer from '../Components/footer';

const Cart = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const handleBackClick = () => {
        navigate(-1); 
    };
    return (
        <div className = "cart-page">
        <div className="back-icon" onClick={handleBackClick}>
            <svg 
                  width="40" 
                  height="40" 
                  viewBox="0 0 24 24" 
                  fill="none" 
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path 
                    d="M15 19L8 12L15 5" 
                    stroke="black" 
                    stroke-width="2" 
                    stroke-linecap="round" 
                    stroke-linejoin="round"
                  />
                </svg>
        </div>
        <div className = "cart-container">
            <img src="/emptycart.png" className = "emptycart" alt="emptycart"/>
        </div>
        <Footer />
        </div>
      );
};

export default Cart;