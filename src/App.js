import logo from './logo.svg';
import './css/App.css';
import React from 'react';
import Search from './Pages/Search'; 
import Community from './Pages/Community'; 
import Profile from './Pages/Profile'; 
import PostSwitcher from './Pages/PostSwitcher'; 
import Myprofile from './Pages/Myprofile';
import Discover from './Pages/Discover';
import DMNotification from './Pages/DMNotification';
import Products from './Pages/Products';
import Product from './Pages/Product';
import Top from './Pages/Top';
import Cart from './Pages/Cart';
import { Route, Routes} from 'react-router-dom';
import Genretop from './Pages/Genretop';
import Detail from './Pages/Detail';
import Notification from './Pages/NotificationSwitcher';
import { useModal } from 'react-hooks-use-modal';
import DM from './Pages/DM';

function App() {
 
  return (
    <Routes>
      <Route path="/" element={<Top />} />
      <Route path="/community" element={<Community />} />
      <Route path="/profile/:userId" element={<Profile />} />
      <Route path="/myprofile" element={<Myprofile />} />
      <Route path="/postswitcher" element={<PostSwitcher />} />
      <Route path="/discover" element={<Discover />} />
      <Route path="/products/:postId" element={<Products />} />
      <Route path="/product/:productId" element={<Product />} />
      <Route path="/genre/:genreId" element={<Genretop />} />
      <Route path="/detail/:postId" element={<Detail />} />
      <Route path="/notification" element={<Notification />} />
      <Route path="/dmnotification" element={<DMNotification />} />
      <Route path="/dm" element={<DM />} />
      <Route path="/cart" element={<Cart />} />
    </Routes>
  );
}

export default App;
