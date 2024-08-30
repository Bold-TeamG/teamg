import React, { useEffect, useState } from 'react';
import Footer from '../Components/footer';
import Searchbar from "../Components/Searchbar";
import '../css/Product.css';
import { doc, getDoc, collection, query, where, getDocs } from 'firebase/firestore';
import { db } from '../firebase/index';
import { Link } from 'react-router-dom';

export default function ProductComponent({ product_id }) {
  
  const [productData, setProductData] = useState(null);
  const [userData, setUserData] = useState(null);
  const [postsData, setPostsData] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProductAndUserData = async () => {
      try {
        // Fetch product data
        const docRef = doc(db, "products", product_id.toString());
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
          const productData = docSnap.data();
          const decodedIconPhoto = productData.img_url.replace(/&quot;/g, '');
          setProductData({
            ...productData,
            img_url: decodedIconPhoto,
          });

          // Fetch user data based on user_id in the product data
          const userRef = doc(db, "users", productData.user_id.toString());
          const userSnap = await getDoc(userRef);

          if (userSnap.exists()) {
            setUserData(userSnap.data());
          } else {
            setError("No user document found.");
          }

          // Fetch posts data where user_id matches
          const postsQuery = query(collection(db, "posts"), where("user_id", "==", productData.user_id));
          const postsSnap = await getDocs(postsQuery);
          const posts = postsSnap.docs.map(doc => ({
            ...doc.data(),
            id: doc.id
          }));
          setPostsData(posts);

        } else {
          setError("No product document found.");
        }
      } catch (error) {
        setError("Error fetching data: " + error.message);
      }
    };

    fetchProductAndUserData();
  }, [product_id]);

  return (
    <div className="product-page">
      <div className="product-container modall">
        {error ? (
          <div className="error-message">{error}</div>
        ) : (
          <>
            <div className="product-photo">
              <img src={productData ? productData.img_url : 'https://placehold.jp/362x362.png'} alt="art" />
              <div className="likes">
                <img src='/heart.png' alt="heart" />
              </div>
            </div>
            <section className="product-description">
              <div className="wrapper">
                <div className="product-title">
                  <label>{productData ? productData.name : 'Loading...'}</label>
                  <p>{productData ? productData.comment : 'Loading...'}</p>
                </div>
                <div className="product-price">
                  <label>{productData ? productData.price : 'Loading...'}</label>
                </div>
              </div>
              <div className="add-cart">
                <button>Add to cart</button>
              </div>
            </section>
            <Link to={`/profile/${productData ? productData.user_id : ''}`}>
              <div className="user-profile">
                <div className='product-left'>
                  <img 
                    src={userData && userData.icon_photo ? userData.icon_photo : "https://placehold.jp/100x100.png"} 
                    alt="profile" 
                  />
                  <div className='product-texts'>
                    <h4>{userData ? userData.name : 'Loading...'}</h4>
                    <p>{userData ? userData.comment : 'Loading user comment...'}</p>
                  </div>
                </div>
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
                    strokeWidth="2" 
                    strokeLinecap="round" 
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            </Link>
            <div className="related-posts">
              <h3>Related Posts</h3>
              <div className="posts-grid">
                {postsData.length > 0 ? (
                  postsData.map(post => (
                    <div key={post.id} className="post-item">
                      <Link to={`/detail/${post ? post.product_id : ''}`}>
                        <img src={post.thunbnail_url || 'https://placehold.jp/100x100.png'} alt={post.title || 'Post Image'} />
                        <p>{post.title || 'Untitled Post'}</p>
                      </Link>
                    </div>
                  ))
                ) : (
                  <p>No related posts available.</p>
                )}
              </div>
            </div>
          </>
        )}
      </div>
  
    </div>
  );
};
