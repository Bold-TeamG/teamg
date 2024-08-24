import logo from './logo.svg';
import './css/App.css';
import React from 'react';
import Search from './Pages/Search'; 
import Community from './Pages/Community'; 
import Profile from './Pages/Profile'; 
import PostSwitcher from './Pages/PostSwitcher'; 
import Myprofile from './Pages/Myprofile';
import Discover from './Pages/Discover';
import { Route, Routes} from 'react-router-dom';

function App() {
  const videoLinks = [
    'https://samplelib.com/lib/preview/mp4/sample-5s.mp4',
    'https://samplelib.com/lib/preview/mp4/sample-10s.mp4',
    'https://samplelib.com/lib/preview/mp4/sample-15s.mp4',
    'https://samplelib.com/lib/preview/mp4/sample-20s.mp4',
    'https://samplelib.com/lib/preview/mp4/sample-30s.mp4'
  ];
 
  return (
    <Routes>
      <Route path="/" element={<Search />} />
      <Route path="/community" element={<Community links={videoLinks} />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/myprofile" element={<Myprofile />} />
      <Route path="/postswitcher" element={<PostSwitcher />} />
      <Route path="/discover" element={<Discover />} />
    </Routes>
  );
}

export default App;
