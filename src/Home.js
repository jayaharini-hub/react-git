import React from 'react';


import Navbar from './Components/Navbar';
const Home = ({ children }) => {
  return (
    <div>
        
        <Navbar />
     
      <main>
        {children}
      </main>
      
    </div>
  );
};

export default Home;