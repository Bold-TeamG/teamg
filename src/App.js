import logo from './logo.svg';
import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Profile from './Profile'; 
import ProductPost from './ProductPost'; 
import CommunityPost from './CommunityPost'; 
import Myprofile from './Myprofile';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={() => <div>Home Page</div>} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/myprofile" element={<Myprofile />} />
          <Route path="/productpost" element={<ProductPost />} />
          <Route path="/communitypost" element={<CommunityPost />} />
        </Routes>
        <footer>
          <div class = "component">
            <img src="home.png" alt="home" />
            <h2>Home</h2>
          </div>
          <div class = "component">
            <img src="search.png" alt="search" />
            <h2>Discover</h2>
          </div>
          <div class = "component">
            <img src="plus.png" alt="plus" />
            <h2>Sell</h2>
          </div>
          <div class = "component">
            <img src="human.png" alt="user" />
            <h2>Me</h2>
          </div>
        </footer>
      </div>
    </Router>
  );
}

export default App;
