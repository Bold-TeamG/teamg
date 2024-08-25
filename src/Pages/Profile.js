
import React, { useEffect, useState } from 'react'
import '../css/Profile.css';
import { useNavigate } from 'react-router-dom';
import Footer from '../Components/footer';
import Gallery from '../Components/gallery'; 
import {db, storage} from '../firebase/index'
import { collection, query, where, getDocs } from 'firebase/firestore';
import { getFirestore, doc, getDoc } from 'firebase/firestore';
import { useParams } from 'react-router-dom';


const UserComponent = () => {
  const {userId} = useParams();
  const user_id = userId.toString();
  const [userData, setUserData] = useState(null);
  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const docRef = doc(db, "users", user_id);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
          const data = docSnap.data();
          // icon_photo にエンティティが含まれている場合はデコードする
          const decodedIconPhoto = data.icon_photo.replace(/&quot;/g, '');
          setUserData({
            ...data,
            icon_photo: decodedIconPhoto,
          });
        } else {
          console.warn("No document found with ID = 1");
        }
      } catch (error) {
        console.error("Error fetching user data: ", error);
      }
    };

    fetchUserData();
  }, []);

  return (
    <div className="profile-info">
      <div className="profile-picture">
        <img src={userData ? userData.icon_photo : 'https://placehold.jp/100x100.png'} alt="profile" />
      </div>
      <h2>{userData ? userData.name : 'loading'}</h2>
      <p>{userData ? userData.comment : 'loading'}</p>

      <div className="profile-stats">
        <div className="profile-components">
          <h2>14</h2>
          <h4>Following</h4>
        </div>
        <div className="profile-components">
          <h2>38</h2>
          <h4>Followers</h4>
        </div>
        <div className="profile-components">
          <h2>91</h2>
          <h4>Likes</h4>
        </div>
      </div>

      <div className="profile-actions">
        <button>Follow</button>
        <button>Message</button>
      </div>
    </div>
  );
};



export default function Profile () {
  const navigate = useNavigate();

    const handleBackClick = () => {
        navigate(-1); 
    };

  const [activeTab, setActiveTab] = useState("tab1");

  const tabImages = {
    tab1: ["/user.jpg", "/user.jpg", "/user.jpg"],
    tab2: ["/star_white.png", "/star_white.png", "/star_white.png"],
  };
  const tabIcons = {
    tab1: "/items.png",
    tab2: "/community_contents.png",
  };
  const galleryClass = `gallery ${activeTab === "tab1" ? "gallery-tab1" : activeTab === "tab2" ? "gallery-tab2" : ""}`;
  return (
    <div className="profile-page">
      <div className="account-header">
            <div className="back-icon" onClick={handleBackClick}>
                <img src="/arrowback.png" alt="戻る"/>
            </div>
        </div>
      <div className="profile-container">
        <UserComponent />
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
