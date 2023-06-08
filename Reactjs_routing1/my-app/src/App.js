// src/App.js
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './Components/Home';
import About from './Components/About';

const App = () => {
  return (
      
      <Routes>
        <>
        <p>hello sangi</p>
        <Route path="/Home" element={<Home/>} />
        <Route path="/About" element={<About/>} />
        </>
        </Routes>
        
  
    
  );
};

export default App;
