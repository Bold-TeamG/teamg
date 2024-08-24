import logo from './logo.svg';
import './css/App.css';
import React from 'react';
import Search from './Pages/Search'; 
import Community from './Pages/Community'; 
import Profile from './Pages/Profile'; 
import PostSwitcher from './Pages/PostSwitcher'; 
import Myprofile from './Pages/Myprofile';
import { Route, Routes} from 'react-router-dom';

function App() {
 
  return (
    <Routes>
      <Route path="/" element={<Search />} />
      <Route path="/community" element={<Community />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/myprofile" element={<Myprofile />} />
      <Route path="/postswitcher" element={<PostSwitcher />} />
    </Routes>
  );
}

export default App;
