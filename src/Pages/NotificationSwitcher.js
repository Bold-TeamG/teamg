import React, { useState } from 'react';
import Footer from '../Components/footer';
import ProductNotification from './ProductNotification';
import DMNotification from './DMNotification';
import CampaignNotification from './CampaignNotification'; // Import the new component
import '../css/NotificationSwitcher.css';
import { useNavigate, useLocation } from 'react-router-dom';

const NotificationSwitcher = () => {
    // State to track the active tab
    const [activeTab, setActiveTab] = useState('campaign');
    const navigate = useNavigate();
    const location = useLocation();

    // Function to determine which component to render based on the active tab
    const renderNotificationComponent = () => {
        switch (activeTab) {
            case 'product':
                return <ProductNotification />;
            case 'campaign':
                return <CampaignNotification />;
            default:
                return null;
        }
    };
    const handleBackClick = () => {
        navigate(-1); 
    };

    return (
        <div className="notification-switcher-page">
            <div className="notification-switcher-header">
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
                    stroke="#fff" 
                    stroke-width="2" 
                    stroke-linecap="round" 
                    stroke-linejoin="round"
                  />
                </svg>
              </div>
                <button
                    className={`notification-switcher-button ${activeTab === 'campaign' ? 'active' : ''}`}
                    onClick={() => setActiveTab('campaign')}
                    aria-pressed={activeTab === 'campaign'}
                >
                    Campaign
                </button>
                <button
                    className={`notification-switcher-button ${activeTab === 'product' ? 'active' : ''}`}
                    onClick={() => setActiveTab('product')}
                    aria-pressed={activeTab === 'product'}
                >
                    Product
                </button>
            </div>
            <div className="notification-switcher-container">
                {renderNotificationComponent()}
            </div>
            <Footer />
        </div>
    );
};

export default NotificationSwitcher;
