import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Landing from './Landing'; // updated import
import Login from './Login'

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </>
  );
};

export default App;
