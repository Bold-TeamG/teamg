import logo from './logo.svg';
import './css/App.css';
import React from 'react';
import Search from './Pages/Search'; 
import Community from './Pages/Community'; 
import Profile from './Pages/Profile'; 
import PostSwitcher from './Pages/PostSwitcher'; 
import Myprofile from './Pages/Myprofile';
import Discover from './Pages/Discover';
import Products from './Pages/Products';
import Product from './Pages/Product';
import { Route, Routes} from 'react-router-dom';
import Genretop from './Pages/Genretop';

function App() {
 
  return (
    <Routes>
      <Route path="/" element={<Search />} />
      <Route path="/community" element={<Community />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/myprofile" element={<Myprofile />} />
      <Route path="/postswitcher" element={<PostSwitcher />} />
      <Route path="/discover" element={<Discover />} />
      <Route path="/products" element={<Products />} />
      <Route path="/product" element={<Product />} />
      <Route path="/genre" element={<Genretop />} />
    </Routes>
  );
}

export default App;
