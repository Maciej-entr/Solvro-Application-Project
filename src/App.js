import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/navbar/Navbar';
import './index.css';
import Home from './pages/Home';
import Item from './pages/Item';
import Cocktails from './pages/Cocktails';
import Contact from './pages/Contact';
import BestSellers from './pages/BestSellers';
import PrivacyPolicy from './pages/PrivacyPolicy';
import Favourite from './pages/Favourite';
function App() {
  return (
    <div className="App">
        
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/item/:id' element={<Item />} />
          <Route path='/cocktails' element={<Cocktails />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/bestsellers' element={<BestSellers/>} />
          <Route path='/privacy-policy' element={<PrivacyPolicy/>} />
          <Route path='/favourite' element={<Favourite/>} />
        </Routes>
    </div>
  );
}

export default App;