import logo from './logo.svg';
import './App.css';
import React from 'react';
import Home from './Home'; 
import Profile from './Profile'; 
import ProductPost from './ProductPost'; 
import CommunityPost from './CommunityPost'; 
import Myprofile from './Myprofile';
import { Route, Routes} from 'react-router-dom';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/myprofile" element={<Myprofile />} />
      <Route path="/productpost" element={<ProductPost />} />
      <Route path="/communitypost" element={<CommunityPost />} />
    </Routes>
  );
}

export default App;
