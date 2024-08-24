
import React, { useState } from 'react';
import '../css/Profile.css';
import Footer from '../Components/footer';
import Gallery from '../Components/gallery'; 

const Profile = () => {
  const [activeTab, setActiveTab] = useState("tab1");

  const tabImages = {
    tab1: ["user.jpg", "user.jpg", "user.jpg"],
    tab2: ["star_white.png", "star_white.png", "star_white.png"],
  };
  const tabIcons = {
    tab1: "items.png",
    tab2: "community_contents.png",
  };
  const galleryClass = `gallery ${activeTab === "tab1" ? "gallery-tab1" : activeTab === "tab2" ? "gallery-tab2" : ""}`;
  return (
    <div className="profile-page">
      <div className="profile-header">
          <h2>Jacob West</h2>
      </div>
      <div className="profile-container">

        <div className = "profile-info">
          <div className="profile-picture">
            <img src="user.jpg" alt="profile" />
          </div>
          <h2>Jacob West</h2>

          <div className="profile-stats">

            <div className = "profile-components">
              <h2>14</h2>
              <h4>Following</h4>
            </div>
            <div className = "profile-components">
              <h2>38</h2>
              <h4>Followers</h4>
            </div>
            <div className = "profile-components">
              <h2>91</h2>
              <h4>Likes</h4>
            </div>
          </div>

          <div className="profile-actions">
            <button>Follow</button>
            <button>Message</button>
          </div>
        </div>

      

        <div className="profile-icon">
          {Object.keys(tabIcons).map(tab => (
            <button
              key={tab}
              className={`tab ${activeTab === tab ? "active" : ""}`}
              onClick={() => setActiveTab(tab)}
            >
              <img src={tabIcons[tab]} alt={tab} />
            </button>
          ))}
        </div>
        
        <div className="profile-content">
          <Gallery images={tabImages[activeTab]} className={galleryClass}/>
        </div>
    
    </div>
    <Footer />
    </div>
  );
};

export default Profile;
