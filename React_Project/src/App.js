import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './Components/Login';
import Home from './Home';
import Signup from './Components/Signup';
import Category from './Components/Category';
import Author from './Components/Author';


const App = () => {
  return (
    <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/Category" element={<Category />} />
          <Route path="/Author" element={<Author />} />
          
        </Routes>
    </div>
  );
};

export default App;
