import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import '../css/Searchbar.css';

export default function Searchbar({ keyword }) {
    const navigate = useNavigate();
    const location = useLocation();

    const handleBackClick = () => {
        navigate(-1);
    };

    const shouldShowBackIcon = location.pathname !== '/discover';

    return (
        <div className="products-header">
            {shouldShowBackIcon && (
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
                            strokeWidth="2" 
                            strokeLinecap="round" 
                            strokeLinejoin="round"
                        />
                    </svg>
                </div>
            )}
            <div className="search-bar">
                <input type="text" placeholder="Search" value={keyword || ""} />
            </div>
            <div className="iconss">
            <a href="/notification" className="cart-icon"><img src="/cart.png" alt="bell" /></a>
            <a href="/cart" className="cart-icon"><img src="/bell.png" alt="bell" /></a>
            </div>
        </div>
    );
}
