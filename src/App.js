import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './Components/Login';
import Home from './Home';
import Signup from './Components/Signup';
import Dhandam from './Components/Dhandam';
const App = () => {
  return (
    <div>
      <video src='./Images/video.mp4' autoPlay loop muted id="background-video" />
     
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/Dhandam" element={<Dhandam />} />
        </Routes>
     
    </div>
  );
};

export default App;
