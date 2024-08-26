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
        <img src="userphoto.jpg" alt="User" />
        <div className="notification-detail">
          <label>You have a job offer from Kendalle</label>
          <p>Job: concert</p>
          <p>Place: Central Park</p>
        </div>
        <img src="arrow.png" alt="Arrow" />
      </div>

      <div className="notification" onClick={handleClick}>
        <img src="userphoto.jpg" alt="User" />
        <div className="notification-detail">
          <label>You have a job offer from Kendalle</label>
          <p>Job: concert</p>
          <p>Place: Central Park</p>
        </div>
        <img src="arrow.png" alt="Arrow" />
      </div>
    </div>
  );
};

export default DMNotification;
