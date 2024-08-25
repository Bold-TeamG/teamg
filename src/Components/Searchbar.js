import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../css/Searchbar.css';

export default function Searchbar({keyword}) {
    const navigate = useNavigate();

    const handleBackClick = () => {
        navigate(-1); 
    };

    return (
        <div className="products-header">
            <div className="back-icon" onClick={handleBackClick}>
                <img src="/arrowback.png" alt="戻る"/>
            </div>
            <div className="search-bar">
                <input type="text" placeholder="Search" value={keyword ? keyword : ""}/>
            </div> 
            <div className="bell-icon"><img src="/bell.png" alt="bell"/></div>
            <div className="cart-icon"><img src="/cart.png" alt="cart"/></div>
        </div>
    );
}
