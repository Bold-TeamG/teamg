import React, { useState } from 'react';
import Footer from '../Components/footer';
import Gallery from '../Components/gallery'; 
import '../css/Myprofile.css';

const Myprofile = () => {
  const [activeTab, setActiveTab] = useState("tab1");

  const tabImages = {
    tab1: ["user.jpg", "user.jpg", "user.jpg"],
    tab2: ["star_white.png", "star_white.png", "star_white.png"],
    tab3: ["star_black.png", "star_black.png", "star_black.png"],
    tab4: ["search.png", "search.png", "search.png"],
  };
  const tabIcons = {
    tab1: "items.png",
    tab2: "community_contents.png",
    tab3: "heart_items.png",
    tab4: "heart_community.png",
  };

  const galleryClass = `gallery ${activeTab === "tab1" ? "gallery-tab1" : activeTab === "tab2" ? "gallery-tab2"  : activeTab === "tab3" ? "gallery-tab3" : activeTab === "tab4" ? "gallery-tab4" : ""}`;
  
  return (
    <div className="myprofile-page">
      <div className="myprofile-header">
        <h2>Jacob West</h2>
      </div>
      <div className="myprofile-container">
        <div className="myprofile-info">
          <div className="myprofile-picture">
            <img src="user.jpg" alt="profile" />
          </div>
          <h2>Jacob West</h2>
          <div className="myprofile-reputation">
            {[...Array(4)].map((_, i) => <img key={i} src="star_black.png" alt="star_black" />)}
            <img src="star_white.png" alt="star_white" />
          </div>
          <div className="myprofile-stats">
            <div className="myprofile-components">
              <h2>14</h2>
              <h4>Following</h4>
            </div>
            <div className="myprofile-components">
              <h2>38</h2>
              <h4>Followers</h4>
            </div>
            <div className="myprofile-components">
              <h2>91</h2>
              <h4>Likes</h4>
            </div>
          </div>
          <div className="myprofile-actions">
            <button>Edit profile</button>
          </div>
        </div>
        
        <div className="myprofile-icon">
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
        
        <div className="myprofile-content">
          <Gallery images={tabImages[activeTab]} className={galleryClass}/>
        </div>
    
      </div>
      <Footer />
    </div>
  );
};

export default Myprofile;
