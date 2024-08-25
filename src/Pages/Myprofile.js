import React, { useEffect, useRef, useState, createRef } from 'react';
import Footer from '../Components/footer';
import Gallery from '../Components/gallery'; 
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
    tab1: "items.png",
    tab2: "community_contents.png",
    tab3: "heart_items.png",
    tab4: "heart_community.png",
  };

  const galleryClass = `gallery ${activeTab === "tab1" ? "gallery-tab1" : activeTab === "tab2" ? "gallery-tab2"  : activeTab === "tab3" ? "gallery-tab3" : activeTab === "tab4" ? "gallery-tab4" : ""}`;
  
  return (
    <div className="myprofile-page">
      <div className="myaccount-header">
            <div className="bell-icon"><img src="bell.png" alt="bell"/></div>
            <div className="cart-icon"><img src="cart.png" alt="cart"/></div>
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
              <img src={tabIcons[tab]} alt={tab} />
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
