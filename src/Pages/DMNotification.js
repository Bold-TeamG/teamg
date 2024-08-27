import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../css/NotificationSwitcher.css';
import Footer from '../Components/footer';

const DMNotification = () => {
  const navigate = useNavigate();

  // `jobId`によって異なるジョブオファーを表示
  const handleClick = (jobId) => {
    if (jobId === 1) {
      navigate('/dm', { state: { jobOffer: 1 } }); // `jobOffer` の値を 1 に設定
    } else if (jobId === 3) {
      navigate('/dm', { state: { jobOffer: 3 } }); // `jobOffer` の値を 3 に設定
    }
  };

  return (
    <div className="notification-container">
      <div className = "dmheader">
        <p>DM</p>
      </div>
      <div className="notification" onClick={() => handleClick(1)}>
        <img src="people3.jpeg" alt="User" />
        <div className="notification-detail">
          <label>You have a job offer from John</label>
          <p>Job: Exhibition</p>
          <p>Place: Moma museum</p>
        </div>
        <svg 
          width="36" 
          height="36" 
          viewBox="0 0 24 24" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg"
        >
          <path 
            d="M9 5L16 12L9 19" 
            stroke="#000" 
            stroke-width="2" 
            stroke-linecap="round" 
            stroke-linejoin="round"
          />
        </svg>
      </div>

      <div className="notification" onClick={() => handleClick(3)}>
        <img src="people1.jpg" alt="User" />
        <div className="notification-detail">
          <label>You have a job offer from Lily</label>
          <p>Job: Concert</p>
          <p>Place: Central Park</p>
        </div>
        <svg 
          width="36" 
          height="36" 
          viewBox="0 0 24 24" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg"
        >
          <path 
            d="M9 5L16 12L9 19" 
            stroke="#000" 
            stroke-width="2" 
            stroke-linecap="round" 
            stroke-linejoin="round"
          />
        </svg>
      </div>
      <Footer />
    </div>
  );
};

export default DMNotification;
