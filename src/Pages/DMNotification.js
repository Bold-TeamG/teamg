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
        <img src="arrow.png" alt="Arrow" />
      </div>

      <div className="notification" onClick={() => handleClick(3)}>
        <img src="people1.jpg" alt="User" />
        <div className="notification-detail">
          <label>You have a job offer from Lily</label>
          <p>Job: Concert</p>
          <p>Place: Central Park</p>
        </div>
        <img src="arrow.png" alt="Arrow" />
      </div>
      <Footer />
    </div>
  );
};

export default DMNotification;
