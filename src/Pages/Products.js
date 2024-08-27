import React, { useState, useEffect } from 'react';
import Footer from '../Components/footer';
import Searchbar from "../Components/Searchbar";
import '../css/Products.css';
import { useParams } from 'react-router-dom';
import { doc, getDoc } from 'firebase/firestore';
import { db } from '../firebase/index';

const Products = () => {
  const { postId } = useParams();
  const post_id = parseInt(postId);
  const [Data, setData] = useState(null);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const docRef = doc(db, "posts", post_id.toString());
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
          setData(docSnap.data());
        } else {
          console.warn("No document found with ID =", post_id);
        }
      } catch (error) {
        console.error("Error fetching user data: ", error);
      }
    };

    fetchUserData();
  }, [post_id]);

  return (
    <div className="products-page">
      <Searchbar keyword={Data ? Data.goods_name : ''} />
      <div className="products-container">
        <img 
          src={Data ? Data.products_url : "/loading.png"} 
          className="products" 
          alt="products"
        />
      </div>
      <Footer />
    </div>
  );
};

export default Products;
