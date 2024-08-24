import React from 'react';
import '../css/ProductPost.css';


const ProductPost = () => {
    return (
    <div className="product-post-container">

        <header>
            <button className="product-post-back-button">×</button>
            <h1>Sell an item</h1>
            <button className="product-post-list-button">List</button>
        </header>

        <section className="product-post-photo-upload">
            <img src="addphoto.png" alt="addphoto" />
            <img src="white.jpeg" alt="white" />
            <img src="white.jpeg" alt="white" />
            <img src="white.jpeg" alt="white" />
        </section>

        <section className="product-post-description">
            <div className = "product-post-title">
                <label>Description</label>
            </div>
            <div className="product-post-description-input">
                <input type="text"   placeholder="What are you selling?"></input>
                <input type="text"  placeholder="Describe your item(5+ words)"></input>
                <input type="text" placeholder="Add up to 7 hushtags(Optional)"></input>
            </div>

        </section>

        <section className="product-post-details">
            <div className = "product-post-title">
                <label>Details</label>
            </div>

            <div className="product-post-detail-item">
                <label for="product-post-category">Category</label>
                <select id="product-post-category">
                    <option>Select category</option>   
                </select>
            </div>

            <div className="product-post-detail-item">
                <label for="product-post-brand">Brand</label>
                <select id="product-post-brand">
                    <option>Select brand</option>
                
                </select>
            </div>

            <div className="product-post-detail-item">
                <label for="product-post-condition">Condition</label>
                <select id="product-post-condition">
                    <option>Select condition</option>
                </select>
            </div>

            <div className="product-post-detail-item">
                <label for="product-post-color">Color</label>
                <select id="product-post-color">
                    <option>Select color (optional)</option>
                </select>
            </div>
        </section>
        <div className = "product-post-title">
                <label>Delivery</label>
        </div>
        <div className = "product-post-submitbutton">
            <button>List</button>
        </div>
        
        <div className="product-post-buttons">
            <button className="product-post-button">Product</button>
            <button className="product-post-button">Video</button>
        </div>
    </div>

    );
  };
  
  export default ProductPost;
  