import React, { useState, useEffect } from 'react';
import Footer from '../Components/footer';
import Searchbar from "../Components/Searchbar";
import '../css/Products.css';
import { doc, getDoc } from 'firebase/firestore';
import { db } from '../firebase/index';

export default function ProductsComponent({ postId }) {
  const [postData, setPostData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPostData = async () => {
      try {
        const docRef = doc(db, "posts", postId.toString());
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
          setPostData(docSnap.data());
        } else {
          console.warn("No document found with ID =", postId);
        }
      } catch (error) {
        console.error("Error fetching post data: ", error);
        setError("Error fetching post data");
      }
    };

    fetchPostData();
  }, [postId]);

  return (
    <div className="products-page modall">
      <Searchbar keyword={postData ? postData.goods_name : ''} />
      <div className="products-container">
        {error ? (
          <div className="error-message">{error}</div>
        ) : (
          <img 
            src={postData ? postData.products_url : "/loading.png"} 
            className="products" 
            alt="products"
          />
        )}
      </div>
    </div>
  );
}
