import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Getstarted.css';

const Getstarted = () => {
  const handleClick = () => {
    alert('Welcome! Get started with your journey.');
  };

  return (
    <div className="landing-container">
      <button className="get-started-btn" onClick={handleClick}>
        GET STARTED
      </button>
    </div>
  );
};

export default Getstarted;