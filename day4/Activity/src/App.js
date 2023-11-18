import React from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import Signup from './Components/Signup';
import Login from './Components/Login';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/forgot-password" element={<Signup />} />
        {/* <Route path="/forgot-password" element={<Navigate to="/signup" />} /> */}
      </Routes>
    </div>
  );
}

export default App;
