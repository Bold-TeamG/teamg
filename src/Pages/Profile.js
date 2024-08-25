import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Footer from '../Components/footer';
import Gallery from '../Components/gallery';
import { db } from '../firebase/index';
import { collection, query, where, getDocs, doc, getDoc } from 'firebase/firestore';
import '../css/Profile.css';

const UserComponent = ({ user }) => {
  if (!user) {
    return <div>Loading...</div>;
  }

  const { icon_photo, name, comment, following, followers, likes } = user;

  return (
    <div className="profile-info">
      <div className="profile-picture">
        <img src={icon_photo} alt="profile" />
      </div>
      <h2>{name || 'No name provided'}</h2>
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
        const postsQuery = query(collection(db, "posts"), where("user_id", "==", userId));
        const postsSnap = await getDocs(postsQuery);
        const postsData = postsSnap.docs.map(doc => doc.data());

        // Fetch products data
        const productsQuery = query(collection(db, "products"), where("user_id", "==", userId));
        const productsSnap = await getDocs(productsQuery);
        const productsData = productsSnap.docs.map(doc => doc.data());

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
  const images = activeTab === "tab1" ? data.products.map(product => product.img_url) : data.posts.map(post => post.thumbnail_url);
  const links = activeTab === "tab1" ? data.products.map(product => `/product/${product.id}`) : data.posts.map(post => `/detail/${post.id}`);

  return (
    <div className="profile-page">
      <div className="account-header">
        <div className="back-icon" onClick={handleBackClick}>
          <img src="/arrowback.png" alt="Back" />
        </div>
      </div>
      <div className="profile-container">
        <UserComponent user={data.user} />
        <div className="profile-icon">
          <button
            className={`tab ${activeTab === "tab1" ? "active" : ""}`}
            onClick={() => setActiveTab("tab1")}
          >
            <img src="/items.png" alt="Posts" />
          </button>
          <button
            className={`tab ${activeTab === "tab2" ? "active" : ""}`}
            onClick={() => setActiveTab("tab2")}
          >
            <img src="/community_contents.png" alt="Products" />
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
