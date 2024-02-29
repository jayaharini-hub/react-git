import React from 'react';
import '../Assests/Navbar.css';
const BackgroundVideo = () => {
  return (
    <div className="background-video-container">
      <video autoPlay loop muted className="background-video">
        <source src="https://youtu.be/9sNQFJAb3Ss" type="video/mp4" />
      </video>
    </div>
  );
};

export default BackgroundVideo;