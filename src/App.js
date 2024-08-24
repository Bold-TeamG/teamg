import logo from './logo.svg';
import './css/App.css';
import React from 'react';
import Search from './Pages/Search'; 
import Community from './Pages/Community'; 
import Profile from './Pages/Profile'; 
import ProductPost from './Pages/ProductPost'; 
import CommunityPost from './Pages/CommunityPost'; 
import Myprofile from './Pages/Myprofile';
import { Route, Routes} from 'react-router-dom';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Search />} />
      <Route path="/community" element={<Community />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/myprofile" element={<Myprofile />} />
      <Route path="/productpost" element={<ProductPost />} />
      <Route path="/communitypost" element={<CommunityPost />} />
    </Routes>
  );
}

export default App;
