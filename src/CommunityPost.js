import React from 'react';
import './CommunityPost.css';


const CommunityPost = () => {
    return (
    <div class="community-post-container">

        <header>
            <button class="community-post-back-button">×</button>
            <h1>Post a video</h1>
            <button class="community-post-list-button">List</button>
        </header>

        <section class="community-post-video-upload">
            <img src="addvideo.png" alt="addvideo" />
        </section>

        <section class="community-post-description">
            <div class = "community-post-title">
                <label>Description</label>
            </div>
            <div class="community-post-description-input">
                <input type="text"  placeholder="Describe your video(5+ words)"></input>
                <input type="text" placeholder="Add up to 7 hushtags(Optional)"></input>
            </div>

        </section>

        <section class="community-post-details">
            <div class = "community-post-title">
                <label>Details</label>
            </div>

            <div class="community-post-detail-item">
                <label for="community-post-genre">Genre</label>
                <select id="community-post-genre">
                    <option>Select genre</option>   
                </select>
            </div>

            <div class="community-post-detail-item">
                <label for="community-post-product">Product</label>
                <select id="community-post-product">
                    <option>Select your product</option>
                </select>
            </div>

            <div class="community-post-detail-item">
                <input type="text"  placeholder="Add goods you used"></input>
            </div>

            
        </section>
        <div class = "community-post-submitbutton">
            <button>List</button>
        </div>
        <div class="community-post-buttons">
            <button class="community-post-button">Product</button>
            <button class="community-post-button">Video</button>
        </div>
    </div>
    );
  };
  
  export default CommunityPost;