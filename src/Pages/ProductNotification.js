import React from 'react';
import '../css/Notification.css';

const ProductNotification = () => {
    return (
        <div className = "notification-container">
        <div className = "notification">
            <img src = "bell.png" />
            <div class = "notification-detail">
                <label>Would you like to buy something?</label>
                <p>You have 10 recommended items</p>
            </div>
            <img src = "white.jpeg" />
        </div>
        <div className = "notification">
            <img src = "cart.png" />
            <div class = "notification-detail">
                <label>Purchase Notification</label>
                <p>One of your listed items has been sold!</p>
            </div>
            <img src = "white.jpeg" />
        </div>
    </div>
      );
};

export default ProductNotification;