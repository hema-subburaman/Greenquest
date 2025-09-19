import React, { useState } from 'react';
import './loginpage.css';
import backgroundImage from '../assets/tractor.jpg';

const Loginpage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email && password) {
      alert(`Logged in with: ${email}`);
    } else {
      alert('Please fill in all fields');
    }
  };

  return (
    <div className="login-page">
      <div className="login-container">
        <h1>Login</h1>
        <form onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="Email"
            className="input-box"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Password"
            className="input-box"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button type="submit" className="btn">Sign Up</button>
        </form>
        <p className="signup-text">
          Don’t have an account? <a href="#">Create account</a>
        </p>
      </div>
    </div>
  );
};

export default Loginpage;
