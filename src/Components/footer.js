import React from 'react';
import { Link } from 'react-router-dom';
import '../css/footer.css';

export default function Footer() {
  return (
    <footer>
        <Link to="/community">
            <div className = "component">
                <img src="home.png" alt="home" />
                <p>Community</p>
            </div>
        </Link>
        <Link to="/">
            <div className = "component">
                <img src="search.png" alt="search" />
                <p>Discover</p>
            </div>
        </Link>
        <Link to="/postswitcher">
            <div className = "component">
                <img src="plus.png" alt="plus" />
                <p>Sell</p>
            </div>
        </Link>
        <Link to="/myprofile">
            <div className = "component">
                <img src="human.png" alt="user" />
                <p>Me</p>
            </div>
        </Link>
    </footer>
  );
}