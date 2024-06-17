import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  return (
    <nav className="navbar">
      <NavLink to="/dashboard" className={({ isActive }) => (isActive ? 'active' : '')}>Dashboard</NavLink>
      <NavLink to="/edit-profile" className={({ isActive }) => (isActive ? 'active' : '')}>Edit Profile</NavLink>
      <NavLink to="/edit-password" className={({ isActive }) => (isActive ? 'active' : '')}>Edit Password</NavLink>
      <NavLink to="/logout" className={({ isActive }) => (isActive ? 'active' : '')}>User Logout</NavLink>
    </nav>
  );
}

export default Navbar;