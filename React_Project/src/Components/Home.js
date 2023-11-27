import React from 'react';
import Navbar from './Components/Navbar';
import Account from './Components/Account';

const Home = ({ children }) => {
  return (
    <div>
      <Navbar />
      <main>
        {children}
      </main>
      <Account />
    </div>
  );
};

export default Home;