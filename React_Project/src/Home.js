import React from 'react';

import Footer from './Components/Footer';
import { CartProvider } from './Components/CartContext';
import Navbar from './Components/Navbar';
const Home = ({ children }) => {
  return (
    <div>
        <CartProvider>
        <Navbar />
      </CartProvider>
      <main>
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Home;