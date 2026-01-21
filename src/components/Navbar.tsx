import { NavLink, useNavigate } from 'react-router-dom';

type NavbarProps = {
  handleLogout?: () => void; // optional if you want to pass it from parent
};

export default function Navbar({ handleLogout }: NavbarProps) {
  const navigate = useNavigate();

  // If handleLogout not passed as prop, define a default one
  const logout = handleLogout
    ? handleLogout
    : () => {
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
          to="/genres"
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
      <button className="btn btn-danger mt-auto" onClick={logout}>
        Logout
      </button>
    </div>
  );
}
