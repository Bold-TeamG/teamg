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
        <div className = "icon-items">
          <div className = "icon-item">
            <img alt="Women" class="Image-sc-a7e7e455-1 components__NavImage-sc-995f7d35-1 cxkPKW fCugcv" src="https://u-web-assets.mercdn.net/assets/meganavCategoryIcon/1.svg" />
            <h6>Women</h6>
          </div>
          <div className = "icon-item">
            <img alt="Men" class="Image-sc-a7e7e455-1 components__NavImage-sc-995f7d35-1 cxkPKW fCugcv" src="https://u-web-assets.mercdn.net/assets/meganavCategoryIcon/2.svg" />
            <h6>Men</h6>
          </div>
          <div className = "icon-item">
          <img alt="Electronics" class="Image-sc-a7e7e455-1 components__NavImage-sc-995f7d35-1 cxkPKW fCugcv" src="https://u-web-assets.mercdn.net/assets/meganavCategoryIcon/7.svg" />
            <h6>Electronics</h6>
          </div>
          <div className = "icon-item">
          <img alt="Toys" class="Image-sc-a7e7e455-1 components__NavImage-sc-995f7d35-1 cxkPKW fCugcv" src="https://u-web-assets.mercdn.net/assets/meganavCategoryIcon/1611.svg" />
            <h6>Toys</h6>
          </div>
          <div className = "icon-item">
            <img alt="Gaming" class="Image-sc-a7e7e455-1 components__NavImage-sc-995f7d35-1 cxkPKW fCugcv" src="https://u-web-assets.mercdn.net/assets/meganavCategoryIcon/84.svg" />
            <h6>Gaming</h6>
          </div>
          <div className = "icon-item">
            <img alt="Handbags" class="Image-sc-a7e7e455-1 components__NavImage-sc-995f7d35-1 cxkPKW fCugcv" src="https://u-web-assets.mercdn.net/assets/meganavCategoryIcon/21.svg" />
            <h6>Handbags</h6>
          </div>
          <div className = "icon-item">
          <img alt="Home" class="Image-sc-a7e7e455-1 components__NavImage-sc-995f7d35-1 cxkPKW fCugcv" src="https://u-web-assets.mercdn.net/assets/meganavCategoryIcon/4.svg" />
            <h6>Home</h6>
          </div>
          <div className = "icon-item">
            <img alt="Vintage" class="Image-sc-a7e7e455-1 components__NavImage-sc-995f7d35-1 cxkPKW fCugcv" src="https://u-web-assets.mercdn.net/assets/meganavCategoryIcon/5.svg" />
            <h6>Vintage</h6>
          </div>
          <div className = "icon-item">
          <img alt="Beauty" class="Image-sc-a7e7e455-1 components__NavImage-sc-995f7d35-1 cxkPKW fCugcv" src="https://u-web-assets.mercdn.net/assets/meganavCategoryIcon/6.svg" />
            <h6>Beauty</h6>
          </div>
          <div className = "icon-item">
          <img alt="Kids" class="Image-sc-a7e7e455-1 components__NavImage-sc-995f7d35-1 cxkPKW fCugcv" src="https://u-web-assets.mercdn.net/assets/meganavCategoryIcon/3.svg" />
            <h6>Kids</h6>
          </div>
          <div className = "icon-item">
          <img alt="Sports" class="Image-sc-a7e7e455-1 components__NavImage-sc-995f7d35-1 cxkPKW fCugcv" src="https://u-web-assets.mercdn.net/assets/meganavCategoryIcon/8.svg" />
            <h6>Sports</h6>
          </div>
          <div className = "icon-item">
          <img alt="Handmade" class="Image-sc-a7e7e455-1 components__NavImage-sc-995f7d35-1 cxkPKW fCugcv" src="https://u-web-assets.mercdn.net/assets/meganavCategoryIcon/9.svg" />
            <h6>Handmade</h6>
          </div>
          <div className = "icon-item">
          <img alt="Office" class="Image-sc-a7e7e455-1 components__NavImage-sc-995f7d35-1 cxkPKW fCugcv" src="https://u-web-assets.mercdn.net/assets/meganavCategoryIcon/2882.svg" />
            <h6>Office</h6>
          </div>
          <div className = "icon-item">
          <img alt="Pet" class="Image-sc-a7e7e455-1 components__NavImage-sc-995f7d35-1 cxkPKW fCugcv" src="https://u-web-assets.mercdn.net/assets/meganavCategoryIcon/143.svg" />
            <h6>Pet</h6>
          </div>
          <div className = "icon-item">
          <img alt="Outdoor" class="Image-sc-a7e7e455-1 components__NavImage-sc-995f7d35-1 cxkPKW fCugcv" src="https://u-web-assets.mercdn.net/assets/meganavCategoryIcon/2633.svg" />
            <h6>Outdoor</h6>
          </div>
          <div className = "icon-item">
          <img alt="Tools" class="Image-sc-a7e7e455-1 components__NavImage-sc-995f7d35-1 cxkPKW fCugcv" src="https://u-web-assets.mercdn.net/assets/meganavCategoryIcon/3170.svg" />
            <h6>Tools</h6>
          </div>
          <div className = "icon-item">
          <img alt="Books" class="Image-sc-a7e7e455-1 components__NavImage-sc-995f7d35-1 cxkPKW fCugcv" src="https://u-web-assets.mercdn.net/assets/meganavCategoryIcon/141.svg" />
            <h6>Books</h6>
          </div>
          <div className = "icon-item">
          <img alt="Other" class="Image-sc-a7e7e455-1 components__NavImage-sc-995f7d35-1 cxkPKW fCugcv" src="https://u-web-assets.mercdn.net/assets/meganavCategoryIcon/0.svg" />
          <h6>Other</h6>
          </div>
        </div>
        <div className="recommended-user">
          <p>Recommend user</p>

          <Link to="/profile/4">
            <div className="user-section">
              <img className="user-photo" src={data.user.icon_photo} alt="user" />
              <span>{data.user.name}</span>
              <div>
        {/* 右矢印 */}
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
            stroke-width="2" 
            stroke-linecap="round" 
            stroke-linejoin="round"
          />
        </svg>
      </div>
            </div>
          </Link>

          <div className="product-grid">
            {data.posts.map((post, index) => (
              <a href = {`detail/${post.product_id}`}><img key={index} src={post.thunbnail_url} alt={`Product ${index + 1}`} /></a>
            ))}
          </div>
        </div>
        <div className="recommended-products">
          <p>Recommend products</p>
          <div className="product-grid">
            {data.products.map((product, index) => (
              <a href = {`product/${product.id}`} ><img key={index}  src={product.img_url} alt={`Product ${index + 1}`} /></a>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Discover;
