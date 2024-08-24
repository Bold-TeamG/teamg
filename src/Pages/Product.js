import React from 'react';
import Footer from '../Components/footer';
import Searchbar from "../Components/Searchbar";
import '../css/Product.css';


const Product = () => {
    return (
    <div className="product-page">
      <Searchbar />
      <div className="product-container">
        <img src="art.jpg" alt="art" />
            
        <section className="product-description">
            <div className = "wrapper">
                <div className = "product-title">
                    <label>Diamond Art Club Lady</label>
                </div>
                <div className = "likes">
                    <img src='heart.png' alt="heart"/>
                    <p>1 Like</p>
                </div>
            </div>
            <div className = "product-price">
                <label>$44.00</label>
                <p>$58.07 after delivery and fees</p>
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
  