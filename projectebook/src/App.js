import React from 'react';
import {  Route, Routes } from 'react-router-dom';
import Login from './Components/Login';
import Navbar from './Components/Navbar';
import Signup from './Components/Signup';

const App = () => {
  return (
   <div>
      <Routes>
        <Route  path="/" element={<Navbar/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/signup" element={<Signup/>} />
        
      </Routes>
    
    </div>
  );
};

export default App;