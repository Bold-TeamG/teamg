import React from 'react';
import Footer from '../Components/footer';
import '../css/Myprofile.css';

const Myprofile = () => {
  return (
    <div className="myprofile-page">
      <div className="myprofile-header">
          <h2>Jacob West</h2>
      </div>
      <div className="myprofile-container">

        <div className = "myprofile-info">
          <div className="myprofile-picture">
            <img src="user.jpg" alt="profile" />
          </div>
          <h2>Jacob West</h2>
          <div className = "myprofile-reputation">
             <img src="star_black.png" alt="star_black" />
             <img src="star_black.png" alt="star_black" />
             <img src="star_black.png" alt="star_black" />
             <img src="star_black.png" alt="star_black" />
             <img src="star_white.png" alt="star_white" />
          </div>
          <div className="myprofile-stats">

            <div class = "myprofile-components">
              <h2>14</h2>
              <h4>Following</h4>
            </div>
            <div class = "myprofile-components">
              <h2>38</h2>
              <h4>Followers</h4>
            </div>
            <div class = "myprofile-components">
              <h2>91</h2>
              <h4>Likes</h4>
            </div>
          </div>

          <div className="myprofile-actions">
            <button>Edit profile</button>
          </div>
        </div>

      

        <div className="myprofile-icon">
            <img src="items.png" alt="items" />
            <img src="community_contents.png" alt="community_contents" />
            <img src="heart_items.png" alt="heart_items" />
            <img src="heart_community.png" alt="heart_community" />
        </div>

        <div className="myprofile-content">
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
