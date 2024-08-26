import React from 'react';
import '../css/NotificationSwitcher.css';
const CampaignNotification = () => {
  return (
    <div className = "notification-container">
        <div className = "notification">
            <img src = "items.png" />
            <div class = "notification-detail">
            <label>You have job offer from Kendalle</label>
                <p>Job: concert </p>
                <p>Place: central park </p>
            </div>
            <img src = "arrow.png" />
        </div>
        <div className = "notification">
            <img src = "items.png" />
            <div class = "notification-detail">
                <label>You have job offer from Kendalle</label>
                <p>Job: concert </p>
                <p>Place: central park </p>
            </div>
            <img src = "arrow.png" />
        </div>
    </div>
  );
};

export default CampaignNotification;