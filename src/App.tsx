import React from 'react';
import './App.css';
import { HomePage } from './pages/HomePage/HomePage';
import {Footer} from './pages/Footer/Footer';
import { Header } from './pages/Header/Header';
import { FAQ } from './pages/FAQ/FAQ';
import { NotFound } from './pages/NotFound/NotFound';
import { ContactUs } from './pages/ContactUs/ContactUs';
import { LoginPage } from './pages/LoginPage/LoginPage';
import { AboutUs } from './pages/AboutUs/AboutUs';
import { OrderCompleted } from './pages/OrderCompleted/OrderCompleted';
import { Route, Routes } from 'react-router-dom';
import { GridDefault } from './pages/GridDefault/GridDefault';
import { ShopList } from './pages/ShopList/ShopList';
import { ProductDetails } from './pages/ProductDetails/ProductDetails';
import { ShoppingCard } from './pages/ShoppingCard/ShoppingCard';
import { ShopLeftSidebar } from './pages/ShopLeftSidebar/ShopLeftSidebar';

function App() {
  return (
    <div className="App">
      <Header/>
      <main>
      <Routes>
        <Route path="/" element={<HomePage  />} />
        <Route path="/faq" element={<FAQ  />} />
        <Route path="/not-found" element={<NotFound  />} />
        <Route path="/contact-us" element={<ContactUs  />} />
        <Route path="/login" element={<LoginPage  />} />
        <Route path="/about-us" element={<AboutUs  />} />
        <Route path="/grid-default" element={<GridDefault />} />
        <Route path="/shop-list" element={<ShopList  />} />
        <Route path="/order-completed" element={<OrderCompleted  />} />
        <Route path="/product-details" element={<ProductDetails />} />
        <Route path="/shopping-card" element={<ShoppingCard  />} />
        <Route path="/left-sidebar" element={<ShopLeftSidebar  />} />
      </Routes>
                </main>
      <Footer/>
    </div>
  );
}

export default App;
