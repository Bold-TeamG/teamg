import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import '../css/DM.css';
import Footer from '../Components/footer';

const DM = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleBackClick = () => {
    navigate(-1); 
  };

  // ジョブオファーのデータ
  const jobOffers = {
    1: {
      name: "John Doe",
      phoneNumber: "+1 (555) 123-4567",
      jobContent: "Exhibition",
      place: "Moma museum",
      time: "August 30th, 2024, 5:00 PM - 10:00 PM",
      pay: "$200",
      description: "We will be holding an exhibition of contemporary art, and would love to display your products.",
      image: "people3.jpeg"
    },
    3: {
      name: "Lily",
      phoneNumber: "+1 (555) 987-6543",
      jobContent: "Concert",
      place: "Central Park",
      time: "September 15th, 2024, 7:00 PM - 11:00 PM",
      pay: "$300",
      description: "We are organizing a large outdoor concert and need your assistance.",
      image: "people1.jpg"
    }
  };

  // 現在のジョブオファーを取得
  const currentJobOffer = jobOffers[location.state?.jobOffer] || jobOffers[1];

  return (
    <div className="dm-container">
      <header>
        <div className="dm-back-icon" onClick={handleBackClick}>
          <svg 
            width="36" 
            height="36" 
            viewBox="0 0 24 24" 
            fill="none" 
            xmlns="http://www.w3.org/2000/svg"
          >
            <path 
              d="M15 19L8 12L15 5" 
              stroke="#000" 
              strokeWidth="2" 
              strokeLinecap="round" 
              strokeLinejoin="round" 
            />
          </svg>
        </div>
      </header>
      <div className="dm-body">
        <div className="message">
          <svg width="360" height="380" xmlns="http://www.w3.org/2000/svg">
            <rect x="20" y="20" width="360" height="400" fill="#F0F0F0" stroke="#ddd" strokeWidth="2" />
            <foreignObject x="22" y="25" width="350" height="400">
              <div xmlns="http://www.w3.org/1999/xhtml" className="joboffer-container">
                <h3>Job Offer</h3>
                <div className="joboffer-detail">
                  <p><strong>Name:</strong> {currentJobOffer.name}</p>
                  <p><strong>Phone Number:</strong> {currentJobOffer.phoneNumber}</p>
                  <p><strong>Job Content:</strong> {currentJobOffer.jobContent}</p>
                  <p><strong>Place:</strong> {currentJobOffer.place}</p>
                  <p><strong>Time:</strong> {currentJobOffer.time}</p>
                  <p><strong>Pay:</strong> {currentJobOffer.pay}</p>
                  <p><strong>Description:</strong> {currentJobOffer.description}</p>
                </div>
              </div>
            </foreignObject>
          </svg>
          <svg width="40" height="20" xmlns="http://www.w3.org/2000/svg" className="bubble-tail">
            <path d="M20 0 L40 0 L15 20 Z" fill="#F0F0F0" stroke="#ddd" strokeWidth="2" />
          </svg>
        </div>
        <img src={currentJobOffer.image} alt="User" />
      </div>
      <div className="dm-input">
        <input type="text" placeholder="　　Message..." />
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

export default DM;
