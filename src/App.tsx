// src/App.tsx
import { useState, useEffect } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import Books from './pages/Books';
import Members from './pages/Members';
import Borrow from './pages/Borrow';
import Staffs from './pages/Staffs';
import Genres from './pages/Geners'; 
import MainLayout from './layout/MainLayout';

export default function App() {
  // State to check if user is logged in
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // Check token in localStorage when app starts
  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      setIsLoggedIn(true);
    }
  }, []);

  // Function to log out
  const handleLogout = () => {
    localStorage.removeItem('token'); // remove token
    setIsLoggedIn(false);             // redirect to login
  };

  return (
    <Routes>
      {/* Public route: Login page */}
      <Route
        path="/login"
        element={<Login setIsLoggedIn={setIsLoggedIn} />}
      />

      {/* Protected routes: only visible if logged in */}
      <Route
        element={
          isLoggedIn ? (
            <MainLayout handleLogout={handleLogout} />
          ) : (
            <Navigate to="/login" />
          )
        }
      >
        <Route path="/" element={<Dashboard />} />
        <Route path="/books" element={<Books />} />
        <Route path="/members" element={<Members />} />
        <Route path="/borrow" element={<Borrow />} />
        <Route path="/genres" element={<Genres />} />
        <Route path="/staffs" element={<Staffs />} />
      </Route>

      {/* Page not found */}
      <Route path="*" element={<h1>Page not found</h1>} />
    </Routes>
  );
}
