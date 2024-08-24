import React, { useState } from 'react';
import CommunityPost from './CommunityPost';
import ProductPost from './ProductPost';
import '../css/PostSwitcher.css'; 

const PostSwitcher = () => {
    const [isProductPost, setIsProductPost] = useState(true); 

    return (
        <div className="post-switcher-container">
            <div className="post-switcher-buttons">
                <button
                    className={`post-switcher-button ${isProductPost ? 'active' : ''}`}
                    onClick={() => setIsProductPost(true)}
                >
                    Product
                </button>
                <button
                    className={`post-switcher-button ${!isProductPost ? 'active' : ''}`}
                    onClick={() => setIsProductPost(false)}
                >
                    Video
                </button>
            </div>
            {isProductPost ? <ProductPost /> : <CommunityPost />}
        </div>
    );
};

export default PostSwitcher;
