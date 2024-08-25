import React, { useState, useEffect } from 'react';
import CommunityPost from './CommunityPost';
import ProductPost from './ProductPost';
import Footer from '../Components/footer';
import '../css/PostSwitcher.css';

const PostSwitcher = () => {
    const [isProductPost, setIsProductPost] = useState(true);
    const [isScrolling, setIsScrolling] = useState(false);

    useEffect(() => {
        let timeoutId;

        const handleScroll = () => {
            if (window.scrollY > 0) {
                setIsScrolling(true);
            } else {
                setIsScrolling(false);
            }

            clearTimeout(timeoutId);
            timeoutId = setTimeout(() => {
                if (window.scrollY === 0) {
                    setIsScrolling(false);
                } else {
                    setIsScrolling(true);
                }
            }, 150); // Slight delay for smoother transition
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
            clearTimeout(timeoutId);
        };
    }, []);

    return (
        <div className="post-switcher-container">
            <div className={`post-switcher-buttons ${isScrolling ? 'hide' : ''}`}>
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
            <Footer />
        </div>
    );
};

export default PostSwitcher;
