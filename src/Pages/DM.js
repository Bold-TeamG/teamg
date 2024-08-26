import React from 'react';
import '../css/DM.css';
import Footer from '../Components/footer';
import { useNavigate } from 'react-router-dom';

const DM = () => {
    const navigate = useNavigate();

    const handleBackClick = () => {
        navigate(-1); 
    };

    const dummyJobOffer = {
        name: "John Doe",
        phoneNumber: "+1 (555) 123-4567",
        jobContent: "Exhibition",
        place: "Moma museum",
        time: "August 30th, 2024, 5:00 PM - 10:00 PM",
        pay: "$200",
        description: "We will be holding an exhibition of contemporary art, and would love to display your products."
    };

    return (
        <div className="dm-container">
            <header>
                <div className="dm-back-icon" onClick={handleBackClick}>
                    <svg 
                        width="60" 
                        height="60" 
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
                                    <p><strong>Name:</strong> {dummyJobOffer.name}</p>
                                    <p><strong>Phone Number:</strong> {dummyJobOffer.phoneNumber}</p>
                                    <p><strong>Job Content:</strong> {dummyJobOffer.jobContent}</p>
                                    <p><strong>Place:</strong> {dummyJobOffer.place}</p>
                                    <p><strong>Time:</strong> {dummyJobOffer.time}</p>
                                    <p><strong>Pay:</strong> {dummyJobOffer.pay}</p>
                                    <p><strong>Description:</strong> {dummyJobOffer.description}</p>
                                </div>
                            </div>
                        </foreignObject>
                    </svg>
                    <svg width="40" height="20" xmlns="http://www.w3.org/2000/svg" className="bubble-tail">
                        <path d="M20 0 L40 0 L15 20 Z" fill="#F0F0F0" stroke="#ddd" strokeWidth="2" />
                    </svg>
                </div>
                <img src="userphoto.jpg" alt="User" />
            </div>
            <div className="dm-input">
                <input type="text" placeholder="Name" />
                <img src="arrow.png" alt="Send" />
            </div>
            <Footer />
        </div>
    );
};

export default DM;
