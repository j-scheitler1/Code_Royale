import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Landing from './Landing'; // updated import
import Login from './Login'
import About from './About'; // updated import
import Register from './Register'; // updated import
import Dashboard from './Dashboard';
import Editor from './Editor'; // updated import

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/login" element={<Login />} />
        <Route path="/about" element={<About />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/editor" element={<Editor />} />
        {/* Add more routes as needed */}
      </Routes>
    </>
  );
};

export default App;
