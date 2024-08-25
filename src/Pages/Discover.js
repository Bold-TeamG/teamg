import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Footer from '../Components/footer';
import Searchbar from "../Components/Searchbar";
import '../css/Discover.css';

import { doc, getDoc, collection, query, where, getDocs } from 'firebase/firestore';
import { db } from '../firebase/index';

const Discover = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const userRef = doc(db, "users", "4");
        const userSnap = await getDoc(userRef);

        if (userSnap.exists()) {
          const userData = userSnap.data();

          const postsQuery = query(collection(db, "posts"), where("user_id", "==", 4));
          const postsSnap = await getDocs(postsQuery);
          const postsData = postsSnap.docs.map(doc => doc.data());

          const productsQuery = query(collection(db, "products"), where("user_id", "==", 4));
          const productsSnap = await getDocs(productsQuery);
          const productsData = productsSnap.docs.map(doc => doc.data());

          setData({
            user: userData,
            posts: postsData,
            products: productsData,
          });
        } else {
          console.warn("No user found with ID = 3");
        }
      } catch (error) {
        console.error("Error fetching data: ", error);
      }
    };

    fetchUserData();
  }, []);

  if (!data) {
    return <div>Loading...</div>;
  }

  return (
    <div className="discover-page">
      <Searchbar />
      <div className="discover-container">
        <div className="recommended-user">
          <p>Recommend user</p>

          <Link to="/profile/4">
            <div className="user-section">
              <img className="user-photo" src="user.jpg" alt="user" />
              <span>{data.user.name}</span>
              <img className="arrow-photo" src="arrow.png" alt="arrow" />
            </div>
          </Link>

          <div className="product-grid">
            {data.posts.map((post, index) => (
              <img key={index} src={post.thunbnail_url} alt={`Product ${index + 1}`} />
            ))}
          </div>
        </div>
        <div className="recommended-products">
          <p>Recommend products</p>
          <div className="product-grid">
            {data.products.map((product, index) => (
              <img key={index} src={product.img_url} alt={`Product ${index + 1}`} />
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Discover;
