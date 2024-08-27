import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Footer from '../Components/footer';
import Gallery from '../Components/gallery';
import { db } from '../firebase/index';
import { collection, query, where, getDocs, doc, getDoc } from 'firebase/firestore';
import '../css/Profile.css';

const UserComponent = ({ user }) => {
  const placeholderImage = "https://placehold.jp/100x100.png";
  const placeholderName = "Loading name...";
  const placeholderComment = "Loading comment...";

  const icon_photo = user && user.icon_photo ? user.icon_photo : placeholderImage;
  const name = user && user.name ? user.name : placeholderName;
  const comment = user && user.comment ? user.comment : placeholderComment;
  const following = user && user.following ? user.following : 0;
  const followers = user && user.followers ? user.followers : 0;
  const likes = user && user.likes ? user.likes : 0;

  return (
    <div className="profile-info">
      <div className="profile-picture">
      <img src={user && user.icon_photo ? user.icon_photo : "https://placehold.jp/100x100.png"} alt="profile" />
      </div>
      <h2>{name || 'No name provided'}</h2>
      <div className="profile-reputation">
            <img src= {user && user.title ? user.title  : "Loading"} alt="star_white" />
      </div>
      <p>{comment || 'No comment available'}</p>

      <div className="profile-stats">
        <div className="profile-components">
          <h2>{following || 0}</h2>
          <h4>Following</h4>
        </div>
        <div className="profile-components">
          <h2>{followers || 0}</h2>
          <h4>Followers</h4>
        </div>
        <div className="profile-components">
          <h2>{likes || 0}</h2>
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

export default function Profile() {
  const navigate = useNavigate();
  const { userId } = useParams();
  const UserId = parseInt(userId);
  const [activeTab, setActiveTab] = useState("tab1");
  const [data, setData] = useState({
    user: null,
    posts: [],
    products: []
  });

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        // Fetch user data
        const userRef = doc(db, "users", userId);
        const userSnap = await getDoc(userRef);
        let userData = null;
  
        if (userSnap.exists()) {
          userData = userSnap.data();
          const decodedIconPhoto = userData.icon_photo?.replace(/&quot;/g, '') || 'https://placehold.jp/100x100.png';
          userData = {
            ...userData,
            icon_photo: decodedIconPhoto
          };
        } else {
          console.warn(`No document found with ID = ${userId}`);
        }
  
        // Fetch posts data
        const postsQuery = query(collection(db, "posts"), where("user_id", "==", UserId));
        const postsSnap = await getDocs(postsQuery);
        const postsData = postsSnap.docs.map(doc => ({
          ...doc.data(),
          id: doc.id // ドキュメントIDを追加
        }));
  
        // Fetch products data
        const productsQuery = query(collection(db, "products"), where("user_id", "==", UserId));
        const productsSnap = await getDocs(productsQuery);
        const productsData = productsSnap.docs.map(doc => ({
          ...doc.data(),
          id: doc.id // ドキュメントIDを追加
        }));
  
        // Set data to state
        setData({
          user: userData,
          posts: postsData,
          products: productsData
        });
  
      } catch (error) {
        console.error("Error fetching data: ", error);
      }
    };
  
    fetchUserData();
  }, [userId]);
  
  const handleBackClick = () => {
    navigate(-1); 
  };

  const galleryClass = `gallery ${activeTab === "tab1" ? "gallery-tab1" : activeTab === "tab2" ? "gallery-tab2" : ""}`;
  const images = activeTab === "tab1" ? data.products.map(product => product.img_url) : data.posts.map(post => post.thunbnail_url);
  const links = activeTab === "tab1" ? data.products.map(product => `/product/${product.id}`) : data.posts.map(post => `/detail/${post.id}`);

  return (
    <div className="profile-page">
      <div className="account-header">
      <div className="back-icon" onClick={handleBackClick}>
                <svg 
                  width="24" 
                  height="24" 
                  viewBox="0 0 24 24" 
                  fill="none" 
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path 
                    d="M15 19L8 12L15 5" 
                    stroke="#000" 
                    stroke-width="2" 
                    stroke-linecap="round" 
                    stroke-linejoin="round"
                  />
                </svg>
              </div>
      </div>
      <div className="profile-container">
        <UserComponent user={data.user} />
        <div className="profile-icon">
          <button
            className={`tab ${activeTab === "tab1" ? "active" : ""}`}
            onClick={() => setActiveTab("tab1")}
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" width="24" height="24">
            <g stroke={activeTab === "tab1" ? "#000" : "#888"} stroke-width="4" fill="none">
            <polygon points="4,20 32,2 60,20 32,38" />
            <polygon points="4,20 4,44 32,62 60,44 60,20 32,38" />
            <polyline points="4,20 32,38 60,20" />
            <line x1="32" y1="38" x2="32" y2="62" />
            </g>
            </svg>



          </button>
          <button
            className={`tab ${activeTab === "tab2" ? "active" : ""}`}
            onClick={() => setActiveTab("tab2")}
          >
            <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke={activeTab === "tab2" ? "#000" : "#888"}
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            >
            <path
            d="M22.54 6.42a2.78 2.78 0 00-1.95-1.95C18.88 4 12 4 12 4s-6.88 0-8.59.47A2.78 2.78 0 001.46 6.42 29.94 29.94 0 001 12a29.94 29.94 0 00.46 5.58 2.78 2.78 0 001.95 1.95C5.12 20 12 20 12 20s6.88 0 8.59-.47a2.78 2.78 0 001.95-1.95A29.94 29.94 0 0023 12a29.94 29.94 0 00-.46-5.58z"
            ></path>
            <polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02"></polygon>
            </svg>

          </button>
        </div>

        <div className="profile-content">
          <Gallery
            images={images}
            className={galleryClass}
            links={links}
          />
        </div>
      </div>
      <Footer />
    </div>
  );
}
