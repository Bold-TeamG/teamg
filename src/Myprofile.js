import React from 'react';
import Footer from './footer';
import './Myprofile.css';

const Myprofile = () => {
  return (
    <div className="profile-page">
      <div className="profile-header">
          <h2>Jacob West</h2>
      </div>
      <div className="profile-container">

        <div className = "profile-info">
          <div className="profile-picture">
            <img src="user.jpg" alt="profile" />
          </div>
          <h2>Jacob West</h2>
          <div className = "profile-reputation">
             <img src="star_black.png" alt="star_black" />
             <img src="star_black.png" alt="star_black" />
             <img src="star_black.png" alt="star_black" />
             <img src="star_black.png" alt="star_black" />
             <img src="star_white.png" alt="star_white" />
          </div>
          <div className="profile-stats">

            <div class = "profile-components">
              <h2>14</h2>
              <h4>Following</h4>
            </div>
            <div class = "profile-components">
              <h2>38</h2>
              <h4>Followers</h4>
            </div>
            <div class = "profile-components">
              <h2>91</h2>
              <h4>Likes</h4>
            </div>
          </div>

          <div className="profile-actions">
            <button>Edit profile</button>
          </div>
        </div>

      

        <div className="profile-icon">
            <img src="items.png" alt="items" />
            <img src="community_contents.png" alt="community_contents" />
            <img src="heart_items.png" alt="heart_items" />
            <img src="heart_community.png" alt="heart_community" />
        </div>

        <div className="profile-content">
          <div className="gallery">
            <img src="user.jpg" alt="gallery1" />
            <img src="user.jpg" alt="gallery2" />
            <img src="user.jpg" alt="gallery3" />
          </div>
      </div>
    </div>
    <Footer />
    </div>
  );
};

export default Myprofile;
