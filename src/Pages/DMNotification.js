import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../css/NotificationSwitcher.css';

const DMNotification = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/dm');
  };

  return (
    <div className="notification-container">
      <div className="notification" onClick={handleClick}>
        <img src="people3.jpeg" alt="User" />
        <div className="notification-detail">
          <label>You have a job offer from John</label>
          <p>Job: Exhibition</p>
          <p>Place: Moma museum</p>
        </div>
        <img src="arrow.png" alt="Arrow" />
      </div>

      <div className="notification" onClick={handleClick}>
        <img src="people1.jpg" alt="User" />
        <div className="notification-detail">
          <label>You have a job offer from Lily</label>
          <p>Job: concert</p>
          <p>Place: Central Park</p>
        </div>
        <img src="arrow.png" alt="Arrow" />
      </div>
    </div>
  );
};

export default DMNotification;
