import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../css/footer.css';

export default function Footer() {
  const [activeLink, setActiveLink] = useState('');

  const handleClick = (linkName) => {
    setActiveLink(linkName);
  };

  return (
    <footer>
        <Link 
          to="/community"
          onClick={() => handleClick('community')}
          className={`component ${activeLink === 'community' ? 'active' : ''}`}
        >
            <img src="home.png" alt="home" />
            <p>Community</p>
        </Link>
        <Link 
          to="/discover"
          onClick={() => handleClick('discover')}
          className={`component ${activeLink === 'discover' ? 'active' : ''}`}
        >
            <img src="search.png" alt="search" />
            <p>Discover</p>
        </Link>
        <Link 
          to="/postswitcher"
          onClick={() => handleClick('postswitcher')}
          className={`component ${activeLink === 'postswitcher' ? 'active' : ''}`}
        >
            <img src="plus.png" alt="plus" />
            <p>Sell</p>
        </Link>
        <Link 
          to="/myprofile"
          onClick={() => handleClick('myprofile')}
          className={`component ${activeLink === 'myprofile' ? 'active' : ''}`}
        >
            <img src="human.png" alt="user" />
            <p>Me</p>
        </Link>
    </footer>
  );
}
