import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import '../css/Searchbar.css';

export default function Searchbar() {
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
                    <img src="arrowback.png" alt="戻る"/>
                </div>
            )}
            <div className="search-bar">
                <input type="text" placeholder="Search"/>
            </div> 
            <div className="bell-icon"><img src="bell.png" alt="bell"/></div>
            <div className="cart-icon"><img src="cart.png" alt="cart"/></div>
        </div>
    );
}
