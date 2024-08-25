import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import '../css/Searchbar.css';

export default function Searchbar({keyword}) {
    const navigate = useNavigate();
    const location = useLocation();

    const handleBackClick = () => {
        navigate(-1); 
    };

    const shouldShowBackIcon = location.pathname !== '/discover';

    return (
        <div className="products-header">
                <div className="back-icon" onClick={handleBackClick}>
                <svg 
                  width="24" 
                  height="24" 
                  viewBox="0 0 24 24" 
                  fill="none" 
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path 
                    d="M15 19L8 12L15 5" 
                    stroke="#000" 
                    stroke-width="2" 
                    stroke-linecap="round" 
                    stroke-linejoin="round"
                  />
                </svg>
              </div>

            <div className="search-bar">
                <input type="text" placeholder="Search" value={keyword ? keyword : ""}/>
            </div> 
            <div className="bell-icon"><img src="/bell.png" alt="bell"/></div>
            <div className="cart-icon"><img src="/cart.png" alt="cart"/></div>
        </div>
    );
}
