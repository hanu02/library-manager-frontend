// src/App.tsx
import { useState, useEffect } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import Books from './pages/Books';
import Members from './pages/Members';
import Borrow from './pages/Borrow';
import Staffs from './pages/Staffs';
import Geners from './pages/Geners';
import MainLayout from './layout/MainLayout';

export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem('token');
    setIsLoggedIn(!!token); // true if token exists
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('token'); // clear token
    setIsLoggedIn(false);             // redirect to login
  };

  return (
    <Routes>
      {/* Public route */}
      <Route path="/login" element={<Login setIsLoggedIn={setIsLoggedIn} />} />

      {/* Protected routes */}
      <Route
        element={isLoggedIn ? <MainLayout handleLogout={handleLogout} /> : <Navigate to="/login" />}
      >
        <Route path="/" element={<Dashboard />} />
        <Route path="/books" element={<Books />} />
        <Route path="/members" element={<Members />} />
        <Route path="/borrow" element={<Borrow />} />
        <Route path="/geners" element={<Geners />} />
        <Route path="/staffs" element={<Staffs />} />
      </Route>

      {/* Not found */}
      <Route path="*" element={<h1>Page not found</h1>} />
    </Routes>
  );
}
