import React, { useEffect, useRef, useState, createRef } from 'react';
import Footer from '../Components/footer';
import Searchbar from "../Components/Searchbar";
import '../css/Product.css';
import { useParams } from 'react-router-dom';
import { doc, getDoc } from 'firebase/firestore';
import {db, storage} from '../firebase/index';


const Product = () => {
    const {productId} = useParams();
    const product_id = productId.toString();
    const [productData, setProductData] = useState(null);
  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const docRef = doc(db, "products", product_id);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
            console.log("Document data:", docSnap.data());
          const data = docSnap.data();
          // img_url にエンティティが含まれている場合はデコードする
          const decodedIconPhoto = data.img_url.replace(/&quot;/g, '');
          setProductData({
            ...data,
            img_url: decodedIconPhoto,
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
    <div className="product-page">
      <Searchbar />
      <div className="product-container">
        <div className = "product-photo">
        <img src={productData ? productData.img_url : 'https://placehold.jp/362x362.png'} alt="art" />
        </div>
        <section className="product-description">
            <div className = "wrapper">
            <div className="product-title">
                <label>{productData ? productData.name : 'Loading...'}</label>
            </div>
                <div className = "likes">
                    <img src='/heart.png' alt="heart"/>
                    <p>1 Like</p>
                </div>
            </div>
            <div className = "product-price">
                <label>{productData ? productData.price : 'Loading...'}</label>
                <p>{productData ? productData.comment : 'Loading...'}</p>
            </div>
            <div className = "add-cart">
            <button>Add to cart</button>
            </div>
        </section>
        
    </div>
     <Footer />
    </div>
    );
  };
  
  export default Product;
  