import { NavLink, useNavigate } from 'react-router-dom';
import React from 'react';

export default function Navbar() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/login');
  };

  return (
    <div
      className="d-flex flex-column vh-100 p-3 bg-light"
      style={{ width: '220px' }}
    >
      {/* Logo / Title */}
      <h3 className="mb-4 text-center">📚 Library Manager</h3>

      {/* Navigation Links */}
      <nav className="nav flex-column mb-auto">
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? 'nav-link active' : 'nav-link text-dark'
          }
        >
          Dashboard
        </NavLink>
        <NavLink
          to="/books"
          className={({ isActive }) =>
            isActive ? 'nav-link active' : 'nav-link text-dark'
          }
        >
          Books
        </NavLink>
        <NavLink
          to="/members"
          className={({ isActive }) =>
            isActive ? 'nav-link active' : 'nav-link text-dark'
          }
        >
          Members
        </NavLink>
        <NavLink
          to="/borrow"
          className={({ isActive }) =>
            isActive ? 'nav-link active' : 'nav-link text-dark'
          }
        >
          Borrow
        </NavLink>
        <NavLink
          to="/geners"
          className={({ isActive }) =>
            isActive ? 'nav-link active' : 'nav-link text-dark'
          }
        >
          Genres
        </NavLink>
        <NavLink
          to="/staffs"
          className={({ isActive }) =>
            isActive ? 'nav-link active' : 'nav-link text-dark'
          }
        >
          Staffs
        </NavLink>
      </nav>

      {/* Logout button */}
      <button
        className="btn btn-danger mt-auto"
        onClick={handleLogout}
      >
        Logout
      </button>
    </div>
  );
}
