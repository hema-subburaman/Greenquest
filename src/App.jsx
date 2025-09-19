import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from "./Navbar";
import Getstarted from './Getstarted/Getstarted.jsx';
import Loginpage from './Loginpage/Loginpage.jsx';


const App = () => {
  return (
    
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Getstarted />} />
      <Route path="/loginpage" element={<Loginpage />} />
    </Routes>
    </BrowserRouter>
   
  );
};

export default App;
