import React from 'react';
import Footer from '../Components/footer';
import '../css/CommunityPost.css';


const CommunityPost = () => {
    return (
    <div className="community-post-container">

        <header>
            <button className="community-post-back-button"></button>
            <h1>Post a video</h1>
            <button className="community-post-list-button">List</button>
        </header>

        <section className="community-post-video-upload">
            <img src="addvideo.png" alt="addvideo" />
        </section>

        <section className="community-post-description">
            <div className = "community-post-title">
                <label>Description</label>
            </div>
            <div className="community-post-description-input">
                <input type="text"  placeholder="Describe your video(5+ words)"></input>
                <input type="text" placeholder="Add up to 7 hushtags(Optional)"></input>
            </div>

        </section>

        <section className="community-post-details">
            <div className = "community-post-title">
                <label>Details</label>
            </div>

            <div className="community-post-detail-item">
                <label for="community-post-genre">Genre</label>
                <select id="community-post-genre">
                    <option>Select genre</option>   
                </select>
            </div>

            <div className="community-post-detail-item">
                <label for="community-post-product">Product</label>
                <select id="community-post-product">
                    <option>Select your product</option>
                </select>
            </div>

            <div className="community-post-detail-item">
                <input type="text"  placeholder="Add goods you used"></input>
            </div>

            
        </section>
        <div className = "community-post-submitbutton">
            <button>List</button>
        </div>
    </div>
    );
  };
  
  export default CommunityPost;