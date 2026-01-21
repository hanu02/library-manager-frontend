import React from 'react';
import { Outlet } from 'react-router-dom'; // renders the child routes
import Navbar from '../components/Navbar';  // adjust path if needed

export default function MainLayout() {
  return (
    <div className="d-flex">
      {/* Sidebar */}
      <Navbar />

      {/* Main content area */}
      <div className="flex-grow-1 p-4">
        <Outlet /> {/* Protected pages will render here */}
      </div>
    </div>
  );
}
