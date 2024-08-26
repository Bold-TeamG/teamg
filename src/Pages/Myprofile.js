import React, { useEffect, useRef, useState, createRef } from 'react';
import Footer from '../Components/footer';
import Gallery from '../Components/gallery'; 
import NotificationSwitcher from './NotificationSwitcher'; 
import '../css/Myprofile.css';

import { doc, getDoc } from 'firebase/firestore';
import {db, storage} from '../firebase/index';

const Myprofile = () => {
    const [Data, setData] = useState(null);
    useEffect(() => {
    const fetchUserData = async () => {
      try {
        const docRef = doc(db, "posts", "20");
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
            setData(docSnap.data());
        } else {
          console.warn("No document found with ID = 1");
        }
      } catch (error) {
        console.error("Error fetching user data: ", error);
      }
    };

    fetchUserData();
  }, []);

  const [activeTab, setActiveTab] = useState("tab1");
  const tabLinks = {
    tab1: ["product/1","product/2","product/3"],
    tab2: ["detail/1","detail/2","detail/3"],
    tab3: ["product/6","product/11","product/9"],
    tab4: ["detail/6","detail/11","detail/9"],
  }
  const tabImages = {
    tab1: [Data ? Data.product1 : "https://placehold.jp/150x150.png",
      Data ? Data.product2 : "https://placehold.jp/150x150.png",
      Data ? Data.product3 : "https://placehold.jp/150x150.png"],
    tab2: [Data ? Data.thunbnail1 : "https://placehold.jp/150x150.png",
      Data ? Data.thunbnail2 : "https://placehold.jp/150x150.png",
      Data ? Data.thunbnail3 : "https://placehold.jp/150x150.png"],
    tab3: [Data ? Data.goodproduct1 : "https://placehold.jp/150x150.png",
      Data ? Data.goodproduct2 : "https://placehold.jp/150x150.png",
      Data ? Data.goodproduct3 : "https://placehold.jp/150x150.png"],
    tab4: [Data ? Data.goodthunbnail1 : "https://placehold.jp/150x150.png",
      Data ? Data.goodthunbnail2 : "https://placehold.jp/150x150.png",
      Data ? Data.goodthunbnail3 : "https://placehold.jp/150x150.png"]
  };
  const tabIcons = {
    tab1: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" width="24" height="24">
        <g stroke={activeTab === "tab1" ? "#000" : "#888"} strokeWidth="4" fill="none">
          <polygon points="4,20 32,2 60,20 32,38" />
          <polygon points="4,20 4,44 32,62 60,44 60,20 32,38" />
          <polyline points="4,20 32,38 60,20" />
          <line x1="32" y1="38" x2="32" y2="62" />
        </g>
      </svg>
    ),
    tab2: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke={activeTab === "tab2" ? "#000" : "#888"}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path
          d="M22.54 6.42a2.78 2.78 0 00-1.95-1.95C18.88 4 12 4 12 4s-6.88 0-8.59.47A2.78 2.78 0 001.46 6.42 29.94 29.94 0 001 12a29.94 29.94 0 00.46 5.58 2.78 2.78 0 001.95 1.95C5.12 20 12 20 12 20s6.88 0 8.59-.47a2.78 2.78 0 001.95-1.95A29.94 29.94 0 0023 12a29.94 29.94 0 00-.46-5.58z"
        ></path>
        <polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02"></polygon>
      </svg>
    ),
    tab3: (
      <svg xmlns="http://www.w3.org/2000/svg" 
        viewBox="0 0 64 64" 
        width="24" 
        height="24"
        stroke={activeTab === "tab3" ? "#000" : "#888"}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round">
       
        <path d="M32 53s-16-12-22-20C6 25 6 14 12 8c6-6 14 0 14 5 0-5 8-11 14-5 6 6 6 17 0 25-6 8-22 20-22 20z" 
              fill="none" stroke={activeTab === "tab3" ? "#000" : "#888"} strokeWidth="2"/>
        <g transform="translate(12, 13) scale(0.4)" stroke={activeTab === "tab3" ? "#000" : "#888"} strokeWidth="2" fill="none">
          <polygon points="4,20 32,2 60,20 32,38" />
          <polygon points="4,20 4,44 32,62 60,44 60,20 32,38" />
          <polyline points="4,20 32,38 60,20" />
          <line x1="32" y1="38" x2="32" y2="62" />
        </g>
      </svg>
    ),
    tab4: (
      <svg xmlns="http://www.w3.org/2000/svg" 
            viewBox="0 0 64 64" 
            width="24" 
            height="24"
            stroke={activeTab === "tab4" ? "#000" : "#888"}
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round">
       
        <path d="M32 53s-16-12-22-20C6 25 6 14 12 8c6-6 14 0 14 5 0-5 8-11 14-5 6 6 6 17 0 25-6 8-22 20-22 20z" 
              fill="none" stroke={activeTab === "tab4" ? "#000" : "#888"} strokeWidth="2"/>
        <g transform="translate(13, 15)" stroke={activeTab === "tab4" ? "#000" : "#888"} strokeWidth="2" fill="none">
        <path
            d="M22.54 6.42a2.78 2.78 0 00-1.95-1.95C18.88 4 12 4 12 4s-6.88 0-8.59.47A2.78 2.78 0 001.46 6.42 29.94 29.94 0 001 12a29.94 29.94 0 00.46 5.58 2.78 2.78 0 001.95 1.95C5.12 20 12 20 12 20s6.88 0 8.59-.47a2.78 2.78 0 001.95-1.95A29.94 29.94 0 0023 12a29.94 29.94 0 00-.46-5.58z"
          ></path>
          <polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02"></polygon>
        </g>
      </svg>
    ),
  };
  

  const galleryClass = `gallery ${activeTab === "tab1" ? "gallery-tab1" : activeTab === "tab2" ? "gallery-tab2"  : activeTab === "tab3" ? "gallery-tab3" : activeTab === "tab4" ? "gallery-tab4" : ""}`;
  
  return (
    <div className="myprofile-page">
      <div className="myaccount-header">
            <a href = '/notification' className="bell-icon"><img src="cart.png" alt="bell"/></a>
            <div className="cart-icon"><img src="bell.png" alt="cart"/></div>
      </div>
      <div className="myprofile-container">
        <div className="myprofile-info">
          <div className="myprofile-picture">
            <img src="userphoto.jpg" alt="profile" />
          </div>
          <h2>Emily</h2>
          <div className="myprofile-reputation">
            {[...Array(4)].map((_, i) => <img key={i} src="star_black.png" alt="star_black" />)}
            <img src="star_white.png" alt="star_white" />
          </div>
          <div className="myprofile-stats">
            <div className="myprofile-components">
              <h2>22</h2>
              <h4>Following</h4>
            </div>
            <div className="myprofile-components">
              <h2>34</h2>
              <h4>Followers</h4>
            </div>
            <div className="myprofile-components">
              <h2>50</h2>
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
              {tabIcons[tab]}
            </button>
          ))}
        </div>
        
        <div className="myprofile-content">
          <Gallery images={tabImages[activeTab]} className={galleryClass} links = {tabLinks[activeTab]}/>
        </div>
    
      </div>
      <Footer />
    </div>
  );
};

export default Myprofile;
