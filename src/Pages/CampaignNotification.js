import React from 'react';
import '../css/NotificationSwitcher.css';
const CampaignNotification = () => {
  return (
    <div className = "notification-container">
        <div className = "notification">
            <img src = "items.png" />
            <div class = "notification-detail">
                <label>Summer campaign</label>
                <p>Offer special discounts on summer clothes.</p>
            </div>
            <img src = "white.jpeg" />
        </div>
        <div className = "notification">
            <img src = "items.png" />
            <div class = "notification-detail">
                <label>10% off campaign</label>
                <p>Right now, you can purchase leisure equipment</p>
                <p>with a 10% discount!</p>
            </div>
            <img src = "white.jpeg" />
        </div>
    </div>
  );
};

export default CampaignNotification;