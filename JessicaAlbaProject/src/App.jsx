import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import EditProfile from './pages/EditProfile';

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="content">
        <Routes>
          <Route path="/" element={<Navigate to="/dashboard" />} />
          <Route path="/dashboard" element={<div>Dashboard</div>} />
          <Route path="/edit-profile" element={<EditProfile />} />
          <Route path="/edit-password" element={<div>Edit Password</div>} />
          <Route path="/logout" element={<div>User Logout</div>} />
        </Routes>
      </div>
    </div>
  );
}

export default App;