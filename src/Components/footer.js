import React from 'react';
import { Link } from 'react-router-dom';
import '../css/footer.css';

export default function Footer() {
  return (
    <footer>
        <Link to="/community">
            <div className = "component">
                <img src="home.png" alt="home" />
                <h2>Community</h2>
            </div>
        </Link>
        <Link to="/">
            <div className = "component">
                <img src="search.png" alt="search" />
                <h2>Discover</h2>
            </div>
        </Link>
        <Link to="/productpost">
            <div className = "component">
                <img src="plus.png" alt="plus" />
                <h2>Sell</h2>
            </div>
        </Link>
        <Link to="/myprofile">
            <div className = "component">
                <img src="human.png" alt="user" />
                <h2>Me</h2>
            </div>
        </Link>
    </footer>
  );
}